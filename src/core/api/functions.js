import AsyncStorage from '@react-native-async-storage/async-storage';
import Api_constants from '../../constants/Api_constants';
import Storage_constants from '../../constants/Storage_constants';
const url_login = Api_constants.BASE_URL + "auth/login"; //access_token
const url_register = Api_constants.BASE_URL + "user/register";
const url_getUserData = Api_constants.BASE_URL + "user/profile/"; //data user
const url_getDiaryData = Api_constants.BASE_URL + "diary/"
export async function LoginWithUsernamePassword(User) {
    try {
        let data = new FormData();
        data.append('username', User.username);
        data.append('password', User.password);
        let option = {
            method: 'POST',
            body: data
        }

        await fetch(url_login, option)
            .then(response => response.json())
            .then(result => {
                let token = result.access_token;
                AsyncStorage.setItem(Storage_constants.ACCESS_TOKEN, token);
                GetUserData(User.username, token);
            })
    }
    catch (error) { console.log(error) };
}


export async function CheckTokenIsExist(screen) {
    let token = await AsyncStorage.getItem(Storage_constants.ACCESS_TOKEN);
    if (token != null) {
        console.log(screen + " : ", token)
        return true
    } else {
        console.log("User do not login: " + screen)
        return false
    }
}

export const SignOut = async () => {

    const items = [
        Storage_constants.USERNAME_STORAGE,
        Storage_constants.FULLNAME_STORAGE,
        Storage_constants.EMAIL_STORAGE,
        Storage_constants.GENDER_STORAGE,
        Storage_constants.ACCESS_TOKEN
        // [Storage_constants.AVATAR_STORAGE, profile_image]
    ]
    await AsyncStorage.multiRemove(items, () => {
        console.log('Remove data user success');
    });
}

export const RemoveAndReloadData = async () => {
    console.log("Load data")
    let token = await AsyncStorage.getItem(Storage_constants.ACCESS_TOKEN);
    let username = await AsyncStorage.getItem(Storage_constants.USERNAME_STORAGE);
    const items = [
        Storage_constants.FULLNAME_STORAGE,
        Storage_constants.EMAIL_STORAGE,
        Storage_constants.GENDER_STORAGE,
        // [Storage_constants.AVATAR_STORAGE, profile_image]
    ]
    await AsyncStorage.multiRemove(items, () => {
        console.log('Remove data user success');
    });

    await GetUserData(username, token);
}


const GetUserData = async (username, data) => {
    let url = url_getUserData + username;

    let option = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + data
        }
    }
    try {
        await fetch(url, option)
            .then(response => response.json())
            .then(data => {
                let result = data.data;
                let fullName = result.full_name;
                let email = result.email;
                let username = result.username;
                let gender = result.gender + "";
                // let profile_image = result.profile_image;


                const items = [
                    [Storage_constants.USERNAME_STORAGE, username],
                    [Storage_constants.FULLNAME_STORAGE, fullName],
                    [Storage_constants.EMAIL_STORAGE, email],
                    [Storage_constants.GENDER_STORAGE, gender]
                    // [Storage_constants.AVATAR_STORAGE, profile_image]
                ]

                AsyncStorage.multiSet(items, () => {
                    console.log('Save info user success');
                })
            })
    } catch (error) { console.log(error) };
}

export async function LoadDiaryData(id){

    let token = await AsyncStorage.getItem(Storage_constants.ACCESS_TOKEN);
    let option = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    let url = id == null ? url_getDiaryData : url_getDiaryData + id
    return await fetch(url, option)
        .then(response => response.json())
        .catch(err => console.log(err))
}
