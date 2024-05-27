import "./Menu.css"


function Menu() {



    return (
        <>
            <main className="menu-header">
                <div className="menu-section">
                    <h1>Our Menu</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quo laboriosam amet tenetur commodi voluptatibus iste dignissimos
                        maiores asperiores neque rem.</p>
                    <div className="sort-btns">
                        <a href="">Appetizer</a>
                        <a href="">Main Dishes</a>
                        <a href="">Drinks</a>
                        <a href="">Desserts</a>
                    </div>
                </div>
                <div className="sushi-card-holder">
                <div className="sushi-card">
                    <img src="../static/menu/menu-sushi1" alt="" />
                    <h3>Bossanova roll</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, sequi?</p>
                </div>
            </div>
            </main>
            
        </>
    )
}


export default Menu