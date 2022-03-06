import { request } from '@/utils/request/index'

// 获取市场的鲨鱼
export function getMarketSharks() {
  return request({
    url: 'https://starsharks.com/go/api/market/sharks',
    method: 'POST',
    data: {
      class: [],
      stage: [],
      star: 0,
      pureness: 0,
      hp: [0, 200],
      speed: [0, 200],
      skill: [0, 200],
      morale: [0, 200],
      body: [],
      parts: [],
      skill_id: [0, 0, 0, 0],
      full_energy: false,
      page: 1,
      filter: 'sell',
      sort: 'PriceAsc',
      page_size: 36,
    },
  })
}
