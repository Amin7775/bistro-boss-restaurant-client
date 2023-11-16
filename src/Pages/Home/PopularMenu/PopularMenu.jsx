import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    // const [menu,setMenu] = useState();
    // useEffect(()=>{
    //     axios.get('./menu.json')
    //     .then(data => {
    //         const loadedData = data.data
    //         const popularItems = loadedData.filter(item => item.category === 'popular')
    //         console.log(popularItems)
    //         setMenu(popularItems)
    //     })
    // },[])
    const [menu]= useMenu();
    const popular = menu?.filter(item => (item.category) === 'popular')
    console.log('menu :>> ', popular);
    return (
        <section>
            <SectionTitle Heading={"FROM OUR MENU"} SubHeading={"Check it out"}></SectionTitle>
            <div className="my-5 grid grid-cols-2 gap-4">
                {
                    popular?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;