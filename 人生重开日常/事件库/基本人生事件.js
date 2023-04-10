// 出生事件:当age等于0的时候,判断是否能出生,如果属性中心够就出生,不够就死亡.
let apple = '111';
let 事件库 = {
    执行列表:['出生','成长','衰老','死亡'],
    运行列表(){
        // console.log(this);
        this.执行列表.forEach((item)=>{
            // item();
            this[item]();
        })
    },
    出生(){
        // console.log(this);
        console.log(apple);
        if(属性中心.age == 0){
            if(属性中心.health > 0){
                $.getJSON('./../词库/日常/幼童.json',(data)=>{
                    console.log(data);
                    词库管理器.挂载词库(data);
                })
                $.getJSON('./../词库/城市.json',(data)=>{
                    词库管理器.挂载词库(data);
                })
                $.getJSON('./../词库/村子.json',(data)=>{
                    词库管理器.挂载词库(data);
                })
                $.getJSON('./../词库/偏远地区.json',(data,err)=>{
                    if(err)console.log(err);
                    词库管理器.挂载词库(data);
                })
                页面管理器.添加词条("你出生了");
            }else{
                // console.log('你胎死腹中');
                页面管理器.添加词条("你胎死腹中");
                事件管理器.卸载事件库(事件列表);
            }
        }
    },
    // 成长事件:当age小于20时,每年health+0.2.
    成长(){
        if(属性中心.age <= 20){
            // console.log('你胎死腹中');
            属性中心.health=属性中心.health+0.2;
        }
    },
    // 当age>life-5时,health每年-0.5.
     衰老(){
        if(属性中心.age >= (属性中心.life - 5)){
            属性中心.health=属性中心.health-0.2;
        }
    },
    // 死亡事件:当health<0时,死亡.
     死亡(){
        if(属性中心.health <= 0){
            页面管理器.添加词条('你死了!');
            事件管理器.卸载事件库(事件列表);
        }
    },
}

// let 事件列表 = [出生,成长,衰老,死亡];
export default 事件库;