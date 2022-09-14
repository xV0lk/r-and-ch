export type User = {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  email: string;
  name: string;
  role: string;
  password: string;
  requests?: [];
  tableNum?: number;
};
