import React, { useEffect, useState } from 'react'
import { database } from '../firebase/firebaseConfig'
import { ref, onValue } from  'firebase/database'



const MenuPage = () => {
    let menuRef = ref(database, '/Menu/');
    const [pizzaMenu, setPizzaMenu] = useState(null);
    const [ appMenu, setAppMenu ] = useState(null);
    const [ saladMenu, setSaladMenu ] = useState(null);

    useEffect(() => {
        onValue(menuRef, (snapshot) => {
            const data = snapshot.val();
            setPizzaMenu(data.Pizzas);
            setAppMenu(data.Appetizers);
            setSaladMenu(data.Salads);
        })
    }, [])

    // Splitting menu subcategories into seperate arrays to render
    let pizzas = [];
    for(let key in pizzaMenu)  {
        pizzas.push(key);
    }
    let apps = [];
    for(let key in appMenu) {
        apps.push(key);
    }
    let salads = [];
    for(let key in saladMenu)    {
        salads.push(key)
    }

    console.log(apps, salads)


    return (
        <>
            <section>
                <header className="menu-section-title"><h2>Our Pizzas</h2></header>
                <div className="menu-grid">
                {pizzas.map(pizza => {
                    return(
                        <div key={pizza} className="menu-item">
                            <h3 className="menu-item-name">{pizza}</h3>
                            <p className="menu-item-description">{pizzaMenu[pizza].Description}</p>
                            <ol className="menu-item-price-list">
                                <li>Small (Feeds 1 - 2).......... ${pizzaMenu[pizza].Price.Small}</li>
                                <li>Medium (Feeds 2 - 4)......... ${pizzaMenu[pizza].Price.Medium}</li>
                                <li>Large (Feeds  5 - 8).......... ${pizzaMenu[pizza].Price.Large}</li>
                            </ol>
                        </div>
                    )
                })}
                </div>
            </section>
            <section>
                <header className="menu-section-title"><h2>Salad</h2></header>
                <div className="menu-grid">
                {salads.map(salad => {
                    return(
                        <div key={salad} className="menu-item">
                        <h3 className="menu-item-name">{salad}</h3>
                        <p className="menu-item-description">{saladMenu[salad].Description}</p>
                        <p className='menu-item-price-list'>${saladMenu[salad].Price}</p>
                        </div>
                    )
                })}
                </div>
            </section>
            <section>
                <header className="menu-section-title"><h2>Appetizers</h2></header>
                <div className="menu-grid">
                    {apps.map(app => {
                        return(
                            <div key={app} className="menu-item">
                            <h3 className="menu-item-name">{app}</h3>
                            <p className="menu-item-description">{appMenu[app].Description || null}</p>
                            <p className='menu-item-price-list'>${appMenu[app].Price}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default MenuPage
