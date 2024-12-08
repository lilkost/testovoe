import { Flex } from "antd";
import styles from './Header.module.scss';
import { Link } from "react-router";

const Header = () => {
    const links = [
        {name: 'Главная', path: '/'},
        {name: 'Продукты', path: 'products'},
        {name: 'Избраное', path: 'favorites'}
    ];
    
    return (
        <header className={styles.header}>
            <Flex align="center" justify="space-between">
                <a href="">
                    github
                </a>
                <Flex gap={10}>
                    {
                        links.map((item, index)=> <Link to={item.path} key={index}>{item.name}</Link>)
                    }
                </Flex>
            </Flex>
        </header>
    )
}

export default Header;