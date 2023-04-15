import tools from './../工具库/tools.js'
let 属性中心 ={
    _age:-1,
    get age(){
        return this._age;
    },
    set age(value){
        console.log();
        this._age = value;
        页面管理器.添加词条(`<span style="color:gray;font-size:12px">年龄:${value}</span>`,true);
    },
    _health:0.2,
    get health(){
        return this._health;
    },
    set health(value){
        let curValue =  new Number(value.toFixed(1));
        if(value>= this._health){
            // 页面管理器.添加词条("体质+"+(curValue-this._health).toFixed(1)+` (${curValue})`);
        }else{
            // 页面管理器.添加词条("体质"+(curValue-this._health).toFixed(1)+` (${curValue})`);
        }
        this._health = curValue;
        界面更新器.更新();
    },
    life:65,
    isDie:false,
    isBorn:false,
    family:{
        sex:'男',
        father:true,
        mother:true,
        parter:false,
    },
    money:0,
    tools,
    setAttr(attr){
        for(let key in attr){
            this[key] = attr[key];
        }
        // console.log(词库管理器);
        // console.log(触发管理器);
        attr.属性中心 = this;
        触发管理器.检测触发(attr);
    }

}
let 界面更新器 = {
    体质属性li:null,
    初始化(){
        this.体质属性li = document.querySelector('.attr_health');
    },
    更新(){
        this.体质属性li.innerText = '体质:' + 属性中心.health;
    }
}
界面更新器.初始化();

export default 属性中心;