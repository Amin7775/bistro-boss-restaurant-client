import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover1 from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";
const Menu = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro Boss | Menu</title>
            </Helmet>
            menu
            <Cover img={cover1} heading={'Our menu'} subHeading={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;