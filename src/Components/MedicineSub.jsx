import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3%;

    .smallFlex {
        display: flex;
        align-items: center;
        /* border: 1px solid; */
    }

    .logo {
        /* margin: 1%; */
        padding: 2%;
    }

    .btnFlex {
        display: flex;
        /* border: 1px solid; */
        width: 25%;
        justify-content: space-between;
        align-items: center;
    }

    .starting {
      color: #f6425b;
      font-size: 18px;
    }

    .btn {
        padding: 0 5%;
        width: 150px;
        height: 40px;
        font-size: 18px;
        background-color: #24aeb1;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const MedicineSub = () => {
    return (
        <FlexBox>
            <div className="smallFlex">
                <img
                    className="logo"
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg"
                    alt=""
                />
                <div>
                    <h4>Get medicine refill every month</h4>
                    <ul>
                        <li>Subscribe and schedule next deliveries</li>
                        <li>
                            Subscribe for 12 months and get the last month free.
                            *T&C Apply
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <button className="btn">Subscribe</button>
            </div>
        </FlexBox>
    );
};

const ExplorePlan = () => {
    return (
        <FlexBox>
            <div className="smallFlex">
                <img
                    className="logo"
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/netmeds_first_membership.svg"
                    alt=""
                />
                <div>
                    <h4>Netmeds First Membership</h4>
                    <ul>
                        <li>
                            Get special discounts and offers on Netmeds
                            services.
                        </li>
                        <li>Get 2.5% NMS Cash on all orders.</li>
                    </ul>
                </div>
            </div>
            <div className="btnFlex">
                <h4 className="starting">Starting at ₹299</h4>
                <button className="btn">Explore Plan</button>
            </div>
        </FlexBox>
    );
};

export { ExplorePlan, MedicineSub };
