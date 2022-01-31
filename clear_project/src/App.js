import React, {useState} from 'react';

import {Cars} from "./components/cars/Cars";
import {Form} from "./components/Form/Form";
import "./main.css";

const App = () => {

    const [status, setStatus] = useState(null);
    const [car, setCar] = useState({});

    return (
        <div className={"container"}>
            <Form
                carForWatch={car}
                toggleStatus={setStatus}
                setCar={setCar}
            />
            <Cars
                status={status}
                toggleStatus={setStatus}
                setCar={setCar}
            />
        </div>
    );
};

export default App;