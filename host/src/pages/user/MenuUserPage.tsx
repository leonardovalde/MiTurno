import React from 'react'

import SideBar from 'side_bar/SideBar'
import CreateTurn from 'create_turn/CreateTurn'

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

function CreateTurnPage() {
  return (
    <div>
      <SideBar options={props.options} user={props.user} />
      <CreateTurn/>
    </div>
  )
}

export default CreateTurnPage;