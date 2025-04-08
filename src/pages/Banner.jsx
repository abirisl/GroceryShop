
import hero from '../assets/images/banner/hero.jpg';
import hero1 from '../assets/images/banner/hero1.jpg';
import hero2 from '../assets/images/banner/hero2.jpg';

function Banner() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-8 max-w-7xl mx-auto'>
        {/* Main hero banner */}
        <div className='xl:col-span-2 xl:row-span-2 relative h-full min-h-[300px] xl:min-h-[500px]'>
          <img 
            className='w-full h-full object-cover rounded-lg' 
            src={hero} 
            alt="Main banner" 
          />
          {/* Text overlay - positioned right */}
          <div className='absolute inset-0 flex items-center justify-end pr-8 sm:pr-12 md:pr-16 lg:pr-24'>
            <div className='text-right max-w-[400px] space-y-2 sm:space-y-4 bg-opacity-80 p-4 sm:p-6 rounded-lg'>
              <p className='text-lg sm:text-xl md:text-2xl text-gray-800 font-medium'>
                100% Original Dry Foods
              </p>
              <h2 className='text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
                Dried Food Best Healthy
              </h2>
              <button className='mt-2 sm:mt-4 bg-lime-600 hover:bg-lime-700 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Secondary banners */}
        <div className='relative h-full min-h-[200px] xl:min-h-[240px]'>
          <img 
            className='w-full h-full object-cover rounded-lg' 
            src={hero1} 
            alt="Secondary banner 1" 
          />
        </div>
        <div className='relative h-full min-h-[200px] xl:min-h-[240px]'>
          <img 
            className='w-full h-full object-cover rounded-lg' 
            src={hero2} 
            alt="Secondary banner 2" 
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

{/* <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div>
              {/* Banner Image */}
// <img
//   src={banner.image}
//   alt={banner.title}
//   className="w-full h-auto object-cover"
// /> */}
{/* Banner Content */ }
//       </div>
//     </SwiperSlide>
//   ))}
// </Swiper>