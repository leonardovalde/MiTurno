import React from 'react'

import SideBar from 'side_bar/SideBar'
import CreateTurn from 'create_turn/CreateTurn'

const MenuAdminPage = () => {
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
          console.log('Home');
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