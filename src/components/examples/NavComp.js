import "../../CSS/style.css"
import "../../CSS/inq.css"
export const NavComp = ({history,setHistory,services, setServices, company, setCompany, contact, setContact}) => {
    return(
        <div>
            {
                history?(
                    <div>

                        <h2 className="r-subT">Company History</h2>
                        <img src="https://cdn-icons-png.flaticon.com/128/8234/8234519.png" alt="hist" className="m-b"/>

                    </div>
                ):null
            }
            {
                services?(
                    <div>

                        <h2 className="r-subT">Company Services</h2>
                        <img src="https://cdn-icons.flaticon.com/png/128/4516/premium/4516921.png?token=exp=1660549269~hmac=a040e60f15cf85b4203228dda308bb55" alt="C" />

                    </div>
                ):null
            }
            {
                company?(
                    <div>

                        <h2 className="r-subT">Company</h2>
                        <img src="https://cdn-icons-png.flaticon.com/128/8234/8234504.png" alt="C" />

                    </div>
                ):null
            }
            {
                contact?(
                    <div>

                        <h2 className="r-subT">Contact Us</h2>
                        <img src="https://cdn-icons.flaticon.com/png/128/5300/premium/5300431.png?token=exp=1660549809~hmac=fe6948988c30d58af05abf3f642896e8" alt="C" />

                    </div>
                    
                ):null
            }
        </div>
    )
}