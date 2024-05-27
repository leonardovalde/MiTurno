import React from 'react'

import SideBar from 'side_bar/SideBar'
import MenuAdmin from 'menu_admin/MenuAdmin'

const props = {
  options: [
    {
      title: 'Ver Turnos',
      icon: 'ic:baseline-format-list-bulleted',
      onClick: () => {
        console.log('Home')
      },
    },
    {
      title: 'Crear Turno',
      icon: 'ic:outline-add-box',
      onClick: () => {
        console.log('Home')
      },
    },
  ],
  user: {
    name: 'Jack Herrington',
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