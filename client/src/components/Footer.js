import "../CSS/style.css"
const Footer = () => {
    const linkedIn = () => {
        window.open(
            "https://www.linkedin.com/in/anthonyearly/", "_blank");
    }

    return (
        <div className="footer">
            <h2>Full Stack Software Developer</h2>

            <div className="flex r">
                <p>Visit me on Linked In!</p>
                <img src="https://cdn-icons-png.flaticon.com/128/6422/6422202.png" alt="li-pic" height={"30rem"} style={{ margin: ".8rem 0 0 .5rem", cursor: "pointer" }} onClick={() => linkedIn()} />
            </div>
            
            <h4 className=" flex r">Email me for software inquiries :</h4>
            <p className=" flex r">builtwithpurpose99@gmail.com</p>

        </div>
    )
}
export default Footer;