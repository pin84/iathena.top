export default {

    /**
     * 获取用户信息，是否为登录状态等
     */
    getUserinfo: '/user/userinfo',
    /**
     * 用户退出登录
     */
    userLogout: '/user/logout',
    getmsg: '/msg/getmsg',
    /**
     * 用户注册
     * @method:POST,
     * @param:name,pwd,repwd
     */
    register: '/user/register',

    getmsgcount: '/msg/getmsgcount',


    /**
     * @method:post,
     * @param: 
     */


    /**
     * 登录
     * @method:post,
     * @param:username,pwd
     */

    userlogin: '/user/login',


    //--------------msg--------------------
    /**
     * 发留言
     * @method:post
     * @param:
     */
    sendMsg:'/msg/send',



    //----------token-----------

    /**
     * 测试token
     */
    testToken: '/token/test'
}