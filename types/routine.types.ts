export interface Routine {
  id: number;
  client_id: number | null; 
  trainer_id?: number | null;
  title: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface RoutineDay {
  id: number;
  routine_id: number;
  day:
    | "lunes"
    | "martes"
    | "miercoles"
    | "jueves"
    | "viernes"
    | "sabado"
    | "domingo";
  order: number;
}

export interface RoutineExercise {
  id: number;
  routine_day_id: number;
  exercise_id: number;
  sets: number;
  reps: number;
  rest_seconds: number;
  weight?: number;
}