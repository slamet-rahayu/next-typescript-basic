export interface IProductCategData {
  id: number;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface IProductCategRes {
  data: IProductCategData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
