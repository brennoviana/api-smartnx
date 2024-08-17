export interface UserAttributes {
  id: number;
  name: string;
  cpf: string;
  address: string;
  number: string;
  city: string;
  state: string;
  zip_code: string;
  created_at?: Date;
  updated_at?: Date;
}
