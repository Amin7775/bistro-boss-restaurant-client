import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div className="pb-16">
            {title && <Cover img={coverImg} heading={title}></Cover>}
            <div className="my-5 grid grid-cols-2 gap-4 pt-5">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;