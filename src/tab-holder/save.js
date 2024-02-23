import { InnerBlocks } from "@wordpress/block-editor";


export default function save({ attributes }) {
    const { title, titleColor, iconColor, titleTag } = attributes;

  return (
    <>
     <div className="wbk-tabs-holder">
        <InnerBlocks.Content/>
      </div>
    </>
  );
}
