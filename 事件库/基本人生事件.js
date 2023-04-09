// 出生事件:当age等于0的时候,判断是否能出生,如果Attr够就出生,不够就死亡.
function 出生(){
    if(Attr.age == 0){
        // console.log(Attr.health);
        if(Attr.health > 0){
            // console.log();
            // import 幼童词库 from 
            // let 幼童词库;
            $.getJSON('./../词库/日常/幼童.json',(data)=>{
                词库管理器.挂载词库(data);
            })
            $.getJSON('./../词库/城市.json',(data)=>{
                词库管理器.挂载词库(data);
            })
            $.getJSON('./../词库/村子.json',(data)=>{
                词库管理器.挂载词库(data);
            })
            $.getJSON('./../词库/偏远地区.json',(data)=>{
                词库管理器.挂载词库(data);
            })
            // (async()=>{})()
            页面管理器.添加词条("你出生了");
        }else{
            // console.log('你胎死腹中');
            页面管理器.添加词条("你胎死腹中");
            事件管理器.卸载事件库(事件列表);
        }
    }
}
// 成长事件:当age小于20时,每年health+0.2.
function 成长(){
    if(Attr.age <= 20){
        // console.log('你胎死腹中');
        Attr.health=Attr.health+0.2;
    }
}
// 当age>life-5时,health每年-0.5.
function 衰老(){
    if(Attr.age >= (Attr.life - 5)){
        Attr.health=Attr.health-0.2;
    }
}
// 死亡事件:当health<0时,死亡.
function 死亡(){
    if(Attr.health <= 0){
        页面管理器.添加词条('你死了!');
        事件管理器.卸载事件库(事件列表);
    }
}
let 事件列表 = [出生,成长,衰老,死亡];
export default {
    事件列表
}