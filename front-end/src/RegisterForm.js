export default function RegisterForm(props) {

    return (
        <div className="formdiv">
            <form onSubmit={props.regsubmitHandler} >
                <h1>
                    Enter Details
                </h1>
                <div className="infodiv">
                    <div className="firstname">
                        <label>
                            First Name
                        </label><br />
                        <input type="text" ref={props.firstname} />
                    </div>
                    <div className="last">
                        <label>
                            Last Name
                        </label><br />
                        <input type="text" ref={props.lastname} />
                    </div>

                    <div className="emaildiv">
                        <label htmlFor="emailbox"> Email </label><br />
                        <input type="text" htmlFor="emailbox" ref={props.email} />
                    </div>

                    <div className="pwddiv">
                        <label htmlFor="pwd"> Password </label><br />
                        <input type="password" htmlFor="pwd" ref={props.password} />
                    </div>

                </div>
                <button onClick={props.regsubmitHandler} className="signbutton" >
                    Register
                </button><br />
                <p className="status" id="error"></p>
            </form>
        </div>
    )
}