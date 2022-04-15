import React from "react";
import {
  BrowserRouter as Rooter,
  Route,
  Routes}
  from 'react-router-dom';
  import Home from './Pages/HomePage/Home';
  import TaskList from './Pages/TaskListPage/TaskList';
  import Contact from './Pages/ContactPage/Contact';
  import Corona from './Pages/CoronaPage/Corona';
  import Register from "./Pages/RegisterPage/Register";
  import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <Rooter>
      <Menu/>
      <Routes>
        <Route exact path="/Pages/HomePage" element={<Home />}/>
        <Route exact path="/Pages/TaskListPage" element={<TaskList />}/>
        <Route exact path="/Pages/ContactPage" element={<Contact />}/>
        <Route exact path="/Pages/CoronaPage" element={<Corona />}/>
        <Route  path="/Pages/RegisterPage" element={<Register />}/>
      </Routes>
    </Rooter>
  );
}

export default App;
