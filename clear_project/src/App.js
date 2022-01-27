import {useState} from "react";

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {

    const [userPostsId, setUserPostsId] = useState(null);
    const [status, setStatus] = useState(null);

    return (
        <div className="App">
            <div>
                <Users
                    setUserPostsId={setUserPostsId}
                    changeStatus={setStatus}
                 />
            </div>

            {
                status && <Posts id={userPostsId}/>
            }
        </div>
    );
}

export default App;
