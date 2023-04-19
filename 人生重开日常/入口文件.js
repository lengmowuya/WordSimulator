let 基本人生事件库,属性触发器;
function 初始化(){
    // 动态引入文件
    import('./事件库/基本人生事件.js')
        .then(data=>{
            基本人生事件库 = data.default;
            return import('./触发器/属性触发器.js')
        }).then(data=>{
            属性触发器 = data.default;
            运行();
        }).catch(err=>{
            console.log(err);
        })
}
function 运行(){
    挂载事件库(基本人生事件库);
    基本人生事件库.初始化();
    属性触发器.初始化();
}

export default {
    初始化
}