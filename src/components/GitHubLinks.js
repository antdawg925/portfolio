import "../CSS/style.css"

const GitHubLinks = () => {
    const git1 = () => {
        window.open(
            "https://github.com/antdawg925/twitisphere", "_blank");
    }
    const git2 = () => {
        window.open(
            "https://github.com/antdawg925/TradeSmart-Charts", "_blank");
    }
    const git3 = () => {
        window.open(
            "https://github.com/antdawg925/", "_blank");
    }
    const git4 = () => {
        window.open(
            "https://github.com/antdawg925/portfolio", "_blank");
    }


    return (
        <div className="bx-ctr">

            <div className="flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="gitcat" style={{ width: "10rem", marginRight: "5rem" }} onClick={() => git3()} id="m-git" />
                
                <div className="b-shdw">
                    <h1>Portfolio Site </h1>

                    <div className="group">

                        <p>
                            TensorFlow model makes live predictions of the objects that appear in your webcam.
                            3D objects were created with Three.js to enhance the UI and overall originality.
                            Some examples of designs are provided for clients.
                        </p>

                    </div>

                    <p onClick={() => git4()} className="b-fixed in-shdw">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="gitcat" style={{ width: "2rem" }} />
                    </p>

                </div>

                <div className="b-shdw">
                    <h1>Twitisphere </h1>

                    <div className="group">

                        <p>
                            A Flask server writes queries to database allowing users to create accounts, follow users and like their posts.
                            A React platform displays live news along with the posts on the main feed page.
                        </p>

                    </div>

                    <div className="b-fixed">

                        <p onClick={() => git1()} className="b-fixed in-shdw" >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="gitcat" style={{ width: "2rem" }} />
                        </p>

                    </div>

                </div>

                <div className="b-shdw">
                    <h1>Stock Charts </h1>

                    <div className="group">

                        <p> React.Js and Chart.Js display stock trading information for users to observe average returns, collect ticker information,
                            and see what sectors they are trading most. JavaScript server manages routes to MongoDB to save trade information.
                        </p>

                    </div>

                    <p onClick={() => git2()} className="b-fixed in-shdw">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="gitcat" style={{ width: "2rem" }} />
                    </p>

                </div>

            </div>

        </div>
    )
}
export default GitHubLinks