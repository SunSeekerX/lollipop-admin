import Layout from '@/layout'

// 白名单路由
const whitelistRouters = [
  /**
   * 区块链工具
   */
  // dashboard
  {
    path: '/blockchain',
    component: Layout,
    hidden: false,
    // redirect: '/blockchain/dashboard',
    meta: { title: '区块链工具', icon: 'dashboard' },
    children: [
      // dashboard
      {
        path: 'dashboard',
        component: () => import('@/views/blockchain/dashboard/index.vue'),
        name: 'BlockChainDashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', activeMenu: '/blockchain/dashboard' },
      },
      // StarSharks
      {
        path: '/blockchain/star-sharks',
        component: () => import('@/views/blockchain/star-sharks/index.vue'),
        name: 'BlockStarSharks',
        meta: { title: 'StarSharks', icon: 'dashboard', activeMenu: '/blockchain/star-sharks' },
      },
    ],
  },

  // 生成工具
  {
    path: '/blockchain/generate',
    component: Layout,
    hidden: false,
    redirect: '/blockchain/generate/address',
    meta: { title: '生成工具', icon: 'dashboard' },
    children: [
      // 钱包地址生成
      // {
      //   path: 'address',
      //   component: () => import('@/views/blockchain/generate/gen-address.vue'),
      //   name: 'GenerateAddress',
      //   meta: { title: '钱包地址生成', icon: 'dashboard', activeMenu: '/blockchain/generate/address' },
      // },
      // 助记词生成
      {
        path: 'mnemonic',
        component: () => import('@/views/blockchain/generate/gen-mnemonic.vue'),
        name: 'GenerateMnemonic',
        meta: { title: '助记词生成', icon: 'dashboard', activeMenu: '/blockchain/generate/mnemonic' },
      },
    ],
  },
]

// 白名单路由地址
const whitelistRouterPaths = [
  '/blockchain/dashboard',
  // '/blockchain/generate/address',
  '/blockchain/generate/mnemonic',
  '/blockchain/star-sharks',
]

export { whitelistRouters, whitelistRouterPaths }
