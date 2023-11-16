import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-img text-white">
            <div className="bg-slate-600 bg-opacity-60 pt-5">

            <SectionTitle
            Heading={'featured Item'}
            SubHeading={'Check It Out'}
            ></SectionTitle>

            <div className="flex gap-16 justify-center items-center px-36 pt-2 pb-20 ">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className="text-lg mb-1">March 20, 2023</p>
                    <p className="text-lg ">WHERE CAN I GET SOME?</p>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline uppercase outline-white text-white">read more</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;