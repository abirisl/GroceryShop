import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Pagination,  Autoplay } from 'swiper/modules'; // Import Autoplay module

function Products() {
  const [products] = useProducts();

  return (
    <div className='m-5 font-semibold text-3xl'>
      <h1>Special Package and Offers</h1>
      {/* Swiper Carousel with Autoplay */}
      <Swiper
        slidesPerView={1} // Default number of slides visible
        spaceBetween={20} // Space between slides
        pagination={{ clickable: true }} // Pagination dots
        
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with 3-second delay
        breakpoints={{
          640: { slidesPerView: 2 }, // 2 slides on screens >= 640px
          1024: { slidesPerView: 3 }, // 3 slides on screens >= 1024px
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;