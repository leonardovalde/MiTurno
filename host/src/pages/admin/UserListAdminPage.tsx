import React from 'react'

import SideBar from 'side_bar/SideBar'
import UserList from 'user_list/UserList'

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

function UserListPage() {
  return (
    <div>
      <SideBar options={props.options} user={props.user} />
      <UserList/>
    </div>
  )
}

export default UserListPage