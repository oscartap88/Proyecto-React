


const Button =({txtBtn}) =>{
    const handleClick = () =>{
        alert ("Estamos Construyendo...")
    }
    return <button onClick={handleClick}>{txtBtn}</button>
};

export default Button;