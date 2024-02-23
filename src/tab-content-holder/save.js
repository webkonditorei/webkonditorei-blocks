import { InnerBlocks } from "@wordpress/block-editor";


export default function save({ attributes }) {


  return (
    <>
     <div className="wbk-tabs-content-holder">
        <InnerBlocks.Content/>
      </div>
    </>
  );
}
