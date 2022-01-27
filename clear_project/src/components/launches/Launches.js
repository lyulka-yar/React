import React, {useEffect, useState} from 'react';

import {getLaunches} from "../../services/service";
import Launch from "../launch/Launch";
import css from "./Launches.module.css";
import Modal from "../modal/Modal";

const Launches = () => {
    let [showModal, setShowModal] = useState(false);
    let [videoLink, setVideoLink] = useState("");

    const toggleModal = (status) => {
        setShowModal(status);
    }

    const getUrl = (link) => {
        setVideoLink(link);
    }

    let [launches, setLaunches] = useState([]);
    useEffect(() => {
        getLaunches.getAll().then(response => setLaunches(response.filter(launch => launch.launch_year !== "2020")))
    }, [])

    return (
        <>
            <div className={css.cardsBlock}>
                {
                    launches.map((elem, index) =>
                        <Launch
                            key={index + 1}
                            launch={elem}
                            toggleModal={toggleModal}
                            getLink={getUrl}
                        />)
                }
            </div>
            {
                showModal && <Modal
                    link={videoLink}
                    toggleModal={toggleModal}
                />
            }
        </>
    );
};

export default Launches;