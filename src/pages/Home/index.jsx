import Banner from "../../components/Banner";
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
        </>
    );
}