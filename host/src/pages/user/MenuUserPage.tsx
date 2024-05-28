import React, { useState, useEffect } from 'react';

import SideBar from 'side_bar/SideBar'
import CreateTurnModal from 'create_turn/CreateTurnModal'
import { useNavigate } from 'react-router-dom';

const MenuUserPage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'None',
    role: 'User',
    onClickLogout: () => {
      navigate('/login');
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
        title: 'Ver Turnos',
        icon: 'ic:baseline-format-list-bulleted',
        onClick: () => {
          navigate('/user/turn_list');
        },
      },
      {
        title: 'Crear Turno',
        icon: 'ic:outline-add-box',
        onClick: () => {
          navigate('/user/create_turn');
        },
      },
    ],
    user: user,
  };

  return (
    <div>
      <SideBar options={props.options} user={props.user} />
      <CreateTurnModal />
    </div>
  );
};

export default MenuUserPage;