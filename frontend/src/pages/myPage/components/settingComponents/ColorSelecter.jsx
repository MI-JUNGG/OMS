import "./ColorSelecter.scss";

function ColorSelecter() {
    return (
        <>
            <div className="colorSelecterContainer">
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
                <div className="colorPreview">colorPreview</div>
            </div>
            <div />
        </>
    );
}

export default ColorSelecter;

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
