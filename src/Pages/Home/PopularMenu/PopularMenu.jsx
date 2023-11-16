import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu,setMenu] = useState();
    useEffect(()=>{
        axios.get('./menu.json')
        .then(data => {
            const loadedData = data.data
            const popularItems = loadedData.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    console.log('menu :>> ', menu);
    return (
        <section>
            <SectionTitle Heading={"FROM OUR MENU"} SubHeading={"Check it out"}></SectionTitle>
            <div className="my-5 grid grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;