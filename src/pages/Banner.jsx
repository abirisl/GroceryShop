import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Banner() {
  const banners = [
    {
      image: 'https://i.ibb.co.com/sJWVRWWs/banner1.jpg',
      title: '',
      description: 'This is the first banner.',
    },
    {
      image: 'https://i.ibb.co.com/67Dy3h0P/banner2.jpg',
      title: '',
      description: 'This is the second banner.',
    },
    {
      image: 'https://i.ibb.co.com/5Wk0RDz7/banner3.jpg',
      title: '',
      description: 'This is the third banner.',
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div>
              {/* Banner Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-auto object-cover"
              />
              {/* Banner Content */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;