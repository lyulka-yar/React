import Cars from "./components/cars/Cars";
import Form from "./components/Form";
import {useState} from "react";

function App() {

    const [status, setStatus] = useState({});
    console.log(status);
    const styles = {
        margin: "0 auto",
        width: "90vw"
    }

    return (
        <div style={styles}>
            <Form toggleStatus={setStatus}/>
            <Cars
                status={status}
            />

        </div>
    );
}

export default App;
