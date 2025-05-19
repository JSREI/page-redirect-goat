# 页面重定向靶场 (Page Redirect Goat)

这是一个用于Web逆向练习的页面重定向靶场，帮助开发者和安全研究人员学习和练习如何识别、分析和处理各种页面重定向技术。

## 项目介绍

页面重定向是Web应用中常见的技术，有时也被用于保护网站资源或混淆代码。本项目提供了多种重定向技术的实现示例，帮助学习者理解它们的工作原理以及如何进行逆向分析。

目前包含的测试用例：

- 检测开发者工具自动重定向
- 表单提交重定向
- JavaScript表单提交重定向

## 在线体验

访问 [https://jsrei.github.io/page-redirect-goat](https://jsrei.github.io/page-redirect-goat) 体验在线版本。

## 部署说明

本项目使用GitHub Pages自动部署。

### 自动部署

当代码推送到`main`分支时，GitHub Actions会自动触发部署流程：

1. 检出最新代码
2. 配置GitHub Pages环境
3. 将整个仓库内容部署到GitHub Pages

无需任何手动操作，代码推送后几分钟内即可在GitHub Pages上查看最新版本。

### 手动部署

如需手动触发部署，可以：

1. 进入GitHub仓库
2. 点击"Actions"标签
3. 选择"Deploy to GitHub Pages"工作流
4. 点击"Run workflow"按钮并选择`main`分支

## 本地运行

1. 克隆这个仓库：
   ```
   git clone https://github.com/JSREI/page-redirect-goat.git
   ```

2. 进入项目目录：
   ```
   cd page-redirect-goat
   ```

3. 使用任何HTTP服务器运行，例如：
   ```
   # 如果你有Python
   python -m http.server 8080
   
   # 如果你有Node.js
   npx serve
   ```

4. 在浏览器中访问 `http://localhost:8080`

## 贡献

欢迎提交Pull Request添加新的测试用例或改进现有功能。

## GitHub Pages配置

要启用GitHub Pages部署，需要完成以下配置：

1. 进入仓库 **Settings** > **Pages**
2. 选择 **GitHub Actions** 作为部署源
3. 确保仓库设置了适当的权限允许Actions运行

## 关于我们

JSREI是一个专注于Web逆向工程研究的组织。欢迎加入社区交流群：

### 微信交流群

扫码加入逆向技术微信交流群：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016230653669.png" width="200">

### 个人微信

如群二维码过期，可以加我个人微信，发送【逆向群】拉你进群：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20231030132026541-7614065.png" width="200">

### Telegram交流群

[点此](https://t.me/jsreijsrei)或扫码加入TG交流群：

<img src="https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016231143315.png" width="200">

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。 