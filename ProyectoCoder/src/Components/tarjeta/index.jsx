import React from "react";
import { Link } from "react-router-dom";
import styles from './tarjeta.module.css'

const TarjetaPrincipales= ({producto}) => {
    return (
        <Link to={`${producto.id}`}>
        <div className={styles.container}>
            <h4>{producto.title}</h4>
            <img src={producto.image} alt="" width={150}/>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
        </div>
        </Link>
    )
}

export default TarjetaPrincipales;