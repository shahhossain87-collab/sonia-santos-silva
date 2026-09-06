export type MenuLink = {
  id: number;
  title: string;
  path: string;
  description?: string;
  newTab?: boolean;
};

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  mega?: boolean;
  intro?: {
    title: string;
    description: string;
    path: string;
  };
  submenu?: MenuLink[];
};
