import { useState, useEffect } from "react";

import styles from './Product.module.scss';
import { Button, Flex, Alert } from "antd";
import ModalQS from "../modal/Modal";
import ModalUpdate from "../modal/ModalUpdate";
import Alerts from "../alerts/Alerts";
import Lists from "../ListsItems/Lists";

const Products = () => {
    
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState([]);
    
    const changeStateModal = () => {
        setOpen(prev=>!prev);
    }

    useEffect( () => {
        const fetchItems = async () => {
          try{
            const response = await fetch(`https://663b6072fee6744a6ea16c1b.mockapi.io/product`)
            if(!response.ok) throw Error("Data api error");
            const data = await response.json();
            setProduct(data);
          }
          catch(error) {
            console.log(error)
          } 
        }
        setTimeout(()=> {
          (async ()=>fetchItems())()
        }, 400)
        
    }, [product])
    

    return (
        <div>
            <h1 className="title">Cтраница продукты</h1>
            <Flex>
                <Button 
                    type="primary" 
                    className={styles.buttonCreate}
                    onClick={()=>changeStateModal()}
                >
                    Создать запись
                </Button>
            </Flex>
            {
                product.length === 0 && <Alerts message="К сожелению список пуст :(" type="warning"/> 
            }
            {
                product.length !== 0 && <Lists list={product}/>
            }
            <ModalQS 
                open={open}
                setOpen={setOpen}
                changeStateModal={changeStateModal}
            />
            <ModalUpdate/>
        </div>
    );
}

export default Products;