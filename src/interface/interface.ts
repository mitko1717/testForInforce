export interface ISizeOfProduct {
  width?: number;
  height?: number;
}

export interface ICommentToProduct {
  comment?: string[];
}

export interface IProduct {
  id: number;
  imageUrl?: string;
  name: string;
  count: number;
  size?: ISizeOfProduct;
  weight: string;
  comments?: ICommentToProduct;
}
