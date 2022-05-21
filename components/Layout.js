import Footer from "./Footer"
import Navbar from "./Navbar"
import HeroCarousel from "./HeroCarousel"
import Items from "./Items";
import Menu from "./Menu";
function Layout({ children }) {
    return (
        <div className="bg-black">
            <>
                <Navbar />
                <HeroCarousel />
                <Items />
                <Menu />
                
                

                { children }

                <Footer />

            </>
        </div>
    );
}

export default Layout
