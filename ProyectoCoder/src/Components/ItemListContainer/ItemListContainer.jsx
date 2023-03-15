const ItemListContainer = ({Item}) => {
    return (
        <ul>
            <li>{Item[0]}</li>
            <li>{Item[1]}</li>  
            <li>{Item[2]}</li>
            <li>{Item[3]}</li>
        </ul>
    )
}

export default ItemListContainer;