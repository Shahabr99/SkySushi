import "./About.css";


function About() {


    return (
        <>
            <main>
                <div className="about-header">
                    <div className="info-section">
                        <h1>About our sushi restaurant</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Inventore odit ullam, dolores excepturi ipsa, reiciendis, 
                            dolor aperiam eius eveniet debitis at odio. Vel veniam 
                            totam animi, fugiat repellendus harum magni?
                        </p>
                        <div className="restaurant-info">
                            <div>
                                <h1>2</h1>
                                <p>Locations</p>
                            </div>
                            <div>
                                <h1>34+</h1>
                                <p>Team Members</p>
                            </div>
                            <div>
                                <h1>2002</h1>
                                <p>Founded</p>
                            </div>
                            <div>
                                <h1>100%</h1>
                                <p>Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero"></div>
                </div>
            </main>
        </>
    )
}

export default About;