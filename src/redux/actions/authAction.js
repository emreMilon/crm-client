import { AUTH } from '../types/types'
import { postAPI } from "../../utils/fetchData"


export const login = (userLogin) => async (dispatch) =>  {
    try {
        const res = await postAPI('login', userLogin)
        console.log(res)
        dispatch({
            type:  AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })
    } catch (err) {
        console.log(err.response.data.msg)
    }
}