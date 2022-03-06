<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6"> 市场售卖鲨鱼的数量： </el-col>
        <el-col :span="6"> {{ marketSharks.total_count || 0 }} </el-col>
        <el-col :span="6"> 排序方式： </el-col>
        <el-col :span="6"> {{ marketSharks.sort_by || '未知' }} </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getMarketSharks } from './apis'

export default {
  name: 'StarSharks',
  data() {
    return {
      marketSharks: {},
    }
  },
  mounted() {
    this.onInit()
  },

  methods: {
    async onInit() {
      const res = await getMarketSharks()
      if (res.success === false) {
        return this.$modal.msgWarning(res.message)
      }

      this.marketSharks = res.data
      this.$modal.msgSuccess('获取星鲨市场数据成功')
    },
  },
}
</script>

<style lang="scss" scoped></style>
