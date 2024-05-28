import React from 'react'

import SideBar from 'side_bar/SideBar'
import ShiftList from 'shift_list/ShiftList'

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

function TurnListUserPage() {
  return (
    <div>
      <SideBar options={props.options} user={props.user} />
      <ShiftList/>
    </div>
  )
}

export default TurnListUserPage;