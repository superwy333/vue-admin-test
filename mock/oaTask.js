const oaTaskList = {
  list: [
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 1,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 1,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 3,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 2,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 2,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 1,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 3,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 3,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 1,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 1,
      taskNo: 'FT0001',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 2,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    }
  ],
  total: 888

}

export default [
  // oaTaskList
  {
    url: '/oaTask/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: oaTaskList
      }
    }
  }

]
