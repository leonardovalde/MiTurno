import React, { useState, useEffect } from 'react';

import SideBar from 'side_bar/SideBar';
import MenuAdmin from 'menu_admin/MenuAdmin';

const MenuAdminPage = () => {
  const [user, setUser] = useState({
    name: 'Nadie',
    role: 'Ninguno',
    onClickLogout: () => {
      console.log('Logout');
      localStorage.removeItem('user');
    },
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

const props = {
  options: [
    {
      title: 'Home',
      icon: 'material-symbols:home-outline-rounded',
      onClick: () => {
        console.log('Home')
      },
    }
  ],
  user: {
    name: 'Administrador',
    role: 'Admin',
    onClickLogout: () => {
      console.log('Logout')
    },
  },
}

function MenuAdminPage() {
  return (
    <div>
      <SideBar options={props.options} user={props.user} />
      <MenuAdmin />
    </div>
  );
};

export default MenuAdminPage;
