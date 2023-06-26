import { useDispatch } from "react-redux";
import { deleteCard } from "../../modules/module/modal";
import Trash from "./components/Trash";
import Setting from "./components/Setting";
import Edit from "./components/Edit";

function BtnDropdown() {
    const dispatch = useDispatch();
    const deleteCardHandler = () => {
        dispatch(deleteCard());
    };
    return (
        <div className="btnDropDown">
            <div className="clickIcon">
                <Setting />
                <div onClick={deleteCardHandler}>
                    <Trash />
                </div>
                <Edit />
            </div>
        </div>
    );
}

export default BtnDropdown;
