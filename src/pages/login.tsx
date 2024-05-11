import '../style/login.css'
export default function Login() {
    
    return (
        <div className="container-body">
            <div className="center">
                <h1>Login</h1>
                <form >
                    <div className="txt-field">
                        <input type="text" name="name" required/>
                        <label htmlFor="name">Username</label>
                    </div>
                    <div className="txt-field">
                        <input type="password" name="password" required/>
                        <label htmlFor="password">password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input type="submit" value={'Login'} />
                    <div className="signup_link">
                        Not a member? <a href="#">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    )
}