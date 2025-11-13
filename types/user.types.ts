export interface Cliente {
  id: number;
  gym: string;
  name: string;
  email?: string;
  phone?: string;
  dni: string;
  status: "active" | "inactive" | "overdue";
  picture?: string;
  has_routine?: boolean;
  start_date: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  gym_id: number;
  name: string;
  email: string;
  role: "admin" | "manager" | "employee";
  avatar?: string;
  created_at: string;
  updated_at: string;
}
