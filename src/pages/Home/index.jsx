import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import './Home.css';

export default function Home(){
    return (
        <>
            <Header/>
            <div className='container-main'> 
                <Menu/>
                <Banner/> 
            </div>
            <h2 className='gallery-title'>Navegue pela galeria</h2>
            <div className='container-gallery'>
                Galeria de fotos
            </div>
            <Footer/>
        </>
    );
}