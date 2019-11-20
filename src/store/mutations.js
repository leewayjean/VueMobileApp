import {
    SAVE_GEOHASH,
    RECORD_ADDRESS,
    RECORD_USERINFO,
    ADD_FOOD
} from "./mutations-type"

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
    // 商品的数量加
    [ADD_FOOD](state,playload){
        let len = state.cartList.length;
        // 如果购物车没有任何商品，直接添加
        if(len = 0){
            state.cartList.push(playload);
        }else {
            let arr = state.cartList.filter((item) => {
                return item._id == item._id;
            })
            if(arr.length>0){
                state.cartList[index].count ++;
            }
        }
        
        state.cartList.push(playload);
    }
}