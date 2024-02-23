import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import CloseIcon from "../../assets/icons/close-icon";

export default function save({ attributes }) {
     const { hinweisBackground, hinweisRadius ,closeIconColor, closeIconBackground, closeIconRadius } = attributes;

  return (
    <>
         <div className="wbk-hinweis-holder" style={{backgroundColor: hinweisBackground, borderRadius: hinweisRadius + "px"}}>
           <div className="wbk-hinweis-content">

         <CloseIcon fill={closeIconColor} closeIconBackground={closeIconBackground} closeIconRadius={closeIconRadius} />

        <InnerBlocks.Content/>
        
        </div>

      </div>
    </>
  );
}
