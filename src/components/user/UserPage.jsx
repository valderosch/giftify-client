import React from 'react';
import "./UserPage.css";
import Identic from "./author/a-identic/Identic";
import Describer from "./author/b-describer/Describer";
import Actions from "./author/c-actions/Actions";
import UserAbout from "./author/d-about/UserAbout";
import SubsPlans from "./author/e-subscriptions/SubsPlans";
import Activity from "./author/f-activity/Activity";

const UserPage = ({user, role}) => {
    //40 character max;;;
    const userdata = {short_about: "i am a new Tesla!", subs: 20456, posts: [
        user.posts
        ], posts_count: 86, plans: [

        ], long_about: "" +
            "I am a new Tesla who gives this world a hope to be a heaven. Next text" +
            "Will be the Lorem Ipsum so you dont necessary to read it. Lorem ipsum dolor" +
            "Haha - you get cautght! It was a joke. Not the real lorem." +
            "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium" +
            " doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore" +
            " veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim" +
            " ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed " +
            "quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt," +
            " neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, " +
            "consectetur, adipisci velit, sed quia non numquam eius modi tempora " +
            "incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad" +
            " minima veniam, quis nostrum exercitationem ullam corporis suscipit " +
            "laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    }
    const mydata = { subscribed: true, level: "B"}
    return (
        <div className="user-page">
            {role === 'user' ?
                <div className="author-page-content author">
                    fff
                </div>
                :
                <div className="author-page-content user">
                    <Identic user={user}/>
                    <Describer userdata={userdata} mydata={mydata}/>
                    <Actions user={user}/>
                    <UserAbout about={userdata.long_about}/>
                    <SubsPlans/>
                    <Activity/>
                </div>
            }
        </div>
    );
};

export default UserPage;