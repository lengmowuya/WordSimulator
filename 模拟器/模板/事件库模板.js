// 出生事件:当age等于0的时候,判断是否能出生,如果属性中心够就出生,不够就死亡.
class 事件库模板{
    constructor(){
        this.执行列表 = []
        this.name = '事件库目标'
    }
    运行列表(属性中心){
        this.执行列表.forEach((name)=>{
            let once = this[name](属性中心);
            if(once) this.删除事件(name);
        })
    }
    删除事件(name){
        for(let i =0;i<this.执行列表.length;i++){
            if(this.执行列表[i] == name){
                this.执行列表.splice(i,1);
            }
        }
    }
    添加事件(name){
        this.执行列表.push(name);
    }
    卸载自我(){
        事件管理器.卸载事件库(this.name);
    }
}