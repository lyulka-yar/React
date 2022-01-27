import React from 'react';

import css from "./Launch.module.css";

const Launch = ({launch:{mission_name,launch_year, links:{mission_patch_small:launch_image, video_link}},toggleModal, getLink}) => {


    return (
            <div className={css.cardsBlock__card}>
                <img src={launch_image} alt={"launch_img"}/>
                <p>mission: {mission_name}</p>
                <p>year: {launch_year}</p>
                <button onClick={()=> {
                    toggleModal(true);
                    getLink(video_link)
                }}>show video</button>
            </div>
    );
};

export default Launch;