import "./TextSelector.scss";

function TextSelector() {
    return (
        <>
            <div className="textSelectorContainer">
                <div className="textSelectorZone">
                    <div className="textStyleSelectZone">
                        <h3>Text Style</h3>
                        <div className="textStyleSelect">
                            {TEXT_STYLE.map((style, i) => {
                                return <div key={i}>{style.style} </div>;
                            })}
                        </div>
                    </div>
                    <div className="textColorSelectZone">
                        <h3>Text Color</h3>
                        <div className="textColorSelect">
                            <div className="textColor">
                                <div className="textColorDark"></div>
                            </div>
                            <div className="textColor">
                                <div className="textColorColored"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="textPreview"></div>
            </div>
            <div />
        </>
    );
}

export default TextSelector;

const TEXT_STYLE = [
    {
        id: 1,
        style: "Regular",
    },
    {
        id: 2,
        style: "Bold",
    },
    {
        id: 3,
        style: "Italic",
    },
    {
        id: 4,
        style: "under line",
    },
];
