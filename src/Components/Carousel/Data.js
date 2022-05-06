import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./carousel.module.css";

// Previous Button for carousel

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.left}`} onClick={onClick}>
            <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ color: "#969696", fontSize: "40px" }}
            />
        </div>
    );
};

// Next Button for carousel

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.right}`} onClick={onClick}>
            <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#969696", fontSize: "40px" }}
            />
        </div>
    );
};

const origPrevBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} ${styles.smallLeft}`}
            onClick={onClick}
            style={{ border: "none" }}
        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ color: "#555", fontSize: "20px" }}
            />
        </div>
    );
};

// Next Button for carousel

const origNextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.smallRight}`} onClick={onClick}>
            <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#555", fontSize: "20px" }}
            />
        </div>
    );
};

export { NextBtn, PreviousBtn, origNextBtn, origPrevBtn };

// data for carousel

export const data = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1651498134_sdvbnm.jpg",

    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1651338093_Web_Home89.jpg",

    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1651498383_asdasdas.jpg",
];
