let 事件库,属性中心,tools;
function init(){
    // 动态引入文件
    import('./事件库/基本人生事件.js')
        .then(data=>{
            事件库 = data.default;
            return import('./运行器/属性.js');
        }).then(data=>{
            属性中心 = data.default;
            return import('./工具库/tools.js')
        }).then(data=>{
            tools = data.default;
            start();
        }).catch(err=>{
            console.log(err);
        })
}
function start(){
    console.log(事件库);
    console.log(事件管理器);
    console.log(属性中心);
    事件管理器.挂载事件库(事件库);
    // console.log(tools);
}

export default {
    init
}