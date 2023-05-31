import "./Setting.scss";
import Buttons from "./settingComponents/Btn";
import ColorSelecter from "./settingComponents/ColorSelecter";
import TextSelector from "./settingComponents/TextSelector";

function Setting() {
    return (
        <>
            <div className="settingContainer">
                <div className="settingContents">
                    <Buttons />
                    <ColorSelecter />
                    <TextSelector />
                </div>
            </div>
        </>
    );
}

export default Setting;
