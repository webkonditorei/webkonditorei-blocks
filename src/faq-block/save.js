import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import CrossIcon from "../../assets/icons/cross-icon";

export default function save({ attributes }) {
    const { title, titleColor, iconColor, titleTag } = attributes;

  return (
    <>
      <div className="wbk-faq-holder">
        <div className="wbk-faq-title-holder">
          <RichText.Content
            tagName={titleTag}
            value={title}
            className="webk-faq-title"
            style={{ color: titleColor }}
          />

          <CrossIcon fill={iconColor} />
        </div>

        <div className="wbk-faq-content-holder">
          <InnerBlocks.Content/>
        </div>
      </div>
    </>
  );
}
