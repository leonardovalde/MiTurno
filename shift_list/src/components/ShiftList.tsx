import React, { useState, useEffect } from 'react';
import './ShiftList.css';
import IconRemove from '../../assets/icon/Vector.png';
import { getListShift } from '../api/ShiftListApi';

function ShiftList() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shiftList = await getListShift("2dd9b9fc-c015-4724-9074-9a88d328d0ff");
        console.log("Esto es ssssss", shiftList);
        setShifts(shiftList || []); 
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container-main-users'>
      {shifts && shifts.length > 0 ? (
        shifts.map((shift, index) => (
          <label key={index} className="container-label">
            <div className="row">
              <div className="col-md-10 d-flex flex-column align-items-left justify-content-center">
                <span className="label-text">Turno: {shift.shift_time}</span>
                <span className="label-text">Usuario: {shift.user_id}</span>
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
        <p>No shifts found.</p>
      )}
    </div>
  );
}

export default ShiftList;
