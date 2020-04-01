// 将所有配置信息存放在这个文件, 如开发环境API URL, 生产环境 URL 等.
/**
 * Defines the API route we are using.
 * @type {string}
 */
var api_url = '';

switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'http://roast.com/api/v1';
        break;
    case 'production':
        api_url = 'http://roast.com/api/v1';
        break;
}

// 以对象形式导出任何需要的变量以便在应用的其他地方使用, 如定义路由的地方
export const ROAST_CONFIG = {
    API_URL: api_url,
}
