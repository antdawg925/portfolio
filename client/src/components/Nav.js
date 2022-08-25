import "../CSS/style.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const newTab = () => {
        window.open(
            "https://docs.google.com/document/d/1TYVeOvcPFNIMikMFnPaxJORiJ8RnqHLM/edit", "_blank");
    }

    return (
        <div className="color nav ">

            <div className="flexi">

                <h6 className="button-56 w-btn" onClick={() => newTab()}> Resume </h6>
                <h6 className="button-56 w-btn" role="button" onClick={() => navigate("/inquiries")}>User Features</h6>

            </div>

            <div className="flexi">

                <h6 className="button-56 w-btn" role="button" onClick={() => navigate("/three")}>JS in 3D</h6>
                <h6 className="button-56 w-btn" role="button" onClick={() => navigate("/webcam")}>TF Object Detection</h6>

            </div>

        </div>
    )
}
export default Nav;