import React from 'react';
import "./Homepage.css";
import Post from "./feed/post/Post";
import bitIcon from "../../assets/logos/bit4.png";
import avatar3 from "../../assets/icons/mock/avatar3.jpg";
import avatar4 from "../../assets/icons/mock/avatar4.png";
import avatar2 from "../../assets/icons/mock/avatar2.png";
import avatar1 from "../../assets/icons/mock/avatar1.png";
import mockImg from "../../assets/icons/mock/mock-img2.jpg";
import mockImg2 from "../../assets/icons/mock/mock-img1.png";
import DonationGoal from "./feed/donation/DonationGoal";
import RecommendationBlock from "./feed/recomendation/RecomendationBlock";
import ReportElement from "../service/popups/report/ReportElement";
import {formatNumber} from "../../lib/service/formatNumber";




const Homepage = ({user}) => {
    const posts = [
        {
            type: "post",
            data: {
                image: mockImg,
                author_name: "astridensen",
                author_image: avatar1,
                title: "Created a new page on React!",
                date: "10 Dec.",
                tier: "C",
                description: "I'm excited to share my new React project with you all! It's a simple todo list app, but I'm proud of how it turned out.",
                likes: 4,
                comments: 0
            }
        },
        {
            type: "donation",
            data: {
                image: mockImg2,
                author_name: "krasmussen07",
                author_image: avatar2,
                title: "Fund for Rassbery PI5",
                date: "10 Dec.",
                tier: "C",
                description: "My team and I are working on a project to create a low-cost, open-source computer using the Rassbery PI5. We need your help to make it happen!",
                goalAmount: 1000,
                currentAmount: 500
            }
        },
        {
            type: "post",
            data: {
                image: mockImg,
                author_name: "muller",
                author_image: avatar1,
                title: "Collected needed amount!",
                date: "10 Dec.",
                tier: "C",
                description: "I'm thrilled to announce that we've reached our funding goal for our new project! Thank you to everyone who contributed.",
                likes: 2,
                comments: 1
            }
        },
        {
            type: "post",
            data: {
                image: mockImg2,
                author_name: "blackwood",
                author_image: avatar4,
                title: "Making new WEB site!",
                date: "10 Dec.",
                tier: "C",
                description: "I'm working on a new website for my business and I'm excited to share my progress with you all. Stay tuned for updates!",
                likes: 1,
                comments: 0
            }
        },
        {
            type: "donation",
            data: {
                image: "",
                author_name: "sage",
                author_image: avatar3,
                title: "Collecting money for studio recording",
                date: "10 Dec.",
                tier: "C",
                description: "Just because we can! Studio located in Seatle. Audience price is 400$ per once",
                goalAmount: 800,
                currentAmount: 200
            }
        },
        {
            type: "post",
            data: {
                image: mockImg2,
                author_name: "laurent",
                author_image: avatar4,
                title: "We have good news!",
                date: "10 Dec.",
                tier: "C",
                description: "Our team finished working on new server machine so everyone can use it.",
                likes: 5,
                comments: 2
            }
        },
        {
            type: "post",
            data: {
                image: mockImg2,
                author_name: "iwilder40",
                author_image: avatar2,
                title: "Completed scriptiong!",
                date: "10 Dec.",
                tier: "C",
                description: "I'm thrilled to announce that I've completed my new project! It's a simple script that automates a task, but I'm proud of how it turned out.",
                likes: 12,
                comments: 4
            }
        }
    ];
    const authors = [
        // {avatar: avatar3, name: "rick004", notification: 4},
        // {avatar: avatar4, name: "piper", notification: 10},
        // {avatar: avatar2, name: "pewpew", notification: 2},
        // {avatar: avatar1, name: "erico", notification: 100 }
    ];
    const balance = {currency: 1650.5, subscriptions: 105, buyed: 335, support:150};

    //const posts = posts 10+++ = autoload;
    return (
        <div className="homepage">
            <div className="content">
                <div className="featured-block">
                    <div className="f-frame">
                        <div className="f-title">
                            Featured authors
                        </div>
                        {authors.map((author, index) => (
                            <div key={index} className="f-author-block">
                                <img className="f-avatar" src={author.avatar} alt="auth" />
                                <div className="f-name">{author.name}</div>
                                <div className="f-alert">
                                    + {author.notification > 99 ?
                                "99" : author.notification
                                }</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="feed">
                    <div className="feed-banner">
                        Community Activity
                    </div>
                    {posts.map((post, index) => {
                        // if (index >= 5 && (index - 5) % 11 === 0) {
                        //     return (
                        //         <div key={`recommendation-${index}`} className="recommendation-block">
                        //             <RecommendationBlock />
                        //         </div>
                        //     );
                        // }
                        if (post.type === "donation") {
                            return (
                                <DonationGoal
                                    key={index}
                                    image={post.data.image}
                                    title={post.data.title}
                                    date={post.data.date}
                                    author={post.data.author_name}
                                    authorimg={post.data.author_image}
                                    description={post.data.description}
                                    goalAmount={post.data.goalAmount}
                                    currentAmount={post.data.currentAmount}
                                />
                            );
                        } else {
                            return (
                                <Post
                                    key={index}
                                    image={post.data.image}
                                    title={post.data.title}
                                    date={post.data.date}
                                    author={post.data.author_name}
                                    authorimg={post.data.author_image}
                                    description={post.data.description}
                                    likes={post.data.likes}
                                    comments={post.data.comments}
                                />
                            );
                        }
                    })}
                    {posts.length >= 10 ? (
                        <div className="feed-footer">Load More</div>
                    ) : (
                        <div className="feed-footer">
                            Seems like that`s all posts for you 😄
                        </div>
                    )}
                    {posts.length === 0 && (
                        <RecommendationBlock/>
                    )}
                </div>
                <div className="balance">
                    <div className="balance-monitor">
                        <div className="balance-frame">
                            <div className="b-title">Balance</div>
                            <div className="b-balance-block">
                                <div className="balance-value">
                                    {user.balance.length > 6 ?
                                        formatNumber(user.balance)
                                        :
                                        user.balance
                                    }
                                </div>
                                <img className="currency" src={bitIcon} alt="bit"/>
                            </div>
                            <div className="b-stats-block">
                                <div className="stat-item">
                                    <div className="stat-title">SUBSCRIPTIONS</div>
                                    <div className="stat-value">{balance.subscriptions} / month</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-title">PURHSACHED</div>
                                    <div className="stat-value">{balance.buyed} posts</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-title">AUTHOR SUPPORT</div>
                                    <div className="stat-value">{balance.support} bits spend</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="balance-story">
                        <div className="story-frame">
                            <div className="pending-frame">
                                <div className="pending-title"></div>
                                <div className="pending-expences-block"></div>
                            </div>
                            <div className="story-frame">
                                <div className="story-title"></div>
                                <div className="story-block"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;