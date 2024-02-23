import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks
} from "@wordpress/block-editor";
import "./editor.scss";


export default function Edit({ }) {
 



  return (
    <>
      <div className="wbk-faq-main-container">
        <InnerBlocks
          allowedBlocks={[
            'webkonditorei-blocks/faq-block',
          ]}
           template= {[
			['webkonditorei-blocks/faq-block'],
		]}
        />

      </div>
    </>
  );
}
