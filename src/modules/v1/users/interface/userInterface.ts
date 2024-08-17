export interface UserAttributes {
  id: number;
  name: string;
  cpf: string;
  address: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}
