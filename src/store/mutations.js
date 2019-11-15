import {SAVE_GEOHASH} from "./mutations-type"
import {RECORD_ADDRESS} from "./mutations-type"
import { stat } from "fs";
export default {
    // 保存地理精度geohash
    [SAVE_GEOHASH](state,geohash){
        state.geohash = geohash;
    },
    // 记录地址的经纬度
    [RECORD_ADDRESS](state,address){
        state.latitude = address.latitude;
        state.longitude = address.longitude;
    }
}