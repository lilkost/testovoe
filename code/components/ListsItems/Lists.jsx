import ProductCard from "../products/ProductCard";
import styles from './Lists.module.scss';

const Lists = (list) => {
    return (
        <>
            {
                list.length !== 0 && <div className={styles.list}>
                    {
                        list.list.map(item=> <ProductCard key={item.id} item={item}/>)
                    }
                </div>
            }
        </>
    )
}

export default Lists