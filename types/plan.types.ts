export interface Plan {
  id: number;
  gym_id: number;
  name: string;
  price: number;
  duration_days: number;
  created_at: string;
  updated_at: string;
}

export interface ClientPlan {
  id: number;
  client_id: number;
  plan_id: number;
  start_date: string;
  end_date: string;
  active: boolean;
}