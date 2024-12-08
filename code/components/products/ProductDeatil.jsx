import { useParams, useNavigate  } from "react-router";
import { useState, useEffect } from "react";
import styles from './Product.module.scss';
import { Button } from "antd";

const ProductDeatil = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    let {id} = useParams();

    console.log(id)

    useEffect( () => {
        const fetchItems = async () => {
          try{
            const response = await fetch(`https://663b6072fee6744a6ea16c1b.mockapi.io/product/${id}`)
            if(!response.ok) throw Error("Data api error");
            const data = await response.json();
            setProduct(data);
            console.log(product)
          }
          catch(error) {
            console.log(error)
          } 
        }
        setTimeout(()=> {
          (async ()=>fetchItems())()
        }, 400)
        
    }, [product]);

    return (
        <>
            <h1 className={`title ${styles.titleLeft}`}>
                {product.title}
            </h1>
            <p className={styles.detailText}>
                {product.text}
            </p>
            <Button type="primary" onClick={()=>navigate(-1)}>Назад</Button>
        </>
    )
}

export default ProductDeatil