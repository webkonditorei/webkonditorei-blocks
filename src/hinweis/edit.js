import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks
} from "@wordpress/block-editor";
import "./editor.scss";
import CloseIcon from "../../assets/icons/close-icon";
import { Panel, PanelBody, PanelRow, ColorPalette, RangeControl } from "@wordpress/components";
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes }) {
  const { hinweisBackground, hinweisRadius ,closeIconColor, closeIconBackground, closeIconRadius } = attributes;



  const onChangeCloseIconColor = (newCloseIconColor) => {
    setAttributes({ closeIconColor: newCloseIconColor });
  };


  const onChangeHinweisBackground = (newHinweisBackground) => {
    setAttributes({ hinweisBackground: newHinweisBackground });
  };


   const onChangeCloseIconBackground = (newCloseIconBackground) => {
    setAttributes({ closeIconBackground: newCloseIconBackground });
  };

   const onChangeCloseIconRadius = (newCloseIconRadius) => {
    setAttributes({ closeIconRadius: newCloseIconRadius });
  };

  const onChangeHinweisRadius = (newHinweisRadius) => {
    setAttributes({ hinweisRadius: newHinweisRadius });
  };




const colors = useSelect('core/block-editor').getSettings().colors;


  return (
    <>
      <InspectorControls>
        <Panel header="Hinweis Block Einstellungen">
          <PanelBody title="Farben" initialOpen={true}>
			<h4>Iconfarbe</h4>
            <PanelRow>
              <ColorPalette
                colors={ colors }
				value={closeIconColor}
                onChange={onChangeCloseIconColor}
              />
            </PanelRow>


            <h4>Icon Hintergrund</h4>
            <PanelRow>
              <ColorPalette
                colors={ colors }
				value={closeIconBackground}
                onChange={onChangeCloseIconBackground}
              />
            </PanelRow>

             <h4>Icon Border Radius</h4>
            <PanelRow>
             <RangeControl
            label="Border Radius"
            value={ closeIconRadius }
            onChange={onChangeCloseIconRadius}
            min={ 0 }
            max={ 500 }
        />
            </PanelRow>

			<h4>Hinweis Hintergrund</h4>
            <PanelRow>
              <ColorPalette
                colors={ colors }
				value={hinweisBackground}
                onChange={onChangeHinweisBackground}
              />
            </PanelRow>

             <h4>Hinweis Border Radius</h4>
            <PanelRow>
             <RangeControl
            label="Border Radius Hinweis Container"
            value={ hinweisRadius }
            onChange={onChangeHinweisRadius}
            min={ 0 }
            max={ 200 }
        />
            </PanelRow>
           
          </PanelBody>
        </Panel>
      </InspectorControls>

      <div className="wbk-hinweis-holder" style={{backgroundColor: hinweisBackground, borderRadius: hinweisRadius + "px"}}>

        <div className="wbk-hinweis-content">

          <CloseIcon fill={closeIconColor} closeIconBackground={closeIconBackground} closeIconRadius={closeIconRadius} />


        <InnerBlocks/>

        </div>

      </div>
    </>
  );
}
