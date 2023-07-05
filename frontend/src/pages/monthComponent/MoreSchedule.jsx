import "./MoreSchedule.scss";

function MoreSchedule(props) {
    const date = `${props.yearForm} . ${props.monthForm} . ${props.currentDate}`;
    return (
        <>
            <div className="scheduleContainer">
                <div className="scheduleBoxTop">
                    <div className="scheduleDate">{date}</div>
                </div>
                <div className="scheduleContents"> dkdk</div>
            </div>
            <div />
        </>
    );
}

export default MoreSchedule;
