import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks
} from "@wordpress/block-editor";


export default function save({ attributes }) {
  // Hier könntest du auf die Blockattribute zugreifen, wenn nötig



  return (

      <div class="swiper mySwiper">
    <div class="swiper-wrapper">
       
       <InnerBlocks.Content />
     
    </div>
    </div>
 
  );
}
