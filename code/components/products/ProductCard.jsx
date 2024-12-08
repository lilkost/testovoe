import { Typography, Button, Flex } from "antd";
import { Link } from "react-router";
import {useState, } from 'react';
import { useProducts } from "../../store";
import styles from './Product.module.scss';
import {EditOutlined, DeleteOutlined, HeartOutlined} from "@ant-design/icons";

const ProductCard = ({item}) => {
    const changeStateOpenModalUpdate = useProducts(state=>state.changeStateOpenModalUpdate);
    const setItem = useProducts(state=>state.setItem);
    
    const {id, link, text,title} = item;
    const {Title, Paragraph} = Typography;
    const [addStyle, setAddStyle] = useState(false);


    const setFavorites = () => {
        const {id, favorites} = item;
        console.log(id, favorites)

        fetch(`https://663b6072fee6744a6ea16c1b.mockapi.io/product/${id}`, {
            method: 'PUT', // or PATCH
            headers: {'content-type':'application/json'},
            body: JSON.stringify({favorites: !favorites})
        }).then(res => {
            if (res.ok) {

                return res.json();
            }
        });

        setAddStyle(prev=>!prev);
    }

    const changeValue = () =>{
        changeStateOpenModalUpdate();
        setItem(item);
    }

    const deleteItem = () => {
        fetch(`https://663b6072fee6744a6ea16c1b.mockapi.io/product/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        })
    }

    return (
        <article className={styles.card}>
            <Flex align="center" justify="space-between" gap={10}>
                <Title>{title}</Title>
                <Flex align="center" gap={5}>
                    <Button shape="circle" icon={<EditOutlined />} onClick={()=>changeValue()}/>
                    <Button shape="circle" icon={<DeleteOutlined />} onClick={()=>deleteItem()}/>
                    <Button shape="circle" icon={<HeartOutlined />} onClick={()=>setFavorites()} style={addStyle || item.favorites ? {color: 'red'} : ''} />
                </Flex>
            </Flex>
            <Paragraph className={styles.text}>
                {text}
            </Paragraph>
            <Link to={`/products/${id}`} style={{color: '#1677ff'}}>Перейти</Link>
        </article>
    )
}

export default ProductCard