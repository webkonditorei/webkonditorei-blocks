import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks
} from "@wordpress/block-editor";
import "./editor.scss";
import CrossIcon from "../../assets/icons/cross-icon";
import { Panel, PanelBody, PanelRow, ColorPalette, RadioControl } from "@wordpress/components";
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes }) {
  const { title, titleColor, iconColor, titleTag } = attributes;

  function toggleFaq(e) {
    const faqContentHolder = e.currentTarget.parentElement;
    faqContentHolder.classList.toggle("active-faq");
  }

  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };



  const onChangeIconColor = (newiconColor) => {
    setAttributes({ iconColor: newiconColor });
  };

  const onChangeTitleColor = ( newtitleColor) => {
    setAttributes({ titleColor: newtitleColor });
  };

  const onChangeTitleTag = ( newTitleTag) => {
    setAttributes({ titleTag: newTitleTag });
  };

const colors = useSelect('core/block-editor').getSettings().colors;

  return (
    <>
      <InspectorControls>
        <Panel header="FAQ Block Einstellungen">
          <PanelBody title="Farben" initialOpen={true}>
			<h4>Iconfarbe</h4>
            <PanelRow>
              <ColorPalette
                colors={ colors }
				value={iconColor}
                onChange={onChangeIconColor}
              />
            </PanelRow>

			<h4>Titelfarbe</h4>
            <PanelRow>
              <ColorPalette
                colors={ colors }
				value={titleColor}
                onChange={onChangeTitleColor}
              />
            </PanelRow>

            <h4>Titel Tag</h4>
            <PanelRow>
              <RadioControl
            label="Titel Tag"
            help="Hier gibst du an, welche H-Tag der Titel haben soll"
            selected={titleTag ? titleTag : 'h2'}
            options={ [
                { label: 'h1', value: 'h1' },
                { label: 'h2', value: 'h2' },
                { label: 'h3', value: 'h3' },
                { label: 'h4', value: 'h4' },
                { label: 'h5', value: 'h5' },
                { label: 'h6', value: 'h6' },
            ] }
            onChange={onChangeTitleTag}
        />
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>

      <div className="wbk-faq-holder">
        <div className="wbk-faq-title-holder" onClick={toggleFaq}>
          <RichText
            placeholder={__("FAQ Titel", "webkonditorei-blocks")}
            tagName={titleTag ? titleTag : 'h2'}
            onChange={onChangeTitle}
            value={title}
            allowedFormats={ [ 'core/bold', 'core/italic' ] }
            className="webk-faq-title"
			style={{ color: titleColor }}
      
          />

          <CrossIcon fill={iconColor} />
        </div>

        <div className="wbk-faq-content-holder">
          <InnerBlocks/>
        </div>
      </div>
    </>
  );
}
