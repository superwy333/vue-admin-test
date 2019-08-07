<template>
  <div class="app-container">
    <div class="filter-container">
      <el-date-picker
        v-model="listQuery.date"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        unlink-panels
        value-format="yyyy-MM-dd"
        class="filter-item"
        style="width: 400px;"
        @blur="handleFilter"
      />

      <el-input
        v-model="listQuery.taskNo"
        placeholder="任务编号"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
        @blur="handleFilter"
      />

      <el-select
        v-model="listQuery.taskType"
        placeholder="任务类型"
        clearable
        style="width: 200px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option v-for="item in taskTypeOptions" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>

      <el-select
        v-model="listQuery.taskState"
        placeholder="任务状态"
        clearable
        style="width: 200px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option v-for="item in taskStateOptions" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>

    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column v-if="false" prop="id" label="ID" width="180" />
      <el-table-column prop="taskNo" label="流水号" width="180">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleClickTaskNo">{{ row.taskNo }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="taskType" label="任务类型" width="180" />
      <el-table-column prop="taskRemarks" label="申请说明" width="180" />
      <el-table-column prop="taskState" label="任务状态" width="180">
        <template slot-scope="{row}">
          {{ taskStateName(row.taskState) }}
        </template>
      </el-table-column>
      <el-table-column prop="currentNode" label="当前节点" width="180" />
      <el-table-column prop="currentAssignee" label="当前指派人" width="180" />
      <el-table-column prop="steps" label="流程轨迹" width="180">
        <template slot-scope="{row}">
          <el-popover
            placement="top-start"
            width="450"
            trigger="click"
          >
            <div style="height: 200px; overflow: auto">
              <OaTaskSteps :oa-task-id="row.id" />
            </div>
            <el-button slot="reference" size="mini">查看</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="applyTime" label="填报时间" width="180" />
      <el-table-column prop="operation" label="操作" align="center" fixed="right" width="180">
        <template slot-scope="{row}">
          <el-dropdown trigger="click">
            <el-button type="primary" size="small">
              操作<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="details(row)">详情</el-dropdown-item>
              <el-dropdown-item @click.native="start(row)">发起</el-dropdown-item>
              <el-dropdown-item @click.native="callBack(row)">撤销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

  </div>
</template>

<script>
import { fetchOaTaskList } from '@/api/oaTask'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import waves from '@/directive/waves' // waves directive
import OaTaskSteps from '@/views/luminousTest/ftoa/oatask-steps'

export default {
  name: 'OaTaskList',
  components: { OaTaskSteps, Pagination },
  directives: { waves },
  data() {
    return {
      description: '操作人：aaa\n\n\n\n\n\n\n\n\n状态：发起',
      tableKey: 'myTaskList',
      listLoading: false,
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        taskNo: null,
        taskType: null,
        date: null
      },
      taskTypeOptions: [
        {
          id: 1,
          name: '报销申请'
        },
        {
          id: 2,
          name: '请假申请'
        }
      ],
      taskStateOptions: [
        {
          id: 1,
          name: '流转中'
        },
        {
          id: 2,
          name: '撤回'
        },
        {
          id: 3,
          name: '驳回'
        },
        {
          id: 4,
          name: '完成'
        }

      ]

    }
  },
  computed: {
    taskStateName(taskStateId) {
      return function(taskStateId) {
        const taskStateKeyValue = this.taskStateOptions.reduce((acc, cur) => {
          acc[cur.id] = cur.name
          return acc
        }, {})
        return taskStateKeyValue[taskStateId]
      }
    }

  },
  // filters: {
  //     taskStateFilter(taskState) {
  //         const taskStateKeyValue = this.taskStateOptions.reduce((acc, cur) => {
  //             acc[cur.key] = cur.display_name
  //             return acc
  //         }, {})
  //         return taskStateKeyValue[taskState]
  //     }
  // },
  created() {
    this.getList()
  },
  methods: {
    handleClickTaskNo() {
      alert('handleClickTaskNo')
    },
    details(row) {
      alert('details...' + row.taskNo)
    },
    start(row) {
      alert('start...' + row.taskNo)
    },
    callBack(row) {
      alert('callBack...' + row.taskNo)
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      this.listLoading = true
      fetchOaTaskList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }

}

</script>

<style></style>
