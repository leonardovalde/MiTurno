import React from 'react'

import SideBar from 'side_bar/SideBar'
import CreateTurn from 'create_turn/CreateTurn'

const MenuUserPage = () => {
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
    user: user,
  };

  return (
    <div>
      <SideBar options={props.options} user={props.user} />
      <CreateTurn />
    </div>
  );
};

export default MenuUserPage;