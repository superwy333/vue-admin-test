<template>
  <div style="height: 200px; overflow: auto">
    <el-steps direction="vertical">
      <el-step v-for="item in approveSteps" :id="item.id" :key="item.id" :title="item.approveTime" status="finish">
        <template slot="description">
          <div>
            <label class="approve-step-label">流程名：</label>
            <span>{{ item.node }}</span>
          </div>
          <div>
            <label class="approve-step-label">操作人：</label>
            <span>{{ item.operator }}</span>
          </div>
          <div>
            <label class="approve-step-label">状态：</label>
            <span>{{ item.status }}</span>
          </div>
          <div>
            <label class="approve-step-label">核签备注：</label>
            <span>{{ item.remarks }}</span>
          </div>
        </template>
      </el-step>
    </el-steps>
  </div>

</template>

<script>
export default {
  name: 'OaTaskSteps',
  props: {
    oaTaskId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      approveSteps: [
        {
          id: 1,
          approveTime: '2019-08-07 16:44:23',
          node: '部门主管',
          operator: '王杨',
          status: '发起',
          remarks: null
        },
        {
          id: 2,
          approveTime: '2019-08-07 16:44:23',
          node: '部门主管',
          operator: '王杨',
          status: '同意',
          remarks: '已核实'
        },
        {
          id: 3,
          approveTime: '2019-08-07 16:44:23',
          node: '部门主管',
          operator: '王杨',
          status: '同意',
          remarks: '已核实'
        },
        {
          id: 4,
          approveTime: '2019-08-07 16:44:24',
          node: '部门主管2',
          operator: '王杨2',
          status: '同意',
          remarks: '就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样就是想看下这个太长会怎么样'
        },
        {
          id: 5,
          approveTime: '2019-08-07 16:44:23',
          node: '部门主管',
          operator: '王杨',
          status: '同意',
          remarks: '已核实'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .approve-step-label {
    width: 64px;
    display: inline-block;
  }

</style>
