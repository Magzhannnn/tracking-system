export interface INavItem {
  image: string;
  text: string;
}

export interface INavBlock {
  title: string;
  navItems: INavItem[];
}
