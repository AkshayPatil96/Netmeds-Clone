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

export { NextBtn, PreviousBtn };

// data for carousel

export const data = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1651498134_sdvbnm.jpg",

    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1651338093_Web_Home89.jpg",

    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1651498383_asdasdas.jpg",
];

export const multiData = [
    {
        id: 1,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/113742/revital_h_capsule_10_s_0.jpg",
        title: "Revital H Capsule 10'S",
        seller: "Mkt: Sun Pharmaceutical Industries Ltd",
        salePrice: 93.5,
        // strikeOfPrice: 110.0,
    },
    {
        id: 2,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/407923/revital_h_woman_tablet_30_s_0.jpg",
        title: "Revital H Woman Tablet 30'S",
        seller: "Mkt: Sun Pharmaceutical Industries Ltd",
        salePrice: 293.25,
        strikeOfPrice: 345.0,
    },
    {
        id: 3,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/113653/revital_h_capsule_60_s_0.jpg",
        title: "Revital H Capsule 60'S",
        seller: "Mkt: Sun Pharmaceutical Industries Ltd",
        salePrice: 467.5,
        strikeOfPrice: 550.0,
    },
    {
        id: 4,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/15114/dettol_antiseptic_liquid_60_ml_0_1.jpg",
        title: "Dettol Antiseptic Liquid 60 ml",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 33.27,
        strikeOfPrice: 50.0,
    },
    {
        id: 5,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/328123/revital_h_capsule_30_s_0.jpg",
        title: "Revital H Capsule 30'S",
        seller: "Mkt: Sun Pharmaceutical Industries Ltd",
        salePrice: 263.5,
        strikeOfPrice: 310.0,
    },
    {
        id: 6,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/835057/dettol_antiseptic_liquid_550_ml_0.jpg",
        title: "Dettol Antiseptic Liquid 550 ml",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 194.6,
        strikeOfPrice: 220.0,
    },
    {
        id: 7,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/102099/dettol_antiseptic_liquid_1_ltr_0_1.jpg",
        title: "Dettol Antiseptic Liquid 1 ltr",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 331.41,
        strikeOfPrice: 380.0,
    },
    {
        id: 8,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/408222/revital_h_woman_tablet_10_s_0.jpg",
        title: "Revital H Woman Tablet 10'S",
        seller: "Mkt: Sun Pharmaceutical Industries Ltd",
        salePrice: 102.0,
        strikeOfPrice: 120.0,
    },
    {
        id: 9,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/38049/garlic_pearls_capsule_100_s_0.jpg",
        title: "Garlic Pearls Capsule 100'S",
        seller: "Mkt: Sun Pharmaceutical Industries Ltd",
        salePrice: 127.5,
        strikeOfPrice: 150.0,
    },
    {
        id: 10,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/886988/dettol_antiseptic_liquid_disinfectant_250_ml_0_1.jpg",
        title: "Dettol Antiseptic Liquid Disinfectant 250 ml",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 116.16,
        strikeOfPrice: 150.0,
    },
    {
        id: 11,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/839437/fast_up_charge_natural_vitamin_c_tablets_orange_flavour_20_s_0.jpg",
        title: "Fast&Up Charge Natural Vitamin C & Zinc Tablets - Orange Flavour 20's",
        seller: "Mkt: Aeronutrix Sports Products Private Limited",
        salePrice: 300.3,
        strikeOfPrice: 390.0,
    },
    {
        id: 12,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/15116/dettol_disinfectant_lime_fresh_500_ml_0_1.jpg",
        title: "Dettol Disinfectant - Lime Fresh 500 ml",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 173.7,
        strikeOfPrice: 193.0,
    },
    {
        id: 13,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/412802/dettol_disinfectant_liquid_menthol_cool_500_ml_0.jpg",
        title: "Dettol Disinfectant Liquid - Menthol Cool 500 ml",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 173.7,
        strikeOfPrice: 193.0,
    },
    {
        id: 14,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/15129/dettol_hand_sanitizer_original_50_ml_0.jpg",
        title: "Dettol Instant Hand Sanitizer - Original 50 ml",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 25.0,
        strikeOfPrice: 50.0,
    },
    {
        id: 15,
        imageUrl:
            "https://www.netmeds.com/images/product-v1/150x150/15115/dettol_disinfectant_lime_fresh_200_ml_0_1.jpg",
        title: "Dettol Disinfectant - Lime Fresh 200 ml",
        seller: "Mkt: Reckitt Benckiser India Ltd",
        salePrice: 93.1,
        strikeOfPrice: 98.0,
    },
];
