import Cover from "../Shared/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drink = menu.filter((item) => item.category === "drinks");
//   const offered = menu.filter((item) => item.category === "offered");

const params = useParams()
console.log('params :>> ', params);

  return (
    <div>
      <Cover
        img={orderCoverImg}
        heading={"Our Shop"}
        subHeading={"Would You Like To Try A Dish ?"}
      ></Cover>

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index);
        }}
        className={" bg-slate-700 text-white py-2"}
      >
        <TabList className={" text-center"}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
            <div className="grid grid-cols-3 gap-10 px-10 my-10" >
            {
                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-3 gap-10 px-10 my-10" >
            {
                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-3 gap-10 px-10 my-10" >
            {
                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-3 gap-10 px-10 my-10" >
            {
                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-3 gap-10 px-10 my-10" >
            {
                drink.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
            </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
