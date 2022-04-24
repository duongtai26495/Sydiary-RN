import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage_constants from '../../constants/Storage_constants';
export async function CheckTokenIsExist(){
    let token = await AsyncStorage.getItem(Storage_constants.ACCESS_TOKEN);
    if(token != null){
        console.log("User logged in: ",token)
        return true
    }else{
        console.log("User do not login")
        return false
    }
}