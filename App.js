import{Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Component/Pages/Home';
import AboutUs from './Component/Pages/AboutUs';
import Error from "./pages/Error";
import NavBar from "./Component/navbar ";
import Footer from "./Component/Footer"; 
import Axios from "axios";
import {useEffect, useState} from "react"


import UserDetail from "./Component/Pages/UserDetail";
function App() {
  const [usders, setUsers] = useState([])
  const [loadUsers, setLoadUsers] = useState(true)
  const getUsers=()=>{
    Axios.get("http://jsonplaceholder.typicode.com/users")
    .then((res=>{
      setUsers (res.data);
      setLoadUsers(false)
    }))
    .catch(err=>console.log(err));
  };
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/"render={()=><Home users={users}loadUsers={loadUsers}/>} />
        <Route path="/aboutus"component={AboutUs}/>
        <Route path='/users/:id' component={UserDetails} />
        <Route path="/*"component={Error}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
