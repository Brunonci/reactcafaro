import { NavLink } from "react-router-dom";

const Tituloinicial = () => {
    return (
        <div>
            <div className="titulo__inicial">
                <h1>Hagamos el tradeo in-game genial otra vez</h1>
                <h3>Compra & vende monedas, artículos, cuentas y servicios de boosting del juego</h3>
            </div>

            <div className="categorias">
                <div className="categoria__hijo">
                    <h1>Divisas</h1>
                    <img src="https://assetsdelivery.eldorado.gg/v7/_assets_/home-page/v1/treasure-chest.png?w=200&h=183&q=40" alt="" />
                    <NavLink to="divisas"><button>VER OFERTAS</button></NavLink>
                </div>
                <div className="categoria__hijo">
                    <h1>Cuentas</h1>
                    <img src="https://assetsdelivery.eldorado.gg/v7/_assets_/home-page/v1/armored-man.png?w=94&h=160&q=40" alt="" />
                    <button>VER OFERTAS</button>
                </div>
                <div className="categoria__hijo">
                    <h1>Cuentas</h1>
                    <img src="https://assetsdelivery.eldorado.gg/v7/_assets_/home-page/v1/sword.png?w=188&h=165&q=40" alt="" />
                    <button>VER OFERTAS</button>
                    
                </div>
                <div className="categoria__hijo">
                    <h1>Boosteo</h1>
                    <img src="https://assetsdelivery.eldorado.gg/v7/_assets_/home-page/v1/arrows.png?w=119&h=178&q=40" alt="" />
                    <button>VER OFERTAS</button>
                </div>
            </div>

            <div className="info"> 
                <div className="padre__info">
                    <img src="https://assetsdelivery.eldorado.gg/v7/_assets_/home-page/v1/shield-icon.png?w=100&h=100&q=40" alt="" />
                    <div className="info__text">
                        <h2>100% de protección comercial</h2>
                        <h3>Protección comercial garantizada tanto para compradores como para vendedores.</h3>
                    </div>
                </div>
                <div className="padre__info">
                    <img src="https://assetsdelivery.eldorado.gg/v7/_assets_/home-page/v1/support-icon.png?w=100&h=100&q=40" alt="" />
                    <div className="info__text">
                        <h2>Soporte en vivo 24/7</h2>
                        <h3>El soporte de Eldorado.gg funciona las 24 horas. ¡Contáctenos en cualquier momento!</h3>
                    </div>
                </div>
            </div>




        </div>
        
    )
}

export default Tituloinicial;