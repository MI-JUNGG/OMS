import { useDispatch, useSelector } from "react-redux";
import { view } from "../../../modules/module/viewSelector";
import { Link } from "react-router-dom";
import "./ViewSwitcher.scss";

function ViewSwitcher() {
    const form = useSelector((state) => state.viewReducer);
    const dispatch = useDispatch();

    const changeView = (value) => {
        dispatch(view(value));
    };

    return (
        <>
            <div className="viewContainer">
                {form.view.map((value, i) => {
                    return (
                        <div
                            className={
                                value === form.select ? "viewSelect" : value
                            }
                            key={i}
                            onClick={() => changeView(value)}
                        >
                            <Link
                                to={form.element[i]}
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <div>{value}</div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ViewSwitcher;

// <div className="monthView">
//                     <Link to="/"> Month</Link>
//                 </div>
//                 <div className="weekView">
//                     <Link to="/weekly"> Week</Link>
//                 </div>
//                 <div className="dayView">
//                     <Link to="/daliy">Day</Link>
//                 </div>
