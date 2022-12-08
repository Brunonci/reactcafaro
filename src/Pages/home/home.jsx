import Layout from '../../Components/Layout';
import Navbar from '../../Components/Navbar';
import Tituloinicial from '../../Components/Tituloinicial';
import { Products } from '../../Components/Products/Products';


const Initial = () => {
    return (
        <Layout>        
            <Navbar/>
            <Tituloinicial/>
            <Products/>
        </Layout>
    )
}

export default Initial;