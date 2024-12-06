import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    /* 
      As this is built out, we can think about how we want to expand out this menu.
      We could break out certain tables and feautres into certain pages.
     */
    {
      group: 'Sample Category Tag',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
        },
      ],
    },
    {
      group: 'Sample Category Tag',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Name',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Name',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Name',
          route: '/users',
        },
      ],
    },
  ];
}
