import React, { useState } from 'react';
import Header from './wineShop/Header';
import Menu from './wineShop/Menu';
import './App.css';

import { Grid } from '@material-ui/core';


function App() {
  const [users, setUsers] = useState([]);
  const [signup, setSingup] = useState(false);

  const addUser = (user) => {
    let newUser = users.find(us => us.firstName === user.firstName & us.lastName === user.lastName & us.password === user.password);
    console.log(`newUser`, newUser)
    if (newUser === undefined) {
      localStorage.setItem("name", user.firstName);
      setUsers([...users, user])
      setSingup(true);
    } else {
      alert('You already Singup')
      return;
    }
  }

  const resetUser = () => {
    const userName = localStorage.getItem("name");
    localStorage.setItem("name", '');
    setSingup(false);
  }

  return (
      <Grid container direction={"row"} className="App">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Menu addUser={addUser} signup={signup} resetUser={resetUser}/>
        </Grid>
      </Grid>

  );
}

export default App;
