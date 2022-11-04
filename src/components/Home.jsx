import Carousel from "./Carousel";
import Categories from "./Categories";
import Favorites from "./Favorites";
import Header from "./Header";



import WelcomeCard from "./WelcomeCard";




export default function Home(props){
    const {products, onAdd} = props;
    return(
        <>
        
        <WelcomeCard/>
        {/* <Categories/> */}
        <Carousel products={products} onAdd={onAdd}/>
        <Favorites/>
        
        </>
    )
}