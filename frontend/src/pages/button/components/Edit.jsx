import { useDispatch } from "react-redux";
import { cardmodal } from "../../../modules/module/modal.js";

function Edit() {
    const dispatch = useDispatch();
    const modalhandler = () => {
        dispatch(cardmodal());
    };
    return (
        <div onClick={modalhandler}>
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.6665 5.33333H5.33317C4.62593 5.33333 3.94765 5.61428 3.44755 6.11438C2.94746 6.61447 2.6665 7.29275 2.6665 7.99999V26.6667C2.6665 27.3739 2.94746 28.0522 3.44755 28.5523C3.94765 29.0524 4.62593 29.3333 5.33317 29.3333H23.9998C24.7071 29.3333 25.3854 29.0524 25.8855 28.5523C26.3856 28.0522 26.6665 27.3739 26.6665 26.6667V17.3333"
                    stroke="#ABAEB5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M24.6665 3.33334C25.1969 2.80291 25.9164 2.50491 26.6665 2.50491C27.4166 2.50491 28.1361 2.80291 28.6665 3.33334C29.1969 3.86377 29.4949 4.58319 29.4949 5.33334C29.4949 6.08349 29.1969 6.80291 28.6665 7.33334L15.9998 20L10.6665 21.3333L11.9998 16L24.6665 3.33334Z"
                    stroke="#ABAEB5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

export default Edit;
