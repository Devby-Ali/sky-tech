export default interface Menu {
  _id: string;
  title: string;
  href: string;
  submenus?: Menu[];
  parent?: Menu;
}
