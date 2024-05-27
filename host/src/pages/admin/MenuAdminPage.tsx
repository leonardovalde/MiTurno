import React from 'react'

import SideBar from 'side_bar/SideBar'
import MenuAdmin from 'menu_admin/MenuAdmin'

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
      <MenuAdmin/>
    </div>
  )
}

export default MenuAdminPage