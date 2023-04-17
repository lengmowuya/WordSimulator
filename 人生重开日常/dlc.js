let 基本人生事件库,属性中心,词库触发器,tools;
function init(){
    // 动态引入文件
    import('./事件库/基本人生事件.js')
        .then(data=>{
            基本人生事件库 = data.default;
            return import('./运行器/属性中心.js');
        }).then(data=>{
            属性中心 = data.default;
            return import('./工具库/tools.js')
        }).then(data=>{
            tools = data.default;
            return import('./词库触发器/基本词库触发器.js')
        }).then(data=>{
            词库触发器 = data.default;
            start();
        }).catch(err=>{
            console.log(err);
        })
}
function start(){
    事件管理器.挂载事件库(基本人生事件库);
    触发管理器.挂载触发器(词库触发器);
    页面管理器.初始化();
    事件管理器.初始化(属性中心);
}

export default {
    init
}