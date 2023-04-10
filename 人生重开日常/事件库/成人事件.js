class 成人事件库 extends 事件库模板 {
    constructor(){
        super();
        this.执行列表 = ['结婚']
    }
    结婚(属性中心){
        if(属性中心.age >= 24){
            this.删除事件('结婚');
            this.添加事件('离婚');
            页面管理器.添加词条("你结婚了");
            $.getJSON('./人生重开日常/词库/日常/结婚.json',(data)=>{
                console.log(data);
                词库管理器.挂载词库(data);
            })
        }
    }
    离婚(属性中心){
        if(tools.随机数(1,10) == 1){
            this.删除事件('离婚');
            页面管理器.添加词条("你离婚了,真悲惨");
            词库管理器.卸载词库('结婚');
        }
    }

}
let 事件库 = new 成人事件库();
export default 事件库;