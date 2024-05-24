export interface ICreatedProps {
  created: Date;
  id: number;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: Date | null;
  updated: Date;
  username: string;
}
