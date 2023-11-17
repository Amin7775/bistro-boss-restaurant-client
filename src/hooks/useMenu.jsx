import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu,setMenu] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get('menu.json')
        .then(data => {
            const loadedData = data.data
            setMenu(loadedData)
            setLoading(false)
        })
    },[])
    return [menu,loading]
    
};

export default useMenu;