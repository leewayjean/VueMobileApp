export default {
    getGeoHash(state) {
        return state.geohash;
    },
    // 购物车总价
    totalPrice(state) {
        let total = 0;
        state.cartList.forEach(item => {
            total += item.count * item.price;
        })
        return total || 0;
    },
    // 购物车总数量
    foodCount(state) {
        let count = 0;
        state.cartList.forEach((item) => {
            count += item.count;
        })
        return count;
    }
}