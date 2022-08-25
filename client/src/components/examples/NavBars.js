import { useState } from "react"
import { NavComp } from "./NavComp";
import "../../CSS/style.css"
import "../../CSS/inq.css"
export const NavBars = () => {
    const [extra, setExtra] = useState(false);
    const [history, setHistory] = useState(false);
    const [services, setServices] = useState(false);
    const [company, setCompany] = useState(false);
    const [contact, setContact] = useState(false);

    const flipSwitch = (n) => {
        setExtra(true)
        setHistory(false)
        setServices(false)
        setCompany(false)
        setContact(false)
        if (n === 0) {
            setHistory(true)
        } else if (n === 1) {
            setServices(true)
        } else if (n === 2) {
            setCompany(true)
        } else if (n === 3) {
            setContact(true)
        }
    }
    return (
        <div className="ex-nav flexi nav">

            <div className="flexi" onClick={() => setExtra(false)}>

                <img src="https://cdn-icons-png.flaticon.com/128/4149/4149679.png" alt="icon" id="icon" height={"50rem"} />&nbsp;&nbsp;&nbsp;&nbsp;
                <h2 id="name" >MacroSoft</h2>

            </div>

            <p className="btns" onClick={() => flipSwitch(0)}>History</p>
            <p className="btns" onClick={() => flipSwitch(1)}>Services</p>
            <p className="btns" onClick={() => flipSwitch(2)}>About the company</p>
            <p className="btns" onClick={() => flipSwitch(3)}>Contact</p>
            
            {
                extra ? (
                    <div id="extend-nav">

                        <NavComp
                            setHistory={setHistory} history={history}
                            setServices={setServices} services={services}
                            setCompany={setCompany} company={company}
                            setContact={setContact} contact={contact}
                        />
                        
                    </div>
                ) : null
            }

        </div>
    )
}