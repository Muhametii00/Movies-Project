export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: number;
  username: string;
  password: string;
  birthDate: string;
  image: string[];
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: string[];
  domain: string;
  ip: number;
  address: string[];
  macAddress: number;
  university: string;
  bank: string[];
  company: string[];
  ein: number;
  ssn: number;
  userAgent: string;
}

export interface UsersResponse {
  users: User[];
}
