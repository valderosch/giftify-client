import React, {useState} from 'react';
import "./PaymentBalance.css";

const TopUpBalance = ({ balance, onClose, onConfirm }) => {
    const [amount, setAmount] = useState(0);
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [error, setError] = useState("");

    const validateInputs = () => {
        if (amount <= 0) return "Enter a valid amount.";
        if (cardNumber.length !== 16 || isNaN(cardNumber)) return "Enter a valid 16-digit card number.";
        if (!expiryDate.match(/^(0[1-9]|1[0-2])\/(\d{2})$/)) return "Enter a valid expiry date (MM/YY).";
        if (cvv.length !== 3 || isNaN(cvv)) return "Enter a valid 3-digit CVV.";
        return "";
    };

    const handleConfirm = () => {
        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }
        onConfirm(amount);
        onClose();
        alert("Successgull Operation");
    };

    return (
        <div className="balance-popup" onClick={onClose}>
            <div className="popup-content" onClick={event => event.stopPropagation()}>
                <div className="popup-header">
                    <div className="popup-title">Up your balance</div>
                    <div className="popup-description">
                        Make a small transaction to up your balance.<br/>
                        There is no commission from our side with this operation.
                    </div>
                </div>
                <div className="popup-body">
                    <div className="form-group">
                        <label>Amount ($)</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder="Enter amount"
                        />
                    </div>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input
                            type="text"
                            maxLength="16"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="Enter card number"
                        />
                    </div>
                    <div className="form-group">
                        <label>Expiry Date (MM/YY)</label>
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className="form-group">
                        <label>CVV</label>
                        <input
                            type="text"
                            maxLength="3"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="Enter CVV"
                        />
                    </div>
                    {error ?
                        <p className="error">{error}</p>
                        :
                        <p className="error"></p>
                    }
                    <div className="popup-actions">
                        <div onClick={handleConfirm} className="btn">Confirm</div>
                        <div onClick={onClose} className="btn-cancel">Cancel</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopUpBalance;