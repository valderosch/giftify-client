import React, {useState} from 'react';
import "./PaymentBalance.css";

const WithdrawBalance = ({ balance, onClose, onConfirm }) => {
    const [amount, setAmount] = useState(0);
    const [accountNumber, setAccountNumber] = useState("");
    const [error, setError] = useState("");

    const maxAmount = balance - balance * 0.03; // Accounting for fees

    const validateInputs = () => {
        if (amount <= 0 || amount > maxAmount) return `Amount must be between 0 and ${maxAmount.toFixed(2)}.`;
        if (accountNumber.length < 8) return "Enter a valid account number.";
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
                    <div className="popup-title">Withdraw your balance</div>
                    <div className="popup-description">
                        Make a small transaction to your card.<br/>
                        There is only (3%) commission from our side with this operation.
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
                        <label>Account Number</label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            placeholder="Enter account number"
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

export default WithdrawBalance;