import "../CSS/style.css"
import "../CSS/media.css"

const GitHubLinks = () => {

    const openGit = (x) => {
        if (x === 1) {
            window.open("https://github.com/antdawg925/twitisphere", "_blank");
        } else if (x === 2) {
            window.open("https://github.com/antdawg925/TradeSmart-Charts", "_blank");
        } else if (x === 3) {
            window.open("https://github.com/antdawg925/", "_blank");
        } else if (x === 4) {
            window.open("https://github.com/antdawg925/portfolio", "_blank");
        }
        return x
    }

    return (
        <div className="bx-ctr">

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="gitcat" onClick={() => openGit(3)} id="m-git" />

            <div id='git-links'>
                <div className="b-shdw">
                    <h1>Portfolio Site </h1>

                    <div className="group">

                        <p>
                            TensorFlow model makes live predictions of the objects that appear in your webcam.
                            3D objects were created with Three.js to enhance the UI and overall originality.
                            Some examples of designs are provided for clients.
                        </p>

                    </div>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" onClick={() => openGit(4)} className="b-fixed in-shdw" alt="gitcat" style={{ width: "3rem" }} />

                </div>

                <div className="b-shdw">
                    <h1>Twitisphere </h1>

                    <div className="group">

                        <p>
                            A Flask server sends queries to MySQL database allowing users to create accounts, follow users and like their posts.
                            A React platform displays live news along with the posts on the main feed page.
                        </p>

                    </div>

                    <div className="b-fixed">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="gitcat" style={{ width: "3rem" }} onClick={() => openGit(1)} className="b-fixed in-shdw" />

                    </div>

                </div>

                <div className="b-shdw">
                    <h1>Stock Charts </h1>

                    <div className="group">

                        <p> React.Js and Chart.Js display stock trading information for users to observe average returns, collect ticker information,
                            and see what sectors they are trading most. JavaScript server manages routes to MongoDB to save trade information.
                        </p>


                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="gitcat" style={{ width: "3rem" }} onClick={() => openGit(2)} className="b-fixed in-shdw"/>
                </div>

            </div>

        </div>
    )
}
export default GitHubLinks