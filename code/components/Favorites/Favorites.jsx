import { useState, useEffect } from "react";
import Alerts from "../alerts/Alerts";
import Lists from "../ListsItems/Lists";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    
    useEffect( () => {
        const fetchItems = async () => {
            try{
                const response = await fetch(`https://663b6072fee6744a6ea16c1b.mockapi.io/product`)
                if(!response.ok) throw Error("Data api error");
                const data = await response.json();
                const result = data.filter((item) => item.favorites === true);
                setFavorites(result);
            }
            catch(error) {
                console.log(error)
            } 
        }
        setTimeout(()=> {
            (async ()=>fetchItems())()
        }, 400)
        
    }, [favorites])

    return (
        <div>
            <h1 className="title">
                Избраное
            </h1>
            {
                favorites.length === 0 && <Alerts message="К сожелению список пуст :(" type="warning"/>
            }
            {
                favorites.length !== 0 && <Lists list={favorites}/>
            }
        </div>
    )
}

export default Favorites