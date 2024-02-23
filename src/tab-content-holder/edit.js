import { __ } from "@wordpress/i18n";
import {
  InnerBlocks
} from "@wordpress/block-editor";
import "./editor.scss";
import { Toolbar, ToolbarButton } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
 


  return (
    <>

   
      <div className="wbk-tabs-content-holder">
        <InnerBlocks
        allowedBlocks={['webkonditorei-blocks/tab-content']}
        template={[
          ['webkonditorei-blocks/tab-content'],
          ['webkonditorei-blocks/tab-content'],
          ['webkonditorei-blocks/tab-content']
        ]}
        />
      </div>
    </>
  );
}
