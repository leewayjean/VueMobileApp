import {
    SAVE_GEOHASH,
    RECORD_ADDRESS,
    RECORD_USERINFO,
    SIGN_OUT,
    UPDATE_CARTLIST,
    ADD_FOOD
} from "./mutations-type"
import { stat } from "fs";

export default {
    // 保存地理精度geohash
    [SAVE_GEOHASH](state, geohash) {
        state.geohash = geohash;
    },
    // 记录地址的经纬度
    [RECORD_ADDRESS](state, address) {
        state.latitude = address.latitude;
        state.longitude = address.longitude;
    },
    // 登录成功，记录用户信息，并设置登录状态
    [RECORD_USERINFO](state,userInfo){
        state.userInfo = userInfo;
        state.isLogin = true;
    },
    [SIGN_OUT](state){
        state.isLogin = false;
        state.userInfo = {};
    },
    [UPDATE_CARTLIST](state,playload){
        state.cartList = playload;
    },
    // 商品的数量加
    [ADD_FOOD](state,playload){
       state.cartList.push(playload);
    }
}