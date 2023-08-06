import * as React from 'react';
import { useRef} from "react"
import RegisterForm from "./RegisterForm";
import LoginForm from './LoginForm';
import AuthContent from "./auth";
import { Route,Routes } from 'react-router-dom';
import "./App.css";
import {request,setAuthHeader} from './api/axios'
import Welcome from "./welcome";
import { useNavigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  const email=useRef();
    const password=useRef();
    const firstname = useRef();
    const lastname = useRef();
    const navigate=useNavigate();
    
    const loginsubmitHandler=    
        ()=>async (e)=>{
            e.preventDefault();
            const info = {                  
              Email: email.current?.value,
              Password: password.current?.value
          }
            console.log(info)
            request(
              "POST",
              "/login",
              {
                
                email:info.Email,
                password:info.Password
              }
             )
              .then(
              (response) => {
                 setAuthHeader(response.data.token);
                 navigate("/loggedin");
                  //this.setState({componentToShow: "messages"});
              }).catch(
              (error) => {
                  setAuthHeader(null);
                  navigate("/failed");
                  //this.setState({componentToShow: "welcome"})
              }
          );
        }
        const regsubmitHandler =

        () => async (e) => {
            e.preventDefault();

            const info = {
                Firstname: firstname.current?.value,
                Lastname: lastname.current?.value,
                Email: email.current?.value,
                Password: password.current?.value
            };
            console.log(info)
            request(
              "POST",
              "/register",
              {
                firstName:info.Firstname,
                lastName:info.Lastname,
                email:info.Email,
                password:info.Password
              }
             )
              .then(
              (response) => {
                 setAuthHeader(response.data.token);
                 navigate("/");
                  
              }).catch(
              (error) => {
                  setAuthHeader(null);
                  navigate("/failed");
              }
          );

         }
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LoginForm 
          email={email}
          password={password}
          loginsubmitHandler={loginsubmitHandler()}
          />}></Route>
          {/* <Route element={<ProtectedRoutes/>}>
            <Route path="/loggedin" element={<AuthContent/>}></Route>
            
          </Route> */}
          <Route path="/loggedin" element={<AuthContent/>}></Route>
          <Route path="/register" element={<RegisterForm
          email={email}
          password={password}
          firstname={firstname}
          lastname={lastname}
          regsubmitHandler={regsubmitHandler()}
          />}></Route>
          <Route path="/failed" element={<Welcome/>}></Route>
      </Routes>
      
    </div>
  );
  }

export default App;
