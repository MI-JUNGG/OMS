import "./ColorSelector.scss";

function ColorSelector() {
    return (
        <>
            <div className="colorSelectorContainer">
                <div className="selectZone">
                    <div className="mainColorSelect">
                        <h3>Main Color</h3>
                        <div className="mainColorList">
                            {MAIN_COLOR.map((data, id) => {
                                return (
                                    <div
                                        key={id}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "100px",
                                            backgroundColor: data.color,
                                            marginRight: "32px",
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="bgColorSelect">
                        <h3>Background Color</h3>
                        <div className="bgColorList">
                            {BG_COLOR.map((data, id) => {
                                return (
                                    <div
                                        key={id}
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "100px",
                                            backgroundColor: data.color,
                                            marginRight: "32px",
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="colorPreview">
                    <div className="previewTop">
                        <img
                            src="/src/assets/images/logo/logo.svg"
                            alt="로고"
                        />
                    </div>
                    <div className="previewInsideContainer">
                        <div className="previewInside">
                            <button className="previewBtn" type="button">
                                Button
                            </button>
                            <span className="previewText">Text Color</span>
                            <div className="previewLogo">
                                <img
                                    src="/src/assets/images/setting/setting_calendar.svg"
                                    alt="logo"
                                    style={{
                                        marginRight: "10px",
                                        fill: "red",
                                    }}
                                />
                                <img
                                    src="/src/assets/images/setting/setting_calendar2.svg"
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div />
        </>
    );
}

export default ColorSelector;

const MAIN_COLOR = [
    {
        id: 1,
        color: "#FF96A8",
    },
    {
        id: 2,
        color: "#FDB844",
    },
    {
        id: 3,
        color: "#2DD4BF",
    },
    {
        id: 4,
        color: "#547AFF",
    },
    {
        id: 5,
        color: "#AF71FF",
    },
    {
        id: 6,
        color: "#787676",
    },
];

const BG_COLOR = [
    {
        id: 1,
        color: "#FFC5CF",
    },
    {
        id: 2,
        color: "#FFD9A7",
    },
    {
        id: 3,
        color: "#BAF4DD",
    },
    {
        id: 4,
        color: "#B3C4F6",
    },
    {
        id: 5,
        color: "#DBBEFF",
    },
    {
        id: 6,
        color: "#D9D9D9",
    },
];
