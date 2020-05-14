import React from 'react';
import axios from 'axios';

const Dashboard = (props) => {
  console.log(props);
  const myF = () => {
    console.log('123');
    axios({
      method: 'delete',
      url: 'http://localhost:4000/api/pages/logout',
      withCredentials: true,
    }).then(props.history.push('/login'));
  };
  return (
    <div className="dashboard">
      <button onClick={myF}>qweqwewewqewq</button>
    </div>
  );
};

export default Dashboard;
