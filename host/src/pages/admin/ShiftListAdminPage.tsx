import React, { useState, useEffect } from 'react';

import SideBar from 'side_bar/SideBar'
import ShiftList from 'shift_list/ShiftList'
import { useNavigate } from 'react-router-dom';


const ShiftListPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'None',
    role: 'User',
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
          navigate('/admin/menu_admin');
        },
      },
    ],
    user: user,
  };

  return (
    <div>
      <SideBar options={props.options} user={props.user} />
      <ShiftList />
    </div>
  );
};

export default ShiftListPage