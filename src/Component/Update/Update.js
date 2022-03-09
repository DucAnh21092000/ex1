import {useReducer} from "react";
import React from 'react';
import {update, setNewPassword, setUserName, setPassword,} from '../../const/const'
import {initialValue,info,reducer} from "../../const/reducer";
function Update(props) {
    const [{username,password},dispatch] = useReducer(reducer,initialValue)
    return (
        <div className={"header"}>
            <div className={"header__body"}>
                <h1>
                    Classy Update Form
                </h1>
                <input type={"text"}
                       className="input border-bottom user-name mt-3 mb-3"
                       placeholder={"User name"}
                       onChange={ e => dispatch(setUserName(e.target.value))}
                />

                <input type={"password"}
                       className="password input border-bottom mt-3 mb-3 "
                       placeholder={"Enter your password"}
                       onChange={(e) => dispatch(setPassword(e.target.value))}
                />
                <input type={"password"}
                       className="password input border-bottom mt-3 mb-3 "
                       placeholder={"Enter new password"}
                       onChange={(e) => dispatch(setNewPassword(e.target.value))}
                />
                <div className={"d-flex w-100"}>
                    <div className={"d-flex  align-items-center justify-content-start w-50"}>
                        <input type={"checkbox"} className="mr-2" />
                        <div className={"text-light"}>Remember me</div>
                    </div>
                    <div className={"d-flex justify-content-end w-50"}>
                        <a href={'/forget'}> Forgot Password? </a>
                    </div>
                </div>

                <input onClick={()=> dispatch(update())} type={"button"} value={"Update"} className={"mt-3 mb-3 submit"}/>
                <div className={"text-center"}>
                    <a href={"/login"} className={"text-primary"}> Have account? Click here!</a>
                </div>
            </div>
        </div>
    );
}

export default Update;