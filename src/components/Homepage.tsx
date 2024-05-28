import "./Homepage.css";
import Sushi1 from "../static/images/Sushi1.jpg"
import Sushi2 from "../static/images/Sushi2.jpg"
import Sushi3 from "../static/images/Sushi3.jpg"



function Homepage() {

    return (
        <>
            <header className="homepage-header">
                <div className="hero-section">
                    <h1>The best place to<br></br> eat sushi in the city</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quo laboriosam amet tenetur commodi voluptatibus iste dignissimos
                        maiores asperiores neque rem.</p>
                    <div className="btns">
                        <a id="reserve-btn" href="">Reserve table</a>
                        <a id="order-btn" href="">Order online</a>
                    </div>
                </div>
            </header>
            <div className="sushi-container">
                <img id="move-top" className="sushi-img" src={Sushi1} alt="" />
                <img id="move-down" className="sushi-img" src={Sushi2} alt="" />
                <img id="move-top" className="sushi-img" src={Sushi3} alt="" />
            </div>
            <footer>
                <div className="information">
                    <p>address: 2252 Sunrise Blvd, Rancho Cordova, CA 95670 </p>
                    <span>|</span>
                    <p>Phone number:  (916) 852-8581</p>
                </div>
            </footer>
        </>
    )
}

export default Homepage