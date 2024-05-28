import React, { useState, useEffect } from 'react';

import SideBar from 'side_bar/SideBar'
import UserList from 'user_list/UserList'
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
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
      <UserList />
    </div>
  );
};
export default UserListPage