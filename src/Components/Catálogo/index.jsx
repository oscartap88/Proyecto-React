import React from "react";
import TarjetaPrincipales from "../tarjeta";

const Catálogo = ({productos}) => {
    return (
        <>{ productos.map ((producto =>
           <TarjetaPrincipales key={producto.id} producto={producto} />
            ))}
            </>
    )
}

export default Catálogo;