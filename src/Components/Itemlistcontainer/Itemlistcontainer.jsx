import {Link } from "react-router-dom";

export const ItemListContainer = ({product}) => {
    const {id,title,image,precio,categoria} = product 

    return (
        <>
            <div className="card">
                <div>
                <img src={image} className="cart__img" alt="..."></img>
                    <div className="card__body">                       
                        <h4 className="card__titulo">{title}</h4>
                        <h5 className="card__precio">Precio: ${precio}</h5>                      
                        <Link to={`/${categoria}/${id}`} className="" ><i className=""> ver más</i></Link>                       
                    </div>
                </div>
                
            </div>
        </>

    )
}
