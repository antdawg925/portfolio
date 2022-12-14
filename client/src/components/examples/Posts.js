import "../../CSS/style.css"
import "../../CSS/inq.css"
import "../../CSS/exMedia.css"

export const Posts = () => {
    return (
        <div className="form-box form"  >
            <h1 className="title">Posts</h1>

            <div className="border post">

                <img src="https://cdn-icons-png.flaticon.com/128/4615/4615740.png" alt="avi1" className="pics" />&nbsp;&nbsp;&nbsp;
                <p>@McArthurIII</p>

                <p>“We cannot solve problems with the kind of thinking we employed when we came up with them.” <br /> - Albert Einstein</p>

            </div>

            <div className="border post">

                <img src="https://cdn-icons-png.flaticon.com/128/4615/4615665.png" alt="avi1" className="pics" />&nbsp;&nbsp;&nbsp;
                <p>@2Sweezy</p>

                <p>
                    “Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments
                    toward organizational objectives. It is the fuel that allows common people to attain uncommon results.” — Andrew Carnegie
                </p>

            </div>

            <div className="border post">

                <img src="https://cdn-icons-png.flaticon.com/128/4615/4615643.png" alt="avi1" className="pics" />&nbsp;&nbsp;&nbsp;
                <p>@Jermaine4202</p>

                <p> “Opportunity is missed by most people because it is dressed in overalls and looks like work.” <br /> - Thomas Edison </p>

            </div>

        </div>
    )
}