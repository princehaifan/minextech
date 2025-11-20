export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Value {
  title: string;
  description?: string;
}

export interface NavLink {
  name: string;
  path: string;
}