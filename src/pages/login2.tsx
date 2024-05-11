import '../style/login2.css'

export default function Login2(){
    return(
        <div className="body">
        <div className="container">
            <form >
                <h1>Login to access more features</h1>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="">password</label>
                    <input type="password" name="password" className="form-control" required />
                </div>
                <input type="Submit" className="btn" value={'Login'}/>
            </form>
        </div>
        </div>
    )
}