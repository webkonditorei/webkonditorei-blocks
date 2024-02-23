import {
  
  InnerBlocks
} from "@wordpress/block-editor";

export default function save({ attributes }) {

  return (
   
     <>
      <div className="wbk-faq-main-container">
        <InnerBlocks.Content
        />

      </div>
    </>
   
  );
}
