export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path:'/system',
    name: '系统管理',
    icon: 'setting',
    routes: [
      { path: '/system/app', name: '应用列表', component: './Welcome' },
      {
        path:'/system/',
        name: '权限管理',
        routes: [
          {path: '/system/roles', name: '角色管理', component: './System/Role/'},
          {path: '/system/permissions', name: '权限管理', component: './Welcome'},
        ]
      }
    ]
  },
  {
    path:'/operations',
    name: '运营管理',
    icon: 'trophy',
    routes: [
      { path: '/operations/users', name: '用户列表', component: './Welcome' },
    ]
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
