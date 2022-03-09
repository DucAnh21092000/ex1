import {CHANGE_NEW_PASSWORD, CHANGE_PASSWORD, CHANGE_USER_NAME, CREATE, FORGET, LOGIN, UPDATE} from "./const";
const url = 'http://localhost:3000/users'
export const info = [
    {
        username:"Đức Anh",
        password:"1234567",
    },
    {
        username:"Đức Anh 2",
        password:"12345678",
    }
]

export const initialValue = {
    username:"",
    password:"",
    info: [...info],
    newPassword:""
}

export const reducer = (state,action) =>{
    switch (action.type){
        case CHANGE_USER_NAME:
            return {
                ...state,
                username: action.payload
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_NEW_PASSWORD:
            return {
                ...state,
                newPassword: action.payload
            }
        case LOGIN:
            let username = state.username;
            let password = state.password;
            let info     = state.info;
            fetch(url)
                .then(data => data.json())
                .then( data => {

                    let rs = data.some(
                        (arr)=> arr.username == username && arr.password == password )
                    if(rs){
                        alert('Đăng nhập thành công!')
                    }
                    else{
                        alert('Đăng nhập thất bại!')
                    }
                })
            return state
        case UPDATE:
                fetch(url)
                    .then(data => data.json())
                    .then( data => {
                        let rs = data.some(
                            (arr)=> arr.username == state.username && arr.password == state.password  )
                        let id;
                        data.forEach( (arr,index) => {
                            if( arr.username == state.username && arr.password == state.password){
                                id=arr.id
                            }
                        })
                        console.log(id)
                        if(!rs){
                            alert('Tài khoản không tồn tại!')
                            return null
                        }
                        else{
                            const data = {
                                username: state.username,
                                password: state.newPassword
                            };

                            fetch(url + '/'+ id , {
                                method: 'PUT', // or 'PUT'
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            })
                                .then(response => response.json())
                                .then(data => {
                                    alert('Cập nhật thành công!')
                                })
                                .catch((error) => {
                                    alert('Cập nhật thất bại!')
                                });

                        }
                    })
            return state
        case CREATE:
            fetch(url)
                .then(data => data.json())
                .then( data => {
                    let rs = data.some(
                        (arr)=> arr.username == state.username )
                    if(rs){
                        alert('Tài khoản đã tồn tại!')
                    }
                    else{
                        const data = {
                            username: state.username,
                            password: state.password
                        };
                        console.log(state)
                        fetch(url , {
                            method: 'POST', // or 'PUT'
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        })
                            .then(response => response.json())
                            .then(data => {
                                alert('Tạo tài khoản thành công!')
                            })
                            .catch((error) => {
                                alert('Tạo tài khoản thất bại!')
                            });

                    }
                })
            return state
        case FORGET:
             fetch(url)
                 .then(response => response.json() )
                 .then(data => {
                     data.forEach(
                        arr => {
                            if(arr.username == state.username){
                                alert("Password của bạn là: "+ arr.password)
                            }
                        }
                     )
                 })
             return state
        default:
            return state
    }


}



