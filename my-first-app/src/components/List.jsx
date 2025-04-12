import {react} from 'react'
import styles from './List.module.css'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Apple', isFruit: true, id: 2 },
    { title: 'Garlic', isFruit: false, id: 3 }
    
  ];

function showList(){
    const ListItems = products.map(product => (
        <li className= {product.isFruit ? styles.fruit : styles.noFruit}>
            {product.title}
        </li>
    ))

    return(
        <ul>{ListItems}</ul>
    )
}

export default showList;