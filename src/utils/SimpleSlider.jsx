import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,

    };

    return (
      <div className="container">
        <Slider {...settings} >
            <div>
            <img 
                className="container__image"
                src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_TheBoys_S2_NowStreaming_CONTROL/fc19a988-4a45-4b5f-8e59-929039ccab1d._UR3000,600_SX1500_FMwebp_.jpg" alt=""/>
            </div>
            
            <div>
            <img 
                className="container__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt=""/>
            </div>

            <div>
            <img 
                className="container__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" alt=""/>
            </div>

            <div>
            <img 
                className="container__image"
                src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_TVOD_MultiPMD_0911_V2/e6ecfe73-b223-45ca-a201-aa93d5d32c5b._UR3000,600_SX1500_FMwebp_.jpg" alt=""/>
            </div>      

            <div>
            <img 
                className="container__image"
                src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_3P_PGATL_Hero/60db5069-8890-46f4-934c-fc2c57466697._UR3000,600_SX1500_FMwebp_.jpg" alt=""/>
            </div>                          
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;