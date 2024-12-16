import React, {useEffect, useState} from 'react';
import "./Payments.css";
import arrow from "../../assets/icons/ui/ui-arrow.png";
import {formatNumber} from "../../lib/service/formatNumber";
import {getUserBalance, topUpBalance, withdrawBalance} from "../../api/payment";
import TopUpBalance from "../service/popups/payments/TopUpBalance";
import WithdrawBalance from "../service/popups/payments/WithdrawBalance";

const payments = [
    {date: "2024-07-24", type: "Subscription", from: "me", to: "user28252", amount: "50",
        message: "From a simple support"},
    {date: "2024-07-24", type: "Subscription",from: "system", to: "me", amount: "750",
        message: ""},
    {date: "2024-07-26", type: "Goal", from: "me", to: "user28252", amount: "10",
        message: "Fromst a simple support"},
    {date: "2024-07-28", type: "Donation",from: "me", to: "programmer43", amount: "5",
        message: "From me to you. Just a simple support"},
    {date: "2024-07-30", type: "Goal", from: "me", to: "user_444", amount: "7",
        message: "From me to you. Just a simple support"},
]

const Payments = ({user, setUser}) => {
    const [message, setMessage] = useState(false);
    const setVisibleMessage = () => setMessage(!message);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const [balance, setBalance] = useState(0);
    const [showTopUpPopup, setShowTopUpPopup] = useState(false);
    const [showWithdrawPopup, setShowWithdrawPopup] = useState(false);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visiblePayments = payments.slice(startIndex, endIndex);
    const totalPages = Math.ceil(payments.length / itemsPerPage);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const localBalance = localStorage.getItem('balance');
                if (localBalance) {
                    setBalance(JSON.parse(localBalance));
                } else {
                    const userBalance = await getUserBalance(user.id);
                    setBalance(userBalance);
                    localStorage.setItem('balance', JSON.stringify(userBalance));
                }
            } catch (error) {
                console.error("Error fetching user balance:", error);
            }
        };

        fetchBalance();
    }, [user.id]);

    const handleTransaction = async (type, amount) => {
        try {
            let updatedBalance;
            if (type === "topUp") {
                updatedBalance = await topUpBalance(user.id, amount);
            } else if (type === "withdraw") {
                updatedBalance = await withdrawBalance(user.id, amount);
            }
            setBalance(updatedBalance);
            setUser(prev => {
                const updatedUser = { ...prev, balance: updatedBalance };
                localStorage.setItem("user", JSON.stringify(updatedUser));
                return updatedUser;
            });
            localStorage.setItem("balance", JSON.stringify(updatedBalance));
        } catch (error) {
            console.error(`Error during ${type} transaction:`, error);
        }
    };


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="payments">
            <div className="aside">
                <div className="balance-control">
                    <div className="element-value">
                        Balance: <p className='value'>
                        {balance.length > 6 ?
                            formatNumber(balance)
                            :
                            balance
                        } $</p>
                    </div>
                    <div className="balance-controls">
                        <div className="b-controls-title">Manage balance</div>
                        <div className="b-controls-description">
                            Feed up your balance or make a withdrawal
                        </div>
                        <div className="b-control-block">
                            <div
                                className="top-up-btn"
                                onClick={() => setShowTopUpPopup(true)}
                            >
                                Top-up
                            </div>
                            <div
                                className="withdraw-btn"
                                onClick={() => setShowWithdrawPopup(true)}
                            >
                                Withdraw
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter"></div>
            </div>
            <div className="main-content">
                <div className="payment-body">
                    <div className="payment-title">Payments</div>
                    <div className="payments-block">
                        {visiblePayments.map((payment, index) => (
                            <div className="payment"
                                 // style={{borderColor: payment.to === 'me'? '#1DEC3F' : '#EA2626'}}
                            >
                                <div className="message-body">
                                    <img src={arrow}
                                         alt="payment"
                                         className="payment-icon"
                                         style={payment.to === 'me' ?
                                             {transform: "rotate(0deg)", borderColor: "#09e017"}
                                             :
                                             {transform: "rotate(180deg)", borderColor: "#EA2626"}
                                    }
                                    />
                                    <div className="payment-amount">$
                                        {payment.amount}
                                    </div>
                                    <div className="payment-info">
                                        <div className="payment-type">{payment.type}</div>
                                        <div className="payment-to">{payment.from} ➡ {payment.to}</div>
                                        <div className="sub-body">{payment.message ? '( ' + payment.message.substring(0,25)+'... )' : ''}</div>
                                    </div>
                                    <div className="payment-date">{payment.date}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <div
                            className="prev-button"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            {'<'}
                        </div>
                        <span className="pagination-info">
                            {currentPage} of {totalPages}
                            </span>
                        <div
                            className="next-button"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            {'>'}
                        </div>
                    </div>
                    {showTopUpPopup && (
                        <TopUpBalance
                            balance={balance}
                            onClose={() => setShowTopUpPopup(false)}
                            onConfirm={(amount) => handleTransaction("topUp", amount)}
                        />
                    )}
                    {showWithdrawPopup && (
                        <WithdrawBalance
                            balance={balance}
                            onClose={() => setShowWithdrawPopup(false)}
                            onConfirm={(amount) => handleTransaction("withdraw", amount)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Payments;