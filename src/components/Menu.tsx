import "./Menu.css"
import { useState, useEffect } from "react"
import data from "../json/menu.json"


function Menu() {
    const [menu, setMenu] = useState([]);
    const [activeSort, setactiveSort] = useState("All")


    useEffect(() => {
        // Loads all the items in the menu
        if(data[3].category === "All") {
            setMenu(data[3].items);
            console.log(data)
        }else{
            throw new Error("No data found!")
        }
    },[])

    // sorts the menu based on the button user clicks
    function handleClick(menuType:string) {
        setactiveSort(menuType)

        if(data) {
            // find the category object in data array
            setMenu(data.find(menu => menu.category === menuType)?.items);
        }else{
            console.error("No data found")
        }
    }



    return (
        <>
            <main className="menu-header">
                <div className="menu-section">
                    <h1>Our Menu</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quo laboriosam amet tenetur commodi voluptatibus iste dignissimos
                        maiores asperiores neque rem.</p>
                    <div className="sort-btns">
                        <button onClick={() => handleClick("All")} className={activeSort === "All" ? "active" : "btn"}>All</button>
                        <button onClick={() => handleClick("Sushies")} className={activeSort === "Sushies" ? "active" : "btn"}>Main Dishes</button>
                        <button onClick={() => handleClick("Drinks")} className={activeSort === "Drinks" ? "active" : "btn"}>Drinks</button>
                        <button onClick={() => handleClick("Desserts")} className={activeSort === "Desserts" ? "active" : "btn"}>Appetizer</button>
                    </div>
                </div>
                <div className="sushi-card-holder">
                    {menu.map((item, index) => (
                        <div key={index}  className="sushi-card">
                            <div className="card-img" style={{backgroundImage : `url(${item.img})`}} />
                            
                            <div className="card-desc">
                                <h3>{item.name}</h3>
                                <hr />
                                
                                <p>{item.desc || "No description available Now"}</p> 
                                <span className="pricing">${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}


export default Menu