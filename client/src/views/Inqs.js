import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Forms } from "../components/examples/Forms"
import { Banners } from "../components/examples/Banners"
import { Posts } from "../components/examples/Posts"
import { NavBars } from "../components/examples/NavBars"
import "../CSS/style.css"
import "../CSS/inq.css"
import "../CSS/media.css"

export const Inqs = () => {
    const [info, setInfo] = useState(true)
    const [form, setForm] = useState(false)
    const [banners, setBanners] = useState(false)
    const [posts, setPosts] = useState(false)
    const [nav, setNav] = useState(false)
    // const [form, setForm] = useState(false)
    const navigate = useNavigate();

    const flipSwitch = (s) => {
        setInfo(false)
        setForm(false);
        setBanners(false)
        setPosts(false);
        setNav(false);
        if (s === 0){
            setBanners(true)
        } else if (s===1){
            setForm(true);
        } else if (s===2){
            setNav(true)
        } else if (s===3){
            setPosts(true)
        }
    }

    return (
        <div id="inq-bar" > 

            <div className="color l-bar ">


                {/* <div className="flexo"> */}

                    <h6 className="button-56" id="h-btn" onClick={()=> navigate("/")}>Home</h6 >
                    <h6 className="button-56" onClick={() => flipSwitch(2)}>Nav Bar</h6 >
                    <h6 className="button-56" onClick={() => flipSwitch(0)}>Banners</h6 >
                    
                {/* </div> */}

                {/* <div className="flexo"> */}
                    
                    <h6 className="button-56" onClick={() => flipSwitch(1)}>Forms</h6 >
                    <h6 className="button-56" onClick={() => flipSwitch(3)}>Posts</h6 >

                {/* </div> */}

            </div>

            <div id="inq-box">

                {
                    form ? (
                        <Forms id="the-form"/> 
                    ): null
                }
                {
                    banners ? (
                        <Banners />
                    ):null
                }
                {
                    posts ? (
                        <Posts />
                    ):null
                }
                {
                    nav ? (
                        <NavBars />
                    ):null
                }
                {
                    info ? (
                        <div className="form-box form">

                            <p className="buff border"> 
                                Please select one of the options<br/> to view a few potential features to<br/> consider for your interface.
                            </p>

                        </div>

                    ): null
                }
            </div>
            
        </div>
    )
}