export type Item = {
  id?: number;
  name: string;
  desc: string;
  status: string;
  updatedAt: Date;
}

export type TableListData = {
  data?: Item[];
  total?: number;
  success?: boolean;
}

export type TableListParams = {
  name?: string;
  status?: string;
  pageSize?: number;
  current?: number;
}
