import React, {useState} from 'react';
import "./RepportElement.css";

const ReportElement = () => {
    const [otherVisibility, setOtherVisibility] = useState(false);

    const handleOther = () => {
        setOtherVisibility(!otherVisibility);
    }
    return (
        <div className="report-popup">
            <div className="r-popup-body">
                <div className="popup-title">Report</div>
                <div className="report-reason-variant">
                    <input
                        type="radio"
                        className="variant"
                        name="report-reason"
                        value="rrr1"
                        onChange={handleOther}
                    />
                    <input
                        type="radio"
                        className="variant"
                        name="report-reason"
                        value="rrr2"
                        onChange={handleOther}
                    />
                    <input
                        type="radio"
                        className="variant"
                        name="report-reason"
                        value="rrr3"
                        onChange={handleOther}
                    />
                    <input
                        type="radio"
                        className="variant"
                        name="report-reason"
                        value="rrr4"
                        onChange={handleOther}
                    />
                    <input
                        type="radio"
                        className="variant"
                        name="report-reason"
                        value="other"
                        onChange={handleOther}
                    />
                </div>
                <div className="other-reason-input">
                    {otherVisibility && (
                        <textarea className="other-reason-input"></textarea>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReportElement;