export interface Payment {
  id: number;
  gym_id: number;
  client_id?: number; 
  user_id: number;
  type: "income" | "expense";
  category: string;
  amount: number;
  method: "efectivo" | "transferencia" | "mercadopago";
  description?: string;
  date: string;
  created_at: string;
  updated_at: string;
}
