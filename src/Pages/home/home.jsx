import Layout from '../../Components/Layout';
import Navbar from '../../Components/Navbar';
import Tituloinicial from '../../Components/Tituloinicial';
import Itemlistcontainer from '../../Components/Itemlistcontainer';

import products from '../../mock/productos'

const Initial = () => {
    const productos = [products];
    return (
        <Layout>        
            <Navbar >
            </Navbar>
            <Tituloinicial/>
            <Itemlistcontainer listas={productos}/>
        </Layout>
    )
}

export default Initial;