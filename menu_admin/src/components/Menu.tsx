import React, { useState } from 'react'
import './Menu.css'
import IconShift from '../../assets/icon/Exchange.png'
import IconUsers from '../../assets/icon/Team.png'

function Menu({ }: any) {
  return (

    <div className="container_main">
      <div className="heading">Menú</div>
      <div className="container-options"> 
        <div className="row">
        <div className="col-md-3 d-flex flex-column align-items-center justify-content-center"></div>
          <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <a className="btn btn-square" href="/admin/user_list_page">
              <img src={IconUsers} alt="icon-users" />
              <span className='text-square'>Ver lista de Usuarios</span>
            </a>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-left justify-content-left">
            <a className="btn btn-square" href="/admin/shift_list_page">
            <img src={IconShift} alt="icon-shift" className="icon-square" />
              <span className='text-square'>Ver lista de Turnos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
