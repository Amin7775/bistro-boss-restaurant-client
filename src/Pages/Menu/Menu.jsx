import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import cover1 from "../../assets/menu/banner3.jpg";
import DessertImg from "../../assets/menu/dessert-bg.jpeg";
import PizzaImg from "../../assets/menu/pizza-bg.jpg";
import SaladImg from "../../assets/menu/salad-bg.jpg";
import SoupImg from "../../assets/menu/soup-bg.jpg";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover
        img={cover1}
        heading={"Our menu"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      {/* Offered Menu */}
      <SectionTitle
        subHeading={"Don't miss"}
        Heading={"Todays Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu */}
      <MenuCategory items={dessert} title={'desserts'} coverImg={DessertImg}></MenuCategory>
      {/* Pizza Menu */}
      <MenuCategory items={pizza} title={'pizza'} coverImg={PizzaImg}></MenuCategory>
      {/* Salad Menu */}
      <MenuCategory items={salad} title={'salad'} coverImg={SaladImg}></MenuCategory>
      {/* Soup Menu */}
      <MenuCategory items={soup} title={'soup'} coverImg={SoupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
