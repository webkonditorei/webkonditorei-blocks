import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks,
  useInnerBlocksProps
} from "@wordpress/block-editor";
import "./editor.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function Edit({ }) {
 

  
  return (
 
   

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        
       <InnerBlocks 
  allowedBlocks={['webkonditorei-blocks/slider-slide']}
  template= {[
			['webkonditorei-blocks/slider-slide'],
			['webkonditorei-blocks/slider-slide'],
      ['webkonditorei-blocks/slider-slide'],
		]}

/>
      </Swiper>

        

  
  
  );
}
 