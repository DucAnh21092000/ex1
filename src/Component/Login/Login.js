
import {useEffect, useReducer} from "react";
import {submit, setPassword, setUserName, } from '../../const/const'
import {initialValue,info,reducer} from "../../const/reducer";


function Login(props) {
    const [{username,password},dispatch] = useReducer(reducer,initialValue)



    useEffect( ()=> {

    })
    return (
        <div className={"header"}>
           <div className={"header__body"}>
               <h1>
                   Classy Login Form
               </h1>
               <input type={"text"}
                     className="input border-bottom user-name mt-3 mb-3"
                     placeholder={"User name"}
                     onChange={ e => dispatch(setUserName(e.target.value))}
               />

               <input type={"password"}
                      className="password input border-bottom mt-3 mb-3 "
                      placeholder={"**********"}
                      onChange={(e) => dispatch(setPassword(e.target.value))}
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

               <input onClick={()=> dispatch(submit())} type={"button"} value={"Login"} className={"mt-3 mb-3 submit"}/>
           </div>
        </div>
    );
}

export default Login;