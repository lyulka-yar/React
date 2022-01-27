import React from 'react';

import css from "./Modal.module.css"

const Modal = ({link, toggleModal}) => {

    let regexp = /watch\?v=/gm;

    const clearLink = link.replace(regexp, "embed/")


    return (
        <div
            className={css.modal}>
            <div
                className={css.modal__body}>

                <iframe
                    src={clearLink}
                >
                    <source
                        src={clearLink}
                        type={"video/mp4"}
                    />
                    <source
                        src={clearLink}
                        type={"video/ogg"}
                    />
                    <source
                        src={clearLink}
                        type={"video/webm"}
                    />
                    Your browser doesn't support HTML5 video tag.
                </iframe>


                <button
                    onClick={() =>
                        toggleModal(false)}
                >
                    &times;
                </button>
            </div>

        </div>
    );
};

export default Modal;