
export const Login = (props) => {

    return (
        <div className="form-box form">
            <h1 className="title">Login</h1>
            <button onClick={() => { props.setLorR(false) }} className="button-56 m-b"> Register </button>

            <div className="border">
                <p> Email </p>
                <input type="text" name="ex" className="input" />
            
                <p> Password </p>
                <input type="text" name="ex" className="input" />
                <button className="submit"> Submit </button>
            </div>

        </div>
    )
}