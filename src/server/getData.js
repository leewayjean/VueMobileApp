import axios from "axios"
// 获取热门城市
export const getHotCity = () => {
    return axios.get("https://elm.cangdu.org/v1/cities?type=hot")
}
// 获取当前城市
export const getCurrentCity = () => {
    return axios.get("https://elm.cangdu.org/v1/cities?type=guess")
}

// 获取所有城市
export const getCityGroup = () => {
    return axios.get("https://elm.cangdu.org/v1/cities?type=group")
}

export const getCurrentCityById = (id) => {
    return axios.get(`https://elm.cangdu.org/v1/cities/${id}`)
}
// 根据城市id，及输入关键词搜索地址

export const searchAddress = (cityId, inputValue) => {
    return axios.get(`https://elm.cangdu.org/v1/pois?city_id=${cityId}&keyword=${inputValue}&type=search`)
}

// 根据地理精度获取地址

export const getAddressByGeohash = (geohash) => {
    return axios.get(`https://elm.cangdu.org/v2/pois/${geohash}`)
}

// 获取食品分裂
export const getIndexEntry = () => {
    return axios.get(`https://elm.cangdu.org/v2/index_entry`)
}

// 搜索食品和餐馆(根据地理精度和关键词)
export const searchRestaurant = (geohash,keyword) => {
    return axios.get(`https://elm.cangdu.org/v4/restaurants?geohash=${geohash}&keyword=${keyword}`)
}


// 获取店铺首页店铺列表(根据经纬度)

export const getShopList = (latitude, longitude) => {
    return axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${latitude}&longitude=${longitude}`)
}


// 根据店铺id获取店铺信息

export const getShopInfo = (id) => {
    return axios.get(`https://elm.cangdu.org/shopping/restaurant/${id}`)
}
// 根据店铺id获取店铺商品
export const getFoods = (id) => {
    return axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${id}`)
}

//根据id获取评价标签
export const getRatingsTags = (id) => {
    return axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${id}/ratings/tags`)
}

// 获取评价(根据id)

export const getRatings = (id) => {
    return axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${id}/ratings`)
}


// 使用用户名进行登录

export const userLogin = (username,password,captcha_code) => {
    return axios.post(`https://elm.cangdu.org/v2/login`,{
        username,
        password,
        captcha_code,
      })
}

export const signOut = () => {
    return axios.get('https://elm.cangdu.org/v2/signout')
}

// 获取图片验证码

export const getCaptchaCode = () => {
    return axios.post("https://elm.cangdu.org/v1/captchas",{});
}


//   获取用户信息
export const getUserInfo = () => {
    return axios.get(`https://elm.cangdu.org/v1/user`)
}