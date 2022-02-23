<template>
  <div class="app-container">
    <!-- 表单 -->
    <el-form :model="queryForm" ref="queryFormRef" :inline="true" label-width="68px">
      <el-form-item label="地址格式" prop="chain">
        <el-select v-model="queryForm.chain" placeholder="地址格式" clearable>
          <el-option v-for="chain in supportChain" :key="chain.name" :label="chain.name" :value="chain.name" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleSubmit">确定</el-button>
        <el-button icon="Refresh" @click="handleResetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 数据表格 -->
    <el-table v-loading="state.isTableLoading" :data="tableData.records">
      <el-table-column label="私钥" align="center" prop="privateKey" />
      <el-table-column label="地址" align="center" prop="address" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'GenerateAddress',
}
</script>

<script setup>
import { ref } from '@vue/composition-api'
import { getAddressByMnemonic } from '@/utils/blockchain/eth'

// generateRandomAddress()
// 支持的钱包地址格式
const supportChain = [
  {
    name: 'BTC',
  },
  {
    name: 'ETH',
  },
]
// 状态
const state = ref({
  // 是否正在获取表格数据
  isTableLoading: false,
})
// 查询表单 Dom
const queryFormRef = ref(null)
// 查询表单数据
const queryForm = ref({
  chain: 'BTC',
})
// 表格数据
const tableData = ref({
  total: 0,
  records: [],
})

// 提交表单
function handleSubmit() {}
// 重置表单
function handleResetQuery() {
  queryFormRef.value.resetFields()
}
</script>

<style></style>
