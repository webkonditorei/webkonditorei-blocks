import {
  RichText,
  InnerBlocks
} from "@wordpress/block-editor";



export default function save({ attributes }) {

  const { title } = attributes;

  return (
   
 
   
    <div class="swiper-slide">
         

<RichText.Content
            tagName="h3"
            value={title}
          />

        </div>

       
     
  
   
  );
}
