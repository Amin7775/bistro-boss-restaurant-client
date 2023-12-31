import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//img
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle Heading={"ORDER ONLINE"} SubHeading={"From 11:00am to 10:00pm"}></SectionTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-center text-3xl -mt-16 pb-3 font-light text-white shadow-sm'>SALADS</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /> <h3 className='text-center text-3xl -mt-16 pb-3 font-light text-white shadow-sm'>SOUPS</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /> <h3 className='text-center text-3xl -mt-16 pb-3 font-light text-white shadow-sm'>PIZZAS</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /> <h3 className='text-center text-3xl -mt-16 pb-3 font-light text-white shadow-sm'>DESERTS</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /> <h3 className='text-center text-3xl -mt-16 pb-3 font-light text-white shadow-sm'>FRUITS</h3></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Category;