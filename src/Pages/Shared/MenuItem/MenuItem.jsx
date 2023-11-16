
const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item;
    return (
        <div className="flex gap-3">
            <img className="w-28" src={image} style={{borderRadius:'0 200px 200px 200px' }} alt="" />
            <div className="flex flex-col gap-2">
                <p className="text-lg uppercase">{name} --------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-lg">${price}</p>
        </div>
    );
};

export default MenuItem;