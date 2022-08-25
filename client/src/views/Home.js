// import Body from "../components/Body";
import Footer from "../components/Footer";
import GitHubLinks from "../components/GitHubLinks";
import Nav from "../components/Nav";
import { Orbital } from "../components/three/Orbital";
import "../CSS/style.css";

const Home = () => {
    return (
        <div className="x">

            <Nav/>
            <GitHubLinks />
            <Orbital/>
            {/* <Body/> */}
            <Footer/>
            
        </div>
    )
}
export default Home;