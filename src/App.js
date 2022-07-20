import logo from './logo.svg';
import { BrowserRouter as Router, Route,Link, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/SignUp';
function App() {
  return (
    // <div>
    //   {/* <Signup /> */}
    //   <Login />
    // </div>  
    
    

    <Router>
        <Routes>
          <Route exact path="/login" component={<Login/>}/>
          <Route exact path="/signup" component={<Signup/>}/>
        </Routes>
    </Router>


  );
}

export default App;
