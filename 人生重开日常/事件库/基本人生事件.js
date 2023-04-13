class 基本人生事件库 extends 事件库模板 {
    constructor(){
        super();
        this.执行列表 = ['出生','成长','衰老','死亡','成人']
        this.name = '基本人生事件库';

    }
    出生(属性中心){
        // 出生事件:当age等于0的时候,判断是否能出生,如果属性中心够就出生,不够就死亡.
        if(属性中心.age == 0){
            if(属性中心.health > 0){
                // $.getJSON是从根目录的相对路径
                $.getJSON('./人生重开日常/词库/日常/幼童.json',(data)=>{
                    词库管理器.挂载词库(data);
                })
                $.getJSON('./人生重开日常/词库/日常/意外.json',(data)=>{
                    词库管理器.挂载词库(data);
                })
                页面管理器.添加词条("你出生了");
            }else{
                页面管理器.添加词条("你胎死腹中");
                事件管理器.结束游戏();
            }
        }
    }
    成长(属性中心){
        // 成长事件:当age小于20时,每年health+0.2.
        if(属性中心.age <= 20){
            属性中心.health=属性中心.health+0.2;
        }
    }
    衰老(属性中心){
        // 当age>life-5时,health每年-0.5.
        if(属性中心.age >= (属性中心.life - 5)){
            属性中心.health=属性中心.health-0.2;
        }
    }
    死亡(属性中心){
        // 死亡事件:当health<0时,死亡.
        if(属性中心.health <= 0){
            页面管理器.添加词条('你死了!');
            // 事件管理器.卸载事件库(事件列表);
            // this.卸载自我();
            事件管理器.结束游戏();
        }
    }
    学校(属性中心){
        if(属性中心.age >= 6){
            this.删除事件('学校');
            $.getJSON('./人生重开日常/词库/日常/学校.json',(data)=>{
                词库管理器.挂载词库(data);
            })
            页面管理器.添加词条("你上学了");
        }
    }
    娱乐(属性中心){
        if(属性中心.age >= 12){
            this.删除事件('娱乐');
            $.getJSON('./人生重开日常/词库/日常/娱乐.json',(data)=>{
                词库管理器.挂载词库(data);
            })
        }
    }
    成人(属性中心){
        if(属性中心.age >= 18){
            this.删除事件('成人');
            $.getJSON('./人生重开日常/词库/日常/少年.json',(data)=>{
                词库管理器.挂载词库(data);
            })
            import('./../事件库/成人事件.js')
                .then(data=>{
                    事件库 = data.default;
                    console.log(事件库);
                    事件管理器.挂载事件库(事件库);
                })
            事件管理器.卸载事件库('幼童');
            页面管理器.添加词条("你成年了");
        }
    }
    社畜(属性中心){
        if(属性中心.age >= 30){
            this.删除事件('社畜');
            $.getJSON('./人生重开日常/词库/日常/社畜.json',(data)=>{
                词库管理器.挂载词库(data);
            })
            页面管理器.添加词条("你成为了一名光荣的社畜");
        }
    }
}
let 事件库 = new 基本人生事件库();
export default 事件库;