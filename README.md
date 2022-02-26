## 开发

```bash
# 克隆项目
git clone https://github.com/SunSeekerX/lollipop-admin.git

# 进入项目目录
cd lollipop-admin

# 安装依赖,已经配置了国内镜像，不需要任何代理
yarn

# 启动服务
yarn dev
```

浏览器访问 http://localhost:6553

## 发布

```bash
# 构建测试环境
yarn build:stage

# 构建生产环境
yarn build:prod
```

## 内置功能

- 区块链
  - 钱包地址生成
  - 助记词生成（12 位 24 位）

## 问题记录

1. 在尝试使用 vue3+vite+element-plus 版本开发的过程中出现的问题
   1. bip39 打包之后无法工作，不清楚原因，猜测是没有经过编译，开发环境下正常
   2. 尝试使用 vue-cli+vue3 重建项目，难度大，并且 vuecli5 webpack 没有加入腻子补丁，网上文章较少，最终决定使用 vue2 版本的 ruoyi
   3. vue2+vue-cli 作为工业级别的打包工具还是有其存在的道理,vue3+vite 太新了

## 鸣谢

项目基于 [https://github.com/yangzongzhuan/RuoYi-Vue](https://github.com/yangzongzhuan/RuoYi-Vue)

以太坊靓号生成（vanity-eth）：[https://github.com/bokub/vanity-eth](https://github.com/bokub/vanity-eth)
