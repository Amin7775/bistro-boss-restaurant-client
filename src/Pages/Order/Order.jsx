import Cover from "../Shared/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import useHook from "../../hooks/useHook";
import OrderTab from "./OrderTab";

const Order = () => {
  const categoriess = ["salad", "pizza", "soup", "dessert", "drinks"];
  const category = useParams();
  const { id } = category;
  const findIndex = categoriess.find((item) => item === id);
  const intialIndex = categoriess?.indexOf(findIndex);
  const [tabIndex, setTabIndex] = useState(intialIndex);
  // console.log(id)
  //   console.log(findIndex, "find");
  //   console.log(intialIndex, "ini");
  //   console.log("table", tabIndex);

  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drink = menu.filter((item) => item.category === "drinks");
  //   const offered = menu.filter((item) => item.category === "offered");

  // console.log('params :>> ', params);

  const helmet = useHook({ page: "Order" });
  return (
    <div>
      {helmet}
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
        // bg-slate-700 text-white
        className={" py-2"}
      >
        <TabList className={" text-center"}>
          <Tab>salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drink}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
