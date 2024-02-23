import { __ } from "@wordpress/i18n";
import {
  RichText,
} from "@wordpress/block-editor";
import "./editor.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function Edit({ attributes, setAttributes }) {
 
const { title } = attributes;


  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  return (
 
     <SwiperSlide>

       <RichText
            placeholder={__("Titel", "webkonditorei-blocks")}
            tagName="h3"
            onChange={onChangeTitle}
            value={title}
            allowedFormats={[]}
          
          />
      
      </SwiperSlide>

  );
}
