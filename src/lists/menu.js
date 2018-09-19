const Menu =  [
  { header: 'Apps' },
  {
    title: 'Home',
    group: 'apps',
    icon: 'home',
    name: 'Dashboard',
  },
  {
    title: 'Historico',
    group: 'apps',
    icon: 'schedule',
    name: 'Chat',
  },
  {
    title: 'Metricas',
    group: 'apps',
    name: 'Mail',
    icon: 'assessment',
  },
  {
    title: 'Fidelização',
    group: 'apps',
    name: 'Media',
    icon: 'supervisor_account',
  },
  {
    title: 'Configurações',
    group: 'apps',
    component: '',
    icon: 'settings'
  }
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
