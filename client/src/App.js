import React, { useContext, useEffect, useState } from 'react'
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const { BrowserRouter } = require("react-router-dom");

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
