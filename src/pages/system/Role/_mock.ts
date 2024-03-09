import type {Request, Response} from 'express';
import {Item} from "./data";
import {parse} from "url";
import {Pagination} from "@/models/connect";

const genList = (current: number, pageSize: number) => {
  const tableListDataSource: Item[] = [];
  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      id: index,
      name: `角色 ${index}`,
      desc: '这是一段描述',
      status: (Math.floor(Math.random() * 10) % 3).toString(),
      updatedAt: new Date(),
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 10);

function getRole(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const {current = 1, pageSize = 10} = req.query;
  const params = parse(realUrl, true).query as unknown as Pagination;

  let dataSource = [...tableListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );

  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize: 10,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

function postRole(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const body = (b && b.body) || req.body;
  const {name, desc, key} = body;
  console.log(name, desc, key)
  const result = {
    list: [],
    pagination: {
      total: 10,
    },
  };

  res.json(result);
}

export default {
  'GET /api/system/role': getRole,
  'POST /api/system/role': postRole,
  'DELETE /api/system/role': postRole,
  'PUT /api/system/role': postRole,
};
