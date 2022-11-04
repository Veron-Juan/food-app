import Carousel from "./Carousel";
import Categories from "./Categories";
import Favorites from "./Favorites";
import Header from "./Header";



import WelcomeCard from "./WelcomeCard";




export default function Home(){
    
    return(
        <>
        
        <WelcomeCard/>
        {/* <Categories/> */}
        <Carousel />
        <Favorites/>
        
        </>
    )
}