import "../../CSS/style.css"
import "../../CSS/inq.css"
import "../../CSS/exMedia.css"
import { useState } from "react";
export const Banners = () => {

    let s = 0;
    const pics = [
        "https://cdn-icons-gif.flaticon.com/6172/6172532.gif",
        "https://cdn-icons-png.flaticon.com/128/8229/8229518.png",
        "https://cdn-icons-png.flaticon.com/256/6558/6558597.png",
    ]
    let [slider, setSlider] = useState("https://cdn-icons-gif.flaticon.com/6172/6172532.gif")
    const slide = (n) => {
        // console.log(s);
        if (n === true) {
            if (s === 4) {
                s = 0;
                console.log(s);
                setSlider(pics[s]);
                return slider;
            } else {
                s++;
                console.log(s);
                setSlider(pics[s]);
                return slider;
            }
        } else if (n === false) {
            if (s > 0) {
                s--;
                console.log(s);
                setSlider(pics[s]);
                return slider;
            } else if (s === 0) {
                s = 2;
                console.log(s);
                setSlider(pics[s]);
                return slider;
            }
        }
    }

    return (
        <div className="form-box form">
            <h1 className="title">Banners</h1>

            <div className="" style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>

                <img src="https://cdn-icons-png.flaticon.com/128/3916/3916954.png" alt="back" onClick={() => slide(false)} style={{width:"1rem"}}/>
                <img src={slider} alt="pic" className="slider" />
                <img src="https://cdn-icons-png.flaticon.com/128/3916/3916924.png" alt="back" onClick={() => slide(true)} style={{width:"1rem"}}/>

            </div>

            <p className="m-top post border ">
                Great opportunity for your company to advertise photos of your products and services or display work culture between colleagues.
            </p>
            
        </div>
    )
}