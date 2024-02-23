import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { useEffect } from 'react';

export default function Edit({ attributes = {}, setAttributes }) {
    let { tabTitle } = attributes;

    const onChangeTabTitle = (newTabTitle) => {
        setAttributes({ tabTitle: newTabTitle });
    };

  const addTabTitleItem = async () => {

    const newTabTitle = [...(tabTitle || []), ''];
    setAttributes({ tabTitle: newTabTitle });

    try {
        const blocks = wp.data.select('core/block-editor').getBlocks();
        const tabContentHolderClientId = blocks[0].innerBlocks[1].clientId;

        const newContentBlock = wp.blocks.createBlock('webkonditorei-blocks/tab-content');
        wp.data.dispatch('core/block-editor').insertBlocks(newContentBlock, undefined , tabContentHolderClientId);
    } catch (error) {
        console.error('Error occurred while adding tab content block:', error);
    }
};


    useEffect(() => {
        // Initialisiere tabTitle, wenn es leer ist
        if (!tabTitle || tabTitle.length === 0) {
            const newTabTitle = ['', '', ''];
            setAttributes({ tabTitle: newTabTitle });
        }
    }, []);

    return (
        <>
            <Toolbar label="Tabs">
                <ToolbarButton onClick={addTabTitleItem} label="Tab hinzufügen">Tab hinzufügen</ToolbarButton>
            </Toolbar>

            <div className="wbk-tabs-header">
                {tabTitle && tabTitle.map((title, index) => (
                    <button key={index}>
                        <RichText
                            placeholder={__("Tab Titel", "webkonditorei-blocks")}
                            tagName={'span'}
                            onChange={(newTitle) => {
                                const newTabTitles = [...tabTitle];
                                newTabTitles[index] = newTitle;
                                setAttributes({ tabTitle: newTabTitles });
                            }}
                            value={title}
                            className="webk-tab-title-button"
                        />
                    </button>
                ))}
            </div>

           
        </>
    );
}
