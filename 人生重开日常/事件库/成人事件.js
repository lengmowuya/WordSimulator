class 成人事件库 extends 事件库模板 {
    constructor(){
        super();
        this.执行列表 = ['结婚']
    }
    结婚(属性中心){
        if((!属性中心.isMarried) && 属性中心.age >= 24){
            属性中心.isMarried = true;
            页面管理器.添加词条(`<p style="color:red">你结婚了</p>`);
            词库管理器.载入词库('./人生重开日常/词库/日常/结婚.json');
        }
    }
    离婚(属性中心){
        if(属性中心.isMarried && tools.随机数(1,10) != 1) return;
        if(confirm('你的老婆要离婚了,是否挽留??')){
            // 属性中心.married = true;
            页面管理器.添加词条("你的婚姻得到了勉强的维持");
        }else{
            属性中心.isMarried = false;
            this.删除事件('离婚');
            页面管理器.添加词条("你离婚了,真悲惨");
            词库管理器.卸载词库('结婚');
        }

    }

}
let 事件库 = new 成人事件库();
export default 事件库;