import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks
} from "@wordpress/block-editor";
import "./editor.scss";
import { Toolbar, ToolbarButton } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
 


  return (
    <>
      <div className="wbk-tabs-holder">
        <InnerBlocks
        allowedBlocks={[['webkonditorei-blocks/tab-tabs'], ['webkonditorei-blocks/tab-content-holder']]}
        template={[
          ['webkonditorei-blocks/tab-tabs'],
          ['webkonditorei-blocks/tab-content-holder']
        ]}
        />
      </div>
    </>
  );
}
