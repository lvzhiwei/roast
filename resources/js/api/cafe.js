/**
 * Import the Roast API URL from the config.
 */
import { ROAST_CONFIG } from '../config.js';

// 导出一个默认模块以便在应用的其他任何地方使用API请求
export default {
    // 定义一个方法, 获取所有咖啡店
    getCafes: function () {
        return axios.get(ROAST_CONFIG.API_URL + '/cafes');
    },
    // 定义获取单个咖啡店详细信息的方法, 传入咖啡店id
    getCafe: function (cafeID) {
        return axios.get(ROAST_CONFIG.API_URL + '/cafes/' + cafeID);
    },
    // 发起请求新增一个咖啡店 /api/v1/cafes
    postAddNewCafe: function (name, address, city, state, zip) {
        return axios.post(
            ROAST_CONFIG.API_URL + '/cafes/new',
            {
                name: name,
                address: address,
                city: city,
                state: state,
                zip: zip
            }
        );
    }
}
