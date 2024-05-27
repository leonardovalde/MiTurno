import React, { useState, useEffect } from 'react';
import './UserList.css';
import IconRemove from '../../assets/icon/Vector.png';
import { showListUsers } from '../api/UserListApi';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userList = await showListUsers();
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container-main-users'>
      {users.length > 0 ? (
        users.map((user) => (
          <label key={user.id} className="container-label">
            <div className="row">
              <div className="col-md-10 d-flex flex-column align-items-left justify-content-center">
                <span className="label-text">{user.email}</span>
              </div>
              <div className="col-md-2 d-flex flex-column align-items-center justify-content-center">
                <a className="label-button">
                  <img className="icon" src={IconRemove} alt="icon-remove" />
                </a>
              </div>
            </div>
          </label>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserList;
