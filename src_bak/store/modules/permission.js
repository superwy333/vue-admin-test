import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
    //console.log('routes in state>>>' + JSON.stringify(state.routes))
  }
}

const map = {
  //login: require('login/index').default // 同步的方式
  layout: () => import('@/layout')      // 异步的方式
}

function mapComponent(component) {
  return () => import('@' + component)
}

const actions = {
  generateRoutes({ commit, rootState }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('test')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        /**
         * 动态组装路由
         */

        let userMenuList = rootState.user.userMenuList // 从vuex中获取用户的menuList
        console.log('userMenuList', userMenuList)
        let accessedRoutesNew = []
        userMenuList.forEach(userMenu => {
          let accessedRoutesItem = {}
          accessedRoutesItem.path = userMenu.path
          accessedRoutesItem.alwaysShow = true
          accessedRoutesItem.component = mapComponent(userMenu.component)
          accessedRoutesItem.redirect = userMenu.redirect
          let children = userMenu.children
          accessedRoutesNew.push(accessedRoutesItem)
        })
        console.log('accessedRoutesNew', JSON.stringify(accessedRoutesNew))
        //
        // accessedRoutes = [
        //   {
        //     path: '/tab',
        //     hidden: true,
        //     component: () => import('@/layout'),
        //     children: [
        //       {
        //         path: 'index',
        //         component: () => import('@/views/tab/index'),
        //         name: 'Tab',
        //         meta: { title: 'Tab', icon: 'tab' }
        //       }
        //     ]
        //   },
        //
        //   {
        //     path: '/error',
        //     component: () => import('@/layout'),
        //     alwaysShow: true,
        //     // redirect: 'noRedirect',
        //     name: 'ErrorPages',
        //     meta: {
        //       title: 'Error Pages',
        //       icon: '404',
        //       roles: ['admin']
        //     },
        //     children: [
        //       {
        //         path: '401',
        //         hidden: false,
        //         component: () => import('@/views/error-page/401'),
        //         name: 'Page401',
        //         meta: { title: '401', noCache: true }
        //       },
        //       {
        //         path: '404',
        //         hidden: false,
        //         component: () => import('@/views/error-page/404'),
        //         name: 'Page404',
        //         meta: { title: '404', noCache: true, roles: ['admin111'] }
        //       }
        //     ]
        //   }, {
        //     path: '/excel',
        //     component: () => import('@/layout'),
        //     redirect: '/excel/export-excel',
        //     name: 'Excel',
        //     meta: {
        //       title: 'Excel',
        //       icon: 'excel'
        //     },
        //     children: [
        //       {
        //         path: 'export-excel',
        //         component: () => import('@/views/excel/export-excel'),
        //         name: 'ExportExcel',
        //         meta: { title: 'Export Excel' }
        //       },
        //       {
        //         path: 'export-selected-excel',
        //         component: () => import('@/views/excel/select-excel'),
        //         name: 'SelectExcel',
        //         meta: { title: 'Export Selected' }
        //       },
        //       {
        //         path: 'export-merge-header',
        //         component: () => import('@/views/excel/merge-header'),
        //         name: 'MergeHeader',
        //         meta: { title: 'Merge Header' }
        //       },
        //       {
        //         path: 'upload-excel',
        //         component: () => import('@/views/excel/upload-excel'),
        //         name: 'UploadExcel',
        //         meta: { title: 'Upload Excel' }
        //       }
        //     ]
        //   }
        // ]
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
