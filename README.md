# 东海幻想身份生成器 · AIGC Identity Lab

面向 AIGC 绘画社线下宣传活动的手机优先互动网页。同学扫码后回答五个问题，即可得到确定性的异世界校园身份卡，并保存 PNG 分享卡。

## 特性

- 5 个选择题，覆盖专业、性格、世界观、代表色和偏好能力
- 12 种原创身份原型；同样的答案始终得到同样结果，全部原型均可触达
- 12 张为本项目原创生成的角色概念画，每种身份都有独立图像；原生 Canvas 生成 PNG，预览后可下载或长按保存
- 活动海报和现场二维码：打开 `#/poster`，点击“打印海报”即可打印 A4
- 完全静态，无后端、登录、数据库、付费 API 或运行时生图请求
- URL Hash 路由；刷新分享结果页不会出现 GitHub Pages 的 SPA 404

> 页面使用 Google Fonts 加载字体；离线时自动回退系统字体。其他运行功能均在浏览器本地完成。全部角色画保存在项目内，不依赖外部图片服务器。

## 本地运行

需要 Node.js 20.19+ 或 22.12+ 与 pnpm 10。

```bash
pnpm install
pnpm dev
```

构建与预览：

```bash
pnpm build
pnpm preview
```

## GitHub Pages 部署

1. 创建公开 GitHub 仓库并推送源码到 `main`。
2. 仓库 `Settings → Pages → Build and deployment → Source` 选择 **GitHub Actions**。
3. `.github/workflows/deploy.yml` 在每次推送 `main` 后自动构建并部署 `dist`。
4. 页面地址通常是 `https://<用户名>.github.io/<仓库名>/`。二维码由当前页面地址自动生成，所以无需手工改配置。

Vite 使用相对资源路径；整站在 GitHub Pages 项目子路径可直接运行。结果链接形如 `#/result/01230`，刷新时只请求根页面，避免 404。

## 身份逻辑

第三题选择世界观家族，其余答案确定该家族的三种身份之一；所有答案还影响卡片的属性、代表色、专业与性格标签、序列号。规则在 `src/identity.js`，无随机数。12 张原创生成的角色概念画在 `public/cards/`，由 `src/exportCard.js` 绘入 PNG 分享卡。生成提示与各角色主题见 [ART_DIRECTION.md](ART_DIRECTION.md)。

## 现场使用

用电脑打开 `#/poster` 全屏展示，或打印 A4/A3 海报并放大二维码。建议手机提前扫描一次确认现场网络。可让同学完成测试后保存 PNG，再把现场作品展示墙作为社团视觉能力介绍。

## 许可

项目代码与视觉素材由本项目原创制作，按 [MIT](LICENSE) 授权。外部依赖各自遵循其开源许可证。
