import Slider from "react-slick";
import sliderImage1 from "../../assets/images/slider1.jpeg";
import sliderImage2 from "../../assets/images/slider2.jpeg";
import sliderImage3 from "../../assets/images/slider3.webp";
import sliderImage4 from "../../assets/images/slider4.webp";
import sliderImage5 from "../../assets/images/slider5.jpg";
import sliderImage6 from "../../assets/images/slider6.jpg";

const MainSlider = () => {
  const imgSlider = [
    { id: 1, img: sliderImage1 },
    { id: 2, img: sliderImage2 },
    { id: 3, img: sliderImage3 },
    { id: 4, img: sliderImage4 },
    { id: 5, img: sliderImage5 },
    { id: 6, img: sliderImage6 },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mb-5 marginTop ">
        <Slider {...settings}>
          {imgSlider.map((img) => (
            <img
              key={img.id}
              src={img.img}
              alt=""
              height={400}
              className="w-100 rounded-5 "
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MainSlider;
