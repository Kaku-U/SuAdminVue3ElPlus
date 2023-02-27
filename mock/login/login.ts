import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

// Fake Login Info 登录
const fakeLoginInfo = {
  "userInfo": {
    "id": 1,
    "username": "admin",
    "nickname": "Admin",
    "avatar": "https:\/\/demo.buildadmin.com\/static\/images\/avatar.png",
    "lastlogintime": "2023-02-01 10:30:04",
    "token": "9fc4684d-979b-47ff-9ce4-b90997fa9333",
    "refreshToken": ""
  },
  "routePath": "\/admin"
}

// Fake Login Get 获取是否展示captcha
const fakeLoginGet = {
  "captcha": false
}

// Fake Admin Info 获取用户信息
const fakeAdminInfo = {
  "adminInfo": {
    "id": 1,
    "username": "admin",
    "nickname": "Admin",
    "avatar": "https:\/\/demo.buildadmin.com\/static\/images\/avatar.png",
    "lastlogintime": "2023-02-03 14:25:09",
    "super": true
  },
  "menus": [{
    "id": 1,
    "pid": 0,
    "type": "menu",
    "title": "控制台",
    "name": "dashboard\/dashboard",
    "path": "dashboard",
    "icon": "fa fa-dashboard",
    "menu_type": "tab",
    "url": "",
    "component": "\/src\/views\/backend\/dashboard.vue",
    "keepalive": "dashboard\/dashboard",
    "extend": "none"
  }, {
    "id": 2,
    "pid": 0,
    "type": "menu_dir",
    "title": "权限管理",
    "name": "auth",
    "path": "auth",
    "icon": "fa fa-group",
    "menu_type": null,
    "url": "",
    "component": "",
    "keepalive": 0,
    "extend": "none",
    "children": [{
      "id": 3,
      "pid": 2,
      "type": "menu",
      "title": "角色组管理",
      "name": "auth\/group",
      "path": "auth\/group",
      "icon": "fa fa-group",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/auth\/group\/index.vue",
      "keepalive": "auth\/group",
      "extend": "none",
      "children": [{
        "id": 4,
        "pid": 3,
        "type": "button",
        "title": "查看",
        "name": "auth\/group\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 5,
        "pid": 3,
        "type": "button",
        "title": "添加",
        "name": "auth\/group\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 6,
        "pid": 3,
        "type": "button",
        "title": "编辑",
        "name": "auth\/group\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 7,
        "pid": 3,
        "type": "button",
        "title": "删除",
        "name": "auth\/group\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 8,
      "pid": 2,
      "type": "menu",
      "title": "管理员管理",
      "name": "auth\/admin",
      "path": "auth\/admin",
      "icon": "el-icon-UserFilled",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/auth\/admin\/index.vue",
      "keepalive": "auth\/admin",
      "extend": "none",
      "children": [{
        "id": 9,
        "pid": 8,
        "type": "button",
        "title": "查看",
        "name": "auth\/admin\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 10,
        "pid": 8,
        "type": "button",
        "title": "添加",
        "name": "auth\/admin\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 11,
        "pid": 8,
        "type": "button",
        "title": "编辑",
        "name": "auth\/admin\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 12,
        "pid": 8,
        "type": "button",
        "title": "删除",
        "name": "auth\/admin\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 13,
      "pid": 2,
      "type": "menu",
      "title": "菜单规则管理",
      "name": "auth\/menu",
      "path": "auth\/menu",
      "icon": "el-icon-Grid",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/auth\/menu\/index.vue",
      "keepalive": "auth\/menu",
      "extend": "none",
      "children": [{
        "id": 14,
        "pid": 13,
        "type": "button",
        "title": "查看",
        "name": "auth\/menu\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 15,
        "pid": 13,
        "type": "button",
        "title": "添加",
        "name": "auth\/menu\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 16,
        "pid": 13,
        "type": "button",
        "title": "编辑",
        "name": "auth\/menu\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 17,
        "pid": 13,
        "type": "button",
        "title": "删除",
        "name": "auth\/menu\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 18,
        "pid": 13,
        "type": "button",
        "title": "快速排序",
        "name": "auth\/menu\/sortable",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 19,
      "pid": 2,
      "type": "menu",
      "title": "管理员日志管理",
      "name": "auth\/adminLog",
      "path": "auth\/adminLog",
      "icon": "el-icon-List",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/auth\/adminLog\/index.vue",
      "keepalive": "auth\/adminLog",
      "extend": "none",
      "children": [{
        "id": 20,
        "pid": 19,
        "type": "button",
        "title": "查看",
        "name": "auth\/adminLog\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }]
  }, {
    "id": 21,
    "pid": 0,
    "type": "menu_dir",
    "title": "会员管理",
    "name": "user",
    "path": "user",
    "icon": "fa fa-drivers-license",
    "menu_type": null,
    "url": "",
    "component": "",
    "keepalive": 0,
    "extend": "none",
    "children": [{
      "id": 22,
      "pid": 21,
      "type": "menu",
      "title": "会员管理",
      "name": "user\/user",
      "path": "user\/user",
      "icon": "fa fa-user",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/user\/user\/index.vue",
      "keepalive": "user\/user",
      "extend": "none",
      "children": [{
        "id": 23,
        "pid": 22,
        "type": "button",
        "title": "查看",
        "name": "user\/user\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 24,
        "pid": 22,
        "type": "button",
        "title": "添加",
        "name": "user\/user\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 25,
        "pid": 22,
        "type": "button",
        "title": "编辑",
        "name": "user\/user\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 26,
        "pid": 22,
        "type": "button",
        "title": "删除",
        "name": "user\/user\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 27,
      "pid": 21,
      "type": "menu",
      "title": "会员分组管理",
      "name": "user\/group",
      "path": "user\/group",
      "icon": "fa fa-group",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/user\/group\/index.vue",
      "keepalive": "user\/group",
      "extend": "none",
      "children": [{
        "id": 28,
        "pid": 27,
        "type": "button",
        "title": "查看",
        "name": "user\/group\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 29,
        "pid": 27,
        "type": "button",
        "title": "添加",
        "name": "user\/group\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 30,
        "pid": 27,
        "type": "button",
        "title": "编辑",
        "name": "user\/group\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 31,
        "pid": 27,
        "type": "button",
        "title": "删除",
        "name": "user\/group\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 32,
      "pid": 21,
      "type": "menu",
      "title": "会员规则管理",
      "name": "user\/rule",
      "path": "user\/rule",
      "icon": "fa fa-th-list",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/user\/rule\/index.vue",
      "keepalive": "user\/rule",
      "extend": "none",
      "children": [{
        "id": 33,
        "pid": 32,
        "type": "button",
        "title": "查看",
        "name": "user\/rule\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 34,
        "pid": 32,
        "type": "button",
        "title": "添加",
        "name": "user\/rule\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 35,
        "pid": 32,
        "type": "button",
        "title": "编辑",
        "name": "user\/rule\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 36,
        "pid": 32,
        "type": "button",
        "title": "删除",
        "name": "user\/rule\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 37,
        "pid": 32,
        "type": "button",
        "title": "快速排序",
        "name": "user\/rule\/sortable",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 38,
      "pid": 21,
      "type": "menu",
      "title": "会员余额管理",
      "name": "user\/moneyLog",
      "path": "user\/moneyLog",
      "icon": "el-icon-Money",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/user\/moneyLog\/index.vue",
      "keepalive": 0,
      "extend": "none",
      "children": [{
        "id": 39,
        "pid": 38,
        "type": "button",
        "title": "查看",
        "name": "user\/moneyLog\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 40,
        "pid": 38,
        "type": "button",
        "title": "添加",
        "name": "user\/moneyLog\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 41,
      "pid": 21,
      "type": "menu",
      "title": "会员积分管理",
      "name": "user\/scoreLog",
      "path": "user\/scoreLog",
      "icon": "el-icon-Discount",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/user\/scoreLog\/index.vue",
      "keepalive": "user\/scoreLog",
      "extend": "none",
      "children": [{
        "id": 42,
        "pid": 41,
        "type": "button",
        "title": "查看",
        "name": "user\/scoreLog\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 43,
        "pid": 41,
        "type": "button",
        "title": "添加",
        "name": "user\/scoreLog\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }]
  }, {
    "id": 44,
    "pid": 0,
    "type": "menu_dir",
    "title": "常规管理",
    "name": "routine",
    "path": "routine",
    "icon": "fa fa-cogs",
    "menu_type": null,
    "url": "",
    "component": "",
    "keepalive": 0,
    "extend": "none",
    "children": [{
      "id": 45,
      "pid": 44,
      "type": "menu",
      "title": "系统配置",
      "name": "routine\/config",
      "path": "routine\/config",
      "icon": "el-icon-Tools",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/routine\/config\/index.vue",
      "keepalive": "routine\/config",
      "extend": "none",
      "children": [{
        "id": 46,
        "pid": 45,
        "type": "button",
        "title": "查看",
        "name": "routine\/config\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 47,
        "pid": 45,
        "type": "button",
        "title": "编辑",
        "name": "routine\/config\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 77,
        "pid": 45,
        "type": "button",
        "title": "添加",
        "name": "routine\/config\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 48,
      "pid": 44,
      "type": "menu",
      "title": "附件管理",
      "name": "routine\/attachment",
      "path": "routine\/attachment",
      "icon": "fa fa-folder",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/routine\/attachment\/index.vue",
      "keepalive": "routine\/attachment",
      "extend": "none",
      "children": [{
        "id": 49,
        "pid": 48,
        "type": "button",
        "title": "查看",
        "name": "routine\/attachment\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 50,
        "pid": 48,
        "type": "button",
        "title": "编辑",
        "name": "routine\/attachment\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 51,
        "pid": 48,
        "type": "button",
        "title": "删除",
        "name": "routine\/attachment\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 52,
      "pid": 44,
      "type": "menu",
      "title": "个人资料",
      "name": "routine\/adminInfo",
      "path": "routine\/adminInfo",
      "icon": "fa fa-user",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/routine\/adminInfo.vue",
      "keepalive": "routine\/adminInfo",
      "extend": "none",
      "children": [{
        "id": 53,
        "pid": 52,
        "type": "button",
        "title": "查看",
        "name": "routine\/adminInfo\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 54,
        "pid": 52,
        "type": "button",
        "title": "编辑",
        "name": "routine\/adminInfo\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }]
  }, {
    "id": 78,
    "pid": 0,
    "type": "menu",
    "title": "模块市场",
    "name": "moduleStore\/moduleStore",
    "path": "moduleStore",
    "icon": "el-icon-GoodsFilled",
    "menu_type": "tab",
    "url": "",
    "component": "\/src\/views\/backend\/module\/index.vue",
    "keepalive": "moduleStore\/moduleStore",
    "extend": "none",
    "children": [{
      "id": 83,
      "pid": 78,
      "type": "button",
      "title": "更新",
      "name": "moduleStore\/moduleStore\/update",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 82,
      "pid": 78,
      "type": "button",
      "title": "卸载",
      "name": "moduleStore\/moduleStore\/uninstall",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 81,
      "pid": 78,
      "type": "button",
      "title": "调整状态",
      "name": "moduleStore\/moduleStore\/changeState",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 80,
      "pid": 78,
      "type": "button",
      "title": "安装",
      "name": "moduleStore\/moduleStore\/install",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 79,
      "pid": 78,
      "type": "button",
      "title": "查看",
      "name": "moduleStore\/moduleStore\/index",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }]
  }, {
    "id": 55,
    "pid": 0,
    "type": "menu_dir",
    "title": "数据安全管理",
    "name": "security",
    "path": "security",
    "icon": "fa fa-shield",
    "menu_type": null,
    "url": "",
    "component": "",
    "keepalive": 0,
    "extend": "none",
    "children": [{
      "id": 56,
      "pid": 55,
      "type": "menu",
      "title": "数据回收站",
      "name": "security\/dataRecycleLog",
      "path": "security\/dataRecycleLog",
      "icon": "fa fa-database",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/security\/dataRecycleLog\/index.vue",
      "keepalive": "security\/dataRecycleLog",
      "extend": "none",
      "children": [{
        "id": 57,
        "pid": 56,
        "type": "button",
        "title": "查看",
        "name": "security\/dataRecycleLog\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 58,
        "pid": 56,
        "type": "button",
        "title": "删除",
        "name": "security\/dataRecycleLog\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 59,
        "pid": 56,
        "type": "button",
        "title": "还原",
        "name": "security\/dataRecycleLog\/restore",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 60,
        "pid": 56,
        "type": "button",
        "title": "查看详情",
        "name": "security\/dataRecycleLog\/info",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 61,
      "pid": 55,
      "type": "menu",
      "title": "敏感数据修改记录",
      "name": "security\/sensitiveDataLog",
      "path": "security\/sensitiveDataLog",
      "icon": "fa fa-expeditedssl",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/security\/sensitiveDataLog\/index.vue",
      "keepalive": "security\/sensitiveDataLog",
      "extend": "none",
      "children": [{
        "id": 62,
        "pid": 61,
        "type": "button",
        "title": "查看",
        "name": "security\/sensitiveDataLog\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 63,
        "pid": 61,
        "type": "button",
        "title": "删除",
        "name": "security\/sensitiveDataLog\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 64,
        "pid": 61,
        "type": "button",
        "title": "回滚",
        "name": "security\/sensitiveDataLog\/rollback",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 65,
        "pid": 61,
        "type": "button",
        "title": "查看详情",
        "name": "security\/sensitiveDataLog\/info",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 66,
      "pid": 55,
      "type": "menu",
      "title": "数据回收规则管理",
      "name": "security\/dataRecycle",
      "path": "security\/dataRecycle",
      "icon": "fa fa-database",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/security\/dataRecycle\/index.vue",
      "keepalive": "security\/dataRecycle",
      "extend": "none",
      "children": [{
        "id": 67,
        "pid": 66,
        "type": "button",
        "title": "查看",
        "name": "security\/dataRecycle\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 68,
        "pid": 66,
        "type": "button",
        "title": "添加",
        "name": "security\/dataRecycle\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 69,
        "pid": 66,
        "type": "button",
        "title": "编辑",
        "name": "security\/dataRecycle\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 70,
        "pid": 66,
        "type": "button",
        "title": "删除",
        "name": "security\/dataRecycle\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }, {
      "id": 71,
      "pid": 55,
      "type": "menu",
      "title": "敏感字段规则管理",
      "name": "security\/sensitiveData",
      "path": "security\/sensitiveData",
      "icon": "fa fa-expeditedssl",
      "menu_type": "tab",
      "url": "",
      "component": "\/src\/views\/backend\/security\/sensitiveData\/index.vue",
      "keepalive": "security\/sensitiveData",
      "extend": "none",
      "children": [{
        "id": 72,
        "pid": 71,
        "type": "button",
        "title": "查看",
        "name": "security\/sensitiveData\/index",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 73,
        "pid": 71,
        "type": "button",
        "title": "添加",
        "name": "security\/sensitiveData\/add",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 74,
        "pid": 71,
        "type": "button",
        "title": "编辑",
        "name": "security\/sensitiveData\/edit",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }, {
        "id": 75,
        "pid": 71,
        "type": "button",
        "title": "删除",
        "name": "security\/sensitiveData\/del",
        "path": "",
        "icon": "",
        "menu_type": null,
        "url": "",
        "component": "",
        "keepalive": 0,
        "extend": "none"
      }]
    }]
  }, {
    "id": 90,
    "pid": 0,
    "type": "menu",
    "title": "CRUD代码生成",
    "name": "crud\/crud",
    "path": "crud\/crud",
    "icon": "fa fa-code",
    "menu_type": "tab",
    "url": "",
    "component": "\/src\/views\/backend\/crud\/index.vue",
    "keepalive": "crud\/crud",
    "extend": "none"
  }, {
    "id": 84,
    "pid": 0,
    "type": "menu",
    "title": "知识库（可修改）",
    "name": "testBuild",
    "path": "testBuild",
    "icon": "el-icon-Notebook",
    "menu_type": "tab",
    "url": "",
    "component": "\/src\/views\/backend\/testBuild\/index.vue",
    "keepalive": 0,
    "extend": "none",
    "children": [{
      "id": 91,
      "pid": 84,
      "type": "button",
      "title": "查看",
      "name": "crud\/crud\/index",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 92,
      "pid": 84,
      "type": "button",
      "title": "生成",
      "name": "crud\/crud\/generate",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 93,
      "pid": 84,
      "type": "button",
      "title": "删除",
      "name": "crud\/crud\/delete",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 85,
      "pid": 84,
      "type": "button",
      "title": "查看",
      "name": "testBuild\/index",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 86,
      "pid": 84,
      "type": "button",
      "title": "添加",
      "name": "testBuild\/add",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 87,
      "pid": 84,
      "type": "button",
      "title": "编辑",
      "name": "testBuild\/edit",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 88,
      "pid": 84,
      "type": "button",
      "title": "删除",
      "name": "testBuild\/del",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }, {
      "id": 89,
      "pid": 84,
      "type": "button",
      "title": "快速排序",
      "name": "testBuild\/sortable",
      "path": "",
      "icon": "",
      "menu_type": null,
      "url": "",
      "component": "",
      "keepalive": 0,
      "extend": "none"
    }]
  }],
  "siteConfig": {
    "siteName": "BuildAdmin",
    "version": "v1.0.0",
    "cdnUrl": "https:\/\/demo.buildadmin.com",
    "apiUrl": "https:\/\/buildadmin.com",
    "upload": {
      "maxsize": 10485760,
      "savename": "\/storage\/{topic}\/{year}{mon}{day}\/{filesha1}{.suffix}",
      "mimetype": "jpg,png,bmp,jpeg,gif,webp,zip,rar,xls,xlsx,doc,docx,wav,mp4,mp3,txt",
      "mode": "local"
    }
  },
  "terminal": {
    "installServicePort": "8000",
    "npmPackageManager": "pnpm"
  }
}

// Fake Logout Info 登出
const fakeLogoutInfo = {
}
export default [
  // Mock Login post
  {
    url: '/admin/index/login',
    timeout: 200,
    method: 'post',
    response: (body: any) => {
      const { username, password } = body
      //对的用户 登录成功
      if(username === 'admin' && password === '123456') {
        return resultError('用户名或密码错误！')
      } else {
        const data = fakeLoginInfo
        return resultSuccess(
          data,
          {
            msg: '登录成功！',
            time: '1675218605'
          }
        )
      }
    }
  },
  // Mock Login get
  {
    url: '/admin/index/login',
    timeout: 200,
    method: 'get',
    response: (body: any) => {
      const data = fakeLoginGet
      return resultSuccess(
        data,
        {
          msg: "",
          time: '1675924120',
        }
      )
    }
  },
  // Mock Admin Info
  {
    url: '/admin/index/index',
    timeout: 200,
    method: 'get',
    response: (body: any) => {
      const data = fakeAdminInfo
      return resultSuccess(
        data
      )
    }
  },
  // Mock Logout
  {
    url: '/admin/index/logout',
    timeout: 200,
    method: 'post',
    response: (body: any) => {
      const data = fakeLogoutInfo
      return resultSuccess(data)
    }
  }

] as MockMethod[]