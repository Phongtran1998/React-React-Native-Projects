import {AsyncStorage} from 'react-native'
import {Facebook} from 'expo'
import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILED, FACEBOOK_LOGOUT} from "./types";

export const facebookLogin = () => async dispatch => {
   let token = await AsyncStorage.getItem('fb_token');
   if (token){
        //Dispatch an action saying FB login is done
       dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
   } else {
       //Start FB login process
       doFacebookLogin(dispatch);
   }
};

const doFacebookLogin = async(dispatch) => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('431111017376997', {
            permissions: ['public_profile']
        });

    if (type === 'cancel'){
        return dispatch({type: FACEBOOK_LOGIN_FAILED})
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
};

export const facebookLogOut = () => async dispatch => {
    let removeToken = await AsyncStorage.removeItem('fb_token');
    if (!removeToken){
        dispatch({type: FACEBOOK_LOGOUT})
    }
};


