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
            wp.data.dispatch('core/block-editor').insertBlocks(newContentBlock, undefined, tabContentHolderClientId);
        } catch (error) {
            console.error('Error occurred while adding tab content block:', error);
        }
    };

   const removeTabTitleItem = async (index) => {
    const newTabTitle = [...tabTitle];
    newTabTitle.splice(index, 1);
    setAttributes({ tabTitle: newTabTitle });

    try {
        const blocks = wp.data.select('core/block-editor').getBlocks();
        const contentBlocks = blocks[0].innerBlocks[1].innerBlocks;

    

        if (contentBlocks.length >= index + 1) {
            const contentBlockToRemove = contentBlocks[index];
            wp.data.dispatch('core/block-editor').removeBlocks(contentBlockToRemove.clientId);
        }
    } catch (error) {
        console.error('Error occurred while removing tab content block:', error);
    }
};

const moveTabTitleItem = async (currentIndex, direction) => {
    const newTabTitle = [...tabTitle];
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    // Überprüfen, ob der neue Index innerhalb des Bereichs liegt
    if (newIndex >= 0 && newIndex < newTabTitle.length) {
        // Tausche die Positionen der Tab-Titel
        [newTabTitle[currentIndex], newTabTitle[newIndex]] = [newTabTitle[newIndex], newTabTitle[currentIndex]];
        setAttributes({ tabTitle: newTabTitle });

        try {
            const blocks = wp.data.select('core/block-editor').getBlocks();
            const tabHolderBlock = blocks.find(block => block.name === 'webkonditorei-blocks/tab-holder');
            const tabContentHolderBlock = tabHolderBlock.innerBlocks.find(innerBlock => innerBlock.name === 'webkonditorei-blocks/tab-content-holder');
            const tabContentHolderClientId = tabContentHolderBlock.clientId;
            const contentBlocks = tabContentHolderBlock.innerBlocks;

            // Überprüfen, ob die Anzahl der Inhaltsblöcke ausreichend ist
            if (contentBlocks.length >= currentIndex + 1 && contentBlocks.length >= newIndex + 1) {
                // Verschiebe jeden Content-Block entsprechend der neuen Reihenfolge der Tabs
                const sourceClientId = contentBlocks[currentIndex].clientId;
                const targetClientId = contentBlocks[newIndex].clientId;
                const fromRootClientId = wp.data.select('core/block-editor').getBlockRootClientId(sourceClientId);
                const toRootClientId = wp.data.select('core/block-editor').getBlockRootClientId(targetClientId);
                const targetIndex = wp.data.select('core/block-editor').getBlockIndex(targetClientId);

                wp.data.dispatch('core/block-editor').moveBlockToPosition(sourceClientId, fromRootClientId, toRootClientId, targetIndex);
            }
        } catch (error) {
            console.error('Error occurred while moving tab content block:', error);
        }
    }
};


const handleMoveTabUp = (index) => {
    moveTabTitleItem(index, 'up');
};

const handleMoveTabDown = (index) => {
    moveTabTitleItem(index, 'down');
};



    useEffect(() => {
        
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
                    <div key={index}>
                        <button onClick={() => handleMoveTabUp(index)}>links</button>
                        <button onClick={() => handleMoveTabDown(index)}>rechts</button>
                        <button onClick={() => removeTabTitleItem(index)}>X</button>
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
                    </div>
                ))}
            </div>
        </>
    );
}
