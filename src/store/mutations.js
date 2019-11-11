import {SAVE_GEOHASH} from "./mutations-type"
export default {
    [SAVE_GEOHASH](state,geohash){
        state.geohash = geohash;
    }
}