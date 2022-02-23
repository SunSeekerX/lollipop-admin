<template>
  <div class="app-container">
    <!-- 表单 -->
    <el-form :model="queryForm" ref="queryFormRef" :inline="true" label-width="88px">
      <el-form-item label="助记词位数" prop="bit">
        <el-select v-model="queryForm.bit" placeholder="助记词位数">
          <el-option v-for="bit in mnemonicBits" :key="bit.value" :label="bit.label" :value="bit.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="生成数量" prop="account">
        <el-input-number
          v-model="queryForm.account"
          :min="1"
          :max="1000"
          :step="10"
          style="width: 240px"
          @keyup.enter="handleSubmit"
        />

        <!-- <el-input
          v-model="queryForm.account"
          placeholder="请输入生成数量"
          style="width: 240px"
          @keyup.enter="handleSubmit" /> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleSubmit">确定</el-button>
        <el-button icon="Refresh" @click="handleResetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 数据表格 -->
    <el-table stripe v-loading="state.isTableLoading" :data="tableData.records">
      <el-table-column type="index" width="50" />
      <el-table-column label="助记词" align="left" prop="mnemonic">
        <template #default="scope">
          <div @click="handleCopyMnemonic(scope.row.mnemonic)" class="flex items-center cursor-pointer">
            <span class="mr-1">
              {{ scope.row.mnemonic }}
            </span>
            <el-icon><copy-document /></el-icon>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'GenerateMnemonic',
}
</script>

<script setup>
/**
 * 2022-02-14 19:41:07
 * 表格动态渲染绑定了事件造成效率低下，需要优化 handleCopyMnemonic 复制逻辑
 */
import { getCurrentInstance, ref } from '@vue/composition-api'
import { generateMnemonic } from '@/utils/blockchain/core'

const { proxy } = getCurrentInstance()

// 助记词位数
const mnemonicBits = [
  {
    label: '12 位',
    value: 12,
  },
  {
    label: '24 位',
    value: 24,
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
  // 助记词位数
  bit: 12,
  // 生成数量
  account: 10,
})
// 表格数据
const tableData = ref({
  total: 0,
  records: [],
})

// 提交表单
function handleSubmit() {
  const { account, bit } = queryForm.value
  const records = []
  for (let i = 0; i < account; i++) {
    records.push({
      mnemonic: generateMnemonic(bit),
    })
  }
  tableData.value = {
    total: account,
    records,
  }
}
// 重置表单
function handleResetQuery() {
  queryFormRef.value.resetFields()
  handleSubmit()
}
// 复制助记词
async function handleCopyMnemonic(mnemonic) {
  try {
    await proxy.$copyText(mnemonic)
    proxy.$modal.msgSuccess('复制成功')
  } catch (error) {
    console.log(error)
    proxy.$modal.msgError('复制失败')
  }
}
</script>

<style></style>
