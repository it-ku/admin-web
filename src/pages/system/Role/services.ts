import {request} from "@umijs/max";
import {TableListData} from "./data"

/** 获取角色列表 GET /api/role */
export async function role(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<TableListData>('/api/system/role', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新角色 PUT /api/role */
export async function update(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/system/role', {
    method: 'POST',
    data:{
      method: 'update',
      ...(options || {}),
    }
  });
}

/** 新建角色 POST /api/role */
export async function add(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/system/role', {
    method: 'POST',
    data:{
      method: 'post',
      ...(options || {}),
    }
  });
}

/** 删除角色 DELETE /api/role */
export async function remove(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/system/role', {
    method: 'POST',
    data:{
      method: 'delete',
      ...(options || {}),
    }
  });
}
