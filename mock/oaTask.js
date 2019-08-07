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
      id: 2,
      taskNo: 'FT0002',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 1,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 3,
      taskNo: 'FT0003',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 3,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 4,
      taskNo: 'FT0004',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 2,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 5,
      taskNo: 'FT0005',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 2,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 6,
      taskNo: 'FT0006',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 1,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 7,
      taskNo: 'FT0007',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 3,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 8,
      taskNo: 'FT0008',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 3,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 9,
      taskNo: 'FT0009',
      taskType: 'bx',
      taskRemarks: 'mock测试',
      taskState: 1,
      currentNode: '上级部门',
      currentAssignee: '王杨123',
      steps: '',
      applyTime: '2019-08-06 15:50:23'
    },
    {
      id: 10,
      taskNo: 'FT0010',
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
