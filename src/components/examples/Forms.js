import "../../CSS/style.css"
import "../../CSS/inq.css"
import { useState } from "react"
import { Login } from "./Login";
import { Register } from "./Register";

export const Forms = () => {
    const [LorR, setLorR] = useState(true);

    return (
        <div>

            {
                LorR ? (
                    <>
                        <Login setLorR={setLorR} />
                    </>
                ) : (
                    <>
                        <Register setLorR={setLorR} />
                    </>
                )
            }

        </div>
    )
}