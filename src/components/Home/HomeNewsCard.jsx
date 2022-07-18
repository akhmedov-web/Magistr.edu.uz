import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img from "../../images/example.jpg"


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
        <SwiperSlide>
            <img src={Img} alt="img" />
            <p className="mt-4">November 25, 2022</p>
            <h4>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h4>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
