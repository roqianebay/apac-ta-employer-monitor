# 用 GitHub 发布 APAC TA Employer Monitor（5 分钟）

项目目录：`C:\Users\roqian\Desktop\Test for Cursor\apac-ta-employer-monitor`

这是**纯静态看板**（单页 HTML + 内嵌示意数据），无需爬虫即可公网访问。

## 一键发布（已安装 GitHub CLI 且已登录）

```powershell
cd "C:\Users\roqian\Desktop\Test for Cursor\apac-ta-employer-monitor"
.\publish-github.ps1
```

## 手动步骤

### 1. 新建仓库

https://github.com/new → 名称 `apac-ta-employer-monitor` → **Public** → 不要加 README → Create

### 2. 推送

```powershell
cd "C:\Users\roqian\Desktop\Test for Cursor\apac-ta-employer-monitor"
git remote add origin https://github.com/你的用户名/apac-ta-employer-monitor.git
git push -u origin main
```

### 3. 开启 GitHub Pages

仓库 **Settings → Pages** → **Source** 选 **GitHub Actions**

**Actions** 里等 **Deploy GitHub Pages** 变绿（约 1–2 分钟）。

### 4. 公网地址

```text
https://你的用户名.github.io/apac-ta-employer-monitor/
```

## 更新网站

改 `web/index.html` 后：

```powershell
git add web/index.html
git commit -m "Update dashboard data"
git push
```

推送后会自动重新部署。

## Token 登录（Authorize 按钮不可用）

与 policy monitor 相同，见 `apac-policy-monitor/DEPLOY-GITHUB.md` 中的 Token 说明；把目录换成本项目的 `apac-ta-employer-monitor` 即可。