import './App.css';
import Header from "./service/header/Header";
import Navigator from "./service/navigator/Navigator";
import Login from "./identity/login/Login";
import Registration from "./identity/registration/Registration";
import Homepage from "./home/Homepage";
import {Navigate, Route, Routes} from "react-router";
import Chats from "./chats/Chats";
import Notification from "./notification/Notification";
import Search from "./search/Search";
import avatar from "../assets/icons/mock/avatar1.png";
import CreatePost from "./create-post/CreatePost";
import UserPage from "./user/UserPage";
import Recover from "./identity/recover/Recover";

function App() {
    const user = {username: "my_own_name885", avatar: avatar, roles: ['user', 'author'], balance: 1560}
    const userRole = user.roles.includes('author') ? 'author' : 'user';
    const isLoggedIn = true;
  return (
    <div className="App">
        {isLoggedIn && <Header user = {user} userRole = {userRole}/>}
        {isLoggedIn && <Navigator/>}
        { isLoggedIn &&
            <div className="app-content">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/search" element={<Search/>} />
                    <Route path="/create" element={<CreatePost role={userRole}/>}/>
                    <Route path="/notifications" element={<Notification/>} />
                    <Route path="/chats" element={<Chats/>} />
                    <Route path={`/user/${user.username}`} element={<UserPage user={user} role = {userRole}/>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        }
        {/*{isLoggedIn && <Footer/>}*/}
        {!isLoggedIn &&
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Registration/>} />
                <Route path="/recover/*" element={<Recover />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        }
    </div>
  );
}

export default App;
