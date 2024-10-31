export interface User {
  id?: string; // ID é opcional ao criar um novo usuário
  name: string;
  email: string;
  password: string; // evite expor a senha em produções
}
