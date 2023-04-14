class 成人事件库 extends 事件库模板 {
    constructor(){
        super();
        this.执行列表 = ['结婚','离婚']
    }
    结婚(属性中心){
        if((!属性中心.isMarried) && 属性中心.age >= 24 && (tools.随机数(1,3) == 1)){
            属性中心.setAttr({isMarried:true});
            页面管理器.添加词条(`<span style="color:red">你结婚了</span>`);
        }
    }
    离婚(属性中心){
        // console.log(属性中心.isMarried)
        if(!属性中心.isMarried || (tools.随机数(1,10) != 1) || 属性中心.hasChild) return;
        if(confirm('你的老婆决定跟你离婚,是否挽留??')){
            if(tools.随机数(1,3) != 1){
                页面管理器.添加词条("你的动人挽留起到了效果,你的婚姻得到了勉强的维持");
            }else{
                页面管理器.添加词条("即使你一再挽留,你的老婆还是毅然决然跟你离婚了");
                属性中心.setAttr({isMarried:false});
            }
        }else{
            属性中心.setAttr({isMarried:false});
            // this.删除事件('离婚');
            页面管理器.添加词条("你的冷淡让你的老婆更加痛心-你离婚了,真悲惨");
        }
    }
}
let 事件库 = new 成人事件库();
export default 事件库;