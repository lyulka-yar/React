import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

import css from './App.module.css';

function App() {

    return (
        <div>
            <div className={css.wrap}>

                <Users/>
                <Posts/>

            </div>

            <Comments/>
        </div>

)}

export default App;
