import { MenuItemModel } from "../menuItem.model";

export const Menu: MenuItemModel[] = [{
  id: 0,
  title: 'Dashboard',
  router: '/pages/dashboard',
  icon: 'dashboard'
}, {
  id: 1,
  title: 'Create Store',
  router: '/pages/create-store',
  icon: 'add_shopping_cart'
}, {
  id: 1,
  title: 'Products',
  router: '/pages/products',
  icon: 'shop'
}];
