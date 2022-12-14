import React, { useEffect } from "react";
import classes from "./css/shippingAndPaymentPage.module.css";
import "../../App.css";
import ShippingCard from "../../components/shipping/shipping.js";
import nal1 from "../../media/fa-solid_coins.svg";
import nal2 from "../../media/Group.svg";
import nal3 from "../../media/mastercard-2 1.svg";
import nal4 from "../../media/logo-Elsom-RGB-72 1.svg";
import nal5 from "../../media/logo.c9e36ab1 1.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ups from "../../media/983046 1.svg";
import { Modal, Typography } from "@mui/material";
import smile from "../../media/2341821 1.svg";
import close from "../../media/Cross.svg";
import { useState } from "react";
import classes1 from "../mapBindingPage/mapBinding.module.css";
import ActiveLastBreadcrumb from "../../components/breadCrumbs/breadCrumbs";
import BusketCard from "../../components/BusketCard/BusketCard";
const Shipping = () => {
    const binded = JSON.parse(localStorage.getItem("credit"));
    const [modal, setModal] = useState(false);
    const credit = useSelector((state) => state.credit.credit);
    const [update, setUpdate] = useState(false);
    const [sum, setSum] = useState(0);
    const [busket, setBusket] = useState([]);
    const [total, setTotal] = useState(0);
    const handleDelete = (product) => {
        localStorage.setItem(
            "busket",
            JSON.stringify(
                JSON.parse(localStorage.getItem("busket")).filter(
                    (e) => e.name !== product.name
                )
            )
        );
        setUpdate(!update);
    };

    useEffect(() => {
        setBusket(JSON.parse(localStorage.getItem("busket")));
    }, [update]);

    setTimeout(() => {
        console.log(busket.length);
    }, 100);

    return (
        <div className={classes.shipping}>
            <div className='container'>
                <ActiveLastBreadcrumb />
                <div
                    className={classes.blockInput}
                    style={{ marginTop: "22px" }}
                >
                    <div>
                        <h2 className={classes.blockH2}>???????????????? ?? ????????????</h2>
                        <div>
                            <h3 className={classes.blockH3}>???????????? ????????????????</h3>
                            <form className={classes.blockInputs}>
                                <label>
                                    <input type='radio' name='age' />
                                    <p className={classes.blockP}>??????????????????</p>
                                </label>
                                <label>
                                    <input type='radio' name='age' />
                                    <p className={classes.blockP}>
                                        ???????????????? ????????????????
                                    </p>
                                </label>
                            </form>
                            <form className={classes.forma}>
                                <h3 className={classes.blockH3}>
                                    ???????????? ????????????
                                </h3>
                                <div className={classes.formInput}>
                                    <div>
                                        <label>??????*</label>
                                        <input
                                            type='text'
                                            placeholder='??????'
                                            className={classes.formaInput}
                                        />
                                    </div>
                                    <div>
                                        <label>??????????????*</label>
                                        <input
                                            type='text'
                                            placeholder='??????????????'
                                            className={classes.formaInput}
                                        />
                                    </div>
                                </div>
                                <div className={classes.formaDiv}>
                                    <label>???????????????????? ??????????????*</label>
                                    <input
                                        autoComplete='tel'
                                        type='tel'
                                        placeholder='+996'
                                        className={classes.formaInput}
                                    />
                                </div>
                                <div className={classes.formaDiv}>
                                    <label>?????????????????????? ??????????</label>
                                    <input
                                        type='email'
                                        placeholder='example@mail.com'
                                        className={classes.formaInputs}
                                    />
                                </div>
                                <div className={classes.formaDiv}>
                                    <label>?????????? ????????????????</label>
                                    <input
                                        autoComplete='address'
                                        type='email'
                                        placeholder='??????????, ?????????? ????????, ?????????? ????????????????'
                                        className={classes.formaInputs}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={classes.block2}>
                        <h3>???????????? ????????????</h3>
                        <div className={classes.products}>
                            {busket !== null ? (
                                busket.length === 0 ? (
                                    <div>
                                        <p>
                                            ?????????? ???????? ???????????? ??????,
                                            <NavLink
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                                to='/categories'
                                            >
                                                <Typography component={"span"}>
                                                    ???? ???? ???????????? ?????? ??????????????????
                                                    ;)
                                                </Typography>
                                            </NavLink>
                                        </p>
                                    </div>
                                ) : (
                                    busket.map((item, i) => (
                                        <li key={i}>
                                            <BusketCard
                                                product={item}
                                                inBusket={true}
                                                handleDelete={handleDelete}
                                            />
                                        </li>
                                    ))
                                )
                            ) : (
                                <div>
                                    <p>?????????? ???????? ???????????? ??????,</p>
                                    <NavLink to='/categories'>
                                        ???? ???? ???????????? ?????? ??????????????????
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <hr
                            style={{
                                border: "0.5px solid #D2D1D7",
                                marginTop: "30px",
                            }}
                        />
                        <div className={classes.price}>
                            <h3>??????????:</h3>
                            <p>{total}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.block3}>
                    <h3 className={classes.blockH3}>???????????? ????????????</h3>
                    <div className={classes.block3Display}>
                        <ShippingCard
                            props={{
                                image: nal1,
                                title: "??????????????????",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal2,
                                title: "???????????? VISA",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal3,
                                title: "Mastercard",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal4,
                                title: "??????????",
                            }}
                        />
                        <ShippingCard
                            props={{
                                image: nal5,
                                title: "Balance KG",
                            }}
                        />
                    </div>
                    <div className={classes.block3Btns}>
                        <button
                            className={classes.block3Btn}
                            onClick={() => setModal(true)}
                        >
                            <Link
                                to={
                                    credit !== "??????????????????" &&
                                    !binded &&
                                    "/binding"
                                }
                            >
                                {credit === "??????????????????"
                                    ? "????????????????"
                                    : "????????????????"}
                            </Link>
                        </button>
                        <Modal
                            open={modal}
                            onClose={() => {
                                setModal(false);
                            }}
                        >
                            <div className={classes1.modal1}>
                                <img
                                    src={close}
                                    alt=''
                                    className={classes1.modalImgClose}
                                    onClick={() => {
                                        setModal(false);
                                    }}
                                />
                                <img src={smile} alt='' />
                                <h2>??????????????!</h2>
                                <p>
                                    {credit === "??????????????????"
                                        ? "?????? ?????????? ????????????. ???????????????? ??????????????"
                                        : "???????????? ???????????? ??????????????!"}
                                </p>
                                <Link to={"/"}>
                                    <button className='btn'>????????????????????</button>
                                </Link>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Shipping;
