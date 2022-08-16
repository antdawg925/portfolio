
export const Register = (props) => {

    return (

        <div className="form-box form" >

            <h1 className="title"> Register </h1>
            <button onClick={() => props.setLorR(true)} className="button-56 m-b"> Login </button>

            <div className="border">

                <p> Email </p>
                <input type="text" name="ex" className="input" />

                <p> Password</p>
                <input type="text" name="ex" className="input" />

                <p> Confirm Password</p>
                <input type="password" name="ex" className="input" />

                <button className="submit"> Submit </button>
            </div>

        </div >
    )
}