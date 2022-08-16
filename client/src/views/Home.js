import Body from "../components/Body";
import Footer from "../components/Footer";
import GitHubLinks from "../components/GitHubLinks";
import Nav from "../components/Nav";
import { PhotoBar } from "../components/PhotoBar";
import "../CSS/style.css";

const Home = () => {
    return (
        <div className="x">

            <Nav/>
            <GitHubLinks />
            <PhotoBar/>
            <Body/>
            <Footer/>
            
        </div>
    )
}
export default Home;