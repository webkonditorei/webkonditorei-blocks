export default function save({ attributes }) {
    const { tabTitle } = attributes || { tabTitle: [] };

    if (!tabTitle || !Array.isArray(tabTitle)) {
        return null; // Wenn tabTitle nicht vorhanden oder kein Array ist, wird null zurückgegeben
    }

    return (
        <div className="wbk-tabs-header">
            {tabTitle.map((title, index) => (
               
                    <button key={index}>
                        <span className="webk-tab-title-button">{title}</span>
                    </button>
              
            ))}
        </div>
    );
}
