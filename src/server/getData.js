import axios from "axios"
// 获取热门城市
export const getHotCity = () => {
    axios.get("https://elm.cangdu.org/v1/cities?type=hot")
}