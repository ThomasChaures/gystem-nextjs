export interface Cliente{
    id: number;
    nombre: string;
    apellido: string; 
    dni: number;
    email?: string;
    adeudado: boolean;
    rutina: boolean;
    plan?: number;
    fecha_de_pago?: string;
}