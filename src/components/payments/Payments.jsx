import React, {useState} from 'react';
import "./Payments.css";
import arrow from "../../assets/icons/ui/ui-arrow.png";
import {formatNumber} from "../../lib/service/formatNumber";

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

const Payments = () => {
    const [message, setMessage] = useState(false);
    const setVisibleMessage = () => setMessage(!message);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visiblePayments = payments.slice(startIndex, endIndex);
    const totalPages = Math.ceil(payments.length / itemsPerPage);

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
                <div className="short-stat"></div>
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
                                         alt="paym"
                                         className="payment-icon"
                                         style={payment.to === 'me' ?
                                             {transform: "rotate(0deg)", borderColor: "#09e017"}
                                             :
                                             {transform: "rotate(180deg)", borderColor: "#EA2626"}
                                    }
                                    />
                                    <div className="payment-amount">$ {formatNumber(payment.amount)}</div>
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
                </div>
            </div>
        </div>
    );
};

export default Payments;