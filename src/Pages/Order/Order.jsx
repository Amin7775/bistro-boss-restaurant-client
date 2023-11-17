import Cover from "../Shared/Cover/Cover";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const Order = () => {

    const [tabIndex,setTabIndex]=useState(0)

  return (
    <div>
      <Cover
        img={orderCoverImg}
        heading={"Our Shop"}
        subHeading={"Would You Like To Try A Dish ?"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index)=>{
        setTabIndex(index)
      }}  className={'my-5 bg-slate-700 text-white py-2'}>
        <TabList className={' text-center'}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
