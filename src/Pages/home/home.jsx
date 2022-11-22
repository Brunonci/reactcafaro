import Layout from '../../Components/Layout';
import Navbar from '../../Components/Navbar';
import Tituloinicial from '../../Components/Tituloinicial';
import Itemlistcontainer from '../../Components/Itemlistcontainer';


const Initial = () => {
    const Menus = ['Inicio', 'Divisas', 'Cuentas', 'Items', 'Boosteo'];
    const Listas = ['OSRS','RS3','Albion', 'Lost Ark', 'New World'];
    return (
        <Layout>        
            <Navbar menus={Menus}>
            </Navbar>
            <Tituloinicial/>
            <Itemlistcontainer listas={Listas}/>
        </Layout>
    )
}

export default Initial;