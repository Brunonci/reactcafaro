import Proptypes from 'prop-types'

const Itemlistcontainer = ({listas}) => {
    return (
        <div className="itemlist__container">
            {
            listas.map((lista)=>{
                return <div>
                    <p className="itemlist__items">{lista}</p>
                </div>
                
            })  
            }
        </div>
    )
}

Itemlistcontainer.proptype = {
    listas: Proptypes.array.isRequired
}

export default Itemlistcontainer;
