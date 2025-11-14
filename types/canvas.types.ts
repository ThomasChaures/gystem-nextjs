export interface GymArea {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  children: GymObject[];
}

export interface GymObject {
  id: number;
  type: "zone" | "machine" | "bench" | "custom";
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  icon?: string;
  color?: string;
}