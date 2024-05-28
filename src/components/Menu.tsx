import "./Menu.css"
import { useState, useEffect } from "react"
import data from "../json/menu.json"

function Menu() {
    const [menu, setMenu] = useState([]);
    // const [error, setError] = useState("")

    useEffect(() => {
        console.log(data[3].items[6].image)
        if(data[3].category === "All") {
            setMenu(data[3].items)
        }else{
            throw new Error("No data found!")
        }
    },[])



    return (
        <>
            <main className="menu-header">
                <div className="menu-section">
                    <h1>Our Menu</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quo laboriosam amet tenetur commodi voluptatibus iste dignissimos
                        maiores asperiores neque rem.</p>
                    <div className="sort-btns">
                        <a href="">All</a>
                        <a href="">Main Dishes</a>
                        <a href="">Drinks</a>
                        <a href="">Appetizer</a>
                    </div>
                </div>
                <div className="sushi-card-holder">
                    {menu.map((item, index) => (
                        <div key={index}  className="sushi-card">
                            
                            <div className="card-img" style={{backgroundImage: `url(${item.image})`}}></div>
                            
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