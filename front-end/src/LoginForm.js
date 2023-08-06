
import { NavLink} from "react-router-dom";

export default function LoginhtmlForm(props){
    
     
    
    return(
        <div className="formdiv">
            <form onSubmit={props.loginsubmitHandler}>
              <h1>
            Enter Details
          </h1>
          <div className="infodiv">                    
                    
                    <div className="emaildiv">
                        <label htmlFor="emailbox"> Email </label><br/>
                      <input type="text" htmlFor="emailbox" ref={props.email}/>
                      </div>  
                      
                      <div className="pwddiv">
                        <label htmlFor="pwd"> Password </label><br/>
                      <input type="password" htmlFor="pwd" ref={props.password}/>                
                      </div>
                      
                  </div>                 
                  <button onClick={props.loginsubmitHandler}className="signbutton" >
                    Login 
                  </button> 
                  <div className="new">
                <div className="newuserdiv">
                  <p className="newp">
                    Not a user already?
                  </p>
                </div>
                <div className="create">
                  <NavLink to='/Register' className="createlink">Create a new account</NavLink>
                </div>
              </div>
                            
                  
            </form>       
          </div>
    )
}