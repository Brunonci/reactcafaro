import { products } from "../../Mock/productos"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"

export const Products = () => {
    return (
        <>  
            <div className="productos__titulo">
                <h1>Productos</h1>
                <hr></hr>
                </div>
            <div className="productos">
                {
                    products.map((item) =>
                        <div className="" key={item.id}>
                            <ItemListContainer product={item} />
                        </div>
                    )
                }
            </div>
            
        </>
    )
}

export default Products;
