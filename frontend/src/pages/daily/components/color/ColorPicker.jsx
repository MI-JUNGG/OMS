import "./colorCss/ColorPicker.scss";

function ColorPicker() {
    return (
        <div>
            {Object.keys(colors).map((key) => (
                <div key={key}>
                    <h3>{key}</h3>
                    <div className="colorRow">
                        {colors[key].map((color, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: color,
                                    width: "30px",
                                    height: "30px",
                                    margin: "5px",
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ColorPicker;
const colors = {
    vivid: [
        "#EF4444",
        "#FF6800",
        "#FACC15",
        "#16A34A",
        "#3582FF",
        "#9038FF",
        "#58595B",
    ],
    bright: [
        "#FE7B91",
        "#FF9246",
        "#FDE047",
        "#4ADE80",
        "#6AA0F8",
        "#AF71FF",
        "#7E7E80",
    ],
    soft: [
        "#FCA5A5",
        "#FDBA74",
        "#FFE76A",
        "#86EFAC",
        "#A7C8FF",
        "#D9BBFF",
        "#BBBBBB",
    ],
    reddish: [
        "#FF41A4",
        "#FF6666",
        "#FF9090",
        "#FF9ED3",
        "#F692FF",
        "#FF71D7",
        "#DF79F9",
    ],
    pale: [
        "#818CF8",
        "#3B95FE",
        "#38BDF8",
        "#7DD3FC",
        "#66E6F6",
        "#4FE4CD",
        "#B7EA5E",
    ],
    custom: [
        "#818CF8",
        "#3B95FE",
        "#38BDF8",
        "#7DD3FC",
        "#66E6F6",
        "#4FE4CD",
        "#B7EA5E",
    ],
};
