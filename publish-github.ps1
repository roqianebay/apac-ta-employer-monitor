$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Gh = "$env:ProgramFiles\GitHub CLI\gh.exe"
if (-not (Test-Path $Gh)) { $Gh = "$env:LocalAppData\Programs\GitHub CLI\gh.exe" }
if (-not (Test-Path $Gh)) { throw "Install GitHub CLI: winget install GitHub.cli" }

Set-Location $Root
& $Gh auth status

$Name = "apac-ta-employer-monitor"
$User = & $Gh api user -q .login
Write-Host "GitHub user: $User"

$remotes = @(git remote 2>$null)
if ($remotes -contains "origin") {
  Write-Host "Remote origin already set."
} else {
  & $Gh repo create $Name --public --source=. --remote=origin --description "APAC ER News Update V2.0 (layoffs, severance, static dashboard)"
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Create failed (repo may exist). Adding remote manually..."
    git remote add origin "https://github.com/$User/$Name.git"
  }
}

git push -u origin main

& $Gh api "repos/$User/$Name/pages" -X POST -f build_type=workflow 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Pages may already be enabled, or enable manually: Settings -> Pages -> GitHub Actions"
}

$Url = "https://$User.github.io/$Name/"
Write-Host ""
Write-Host "Pushed. Enable Pages: repo Settings -> Pages -> Source = GitHub Actions"
Write-Host "After Deploy GitHub Pages workflow succeeds, open:"
Write-Host $Url