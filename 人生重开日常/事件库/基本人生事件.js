class 基本人生事件库 extends 事件库模板 {
    constructor(){
        super();
        this.执行列表 = ['出生','成长','衰老','死亡','成人','学校','娱乐','社畜','毕业','生娃','添加随机选择词条']
        this.name = '基本人生事件库';
    }
    出生(){
        // 出生事件:当age等于0的时候,判断是否能出生,如果属性够就出生,不够就死亡.
        if(属性.age != 0) return;
        随机化出生(属性);
        if(属性.health > 0){
            添加词条(`你出生了,你是个${属性.sex}孩`);
        }else{
            添加词条(`<span style="color:red">你胎死腹中</span>`);
            结束游戏();
        }
        return true;
    }
    成长(){
        // 成长事件:当age小于20时,每年health+0.2.
        if(属性.age > 20) return;
        设置属性({health:属性.health+0.5});
    }
    衰老(){
        // 当age>life-5时,health每年-0.5.
        if(属性.age < (属性.寿命 - 5)) return;
        添加状态('衰老','bad');
        设置属性({health:属性.health-0.2});
    }
    死亡(){
        // 死亡事件:当health<0时,死亡.
        if(属性.health > 0) return;
        添加词条(`<span style="color:red">你死了</span>`);
        结束游戏();
        return true;
    }
    学校(){
        if(属性.age < 6) return;
        if(!confirm('你到了上学的年级了,是否乖乖上学')){
            添加词条("你的鬼哭狼嚎和挣扎只换来一顿混合双打,最后你还是屈服了");
        }
        设置属性({isStudent:true});
        if(属性.家境<= 3){
            添加词条("你上学了,是村办学校");
        }else if(属性.家境 > 7){
            添加词条("你上学了,是母亲托关系加重金办理的市重点学校");
        }else{
            添加词条("你上学了,是镇上的公立学校");
        }
        return true;
    }
    毕业(){
        if(属性.age < 22) return;
        设置属性({isStudent:false});
        添加词条("你毕业了");
        return true;
    }
    生娃(){
        if(属性.isWork && 属性.isMarried && !属性.hasChild){
            添加状态('为人父母','good');
            添加词条(`<span style="color:red">你的老婆给你生了一个大胖儿子,恭喜你有娃了!</span>`);
            设置属性({hasChild:true});
        }
    }
    娱乐(){
        if(属性.age < 12) return;
        载入词库('娱乐');
        return true;
    }
    成人(){
        if(属性.age <18) return;
        import('./../事件库/成人事件.js')
            .then(data=>{
                事件库 = data.default;
                挂载事件库(事件库);
            })
        return true;
    }
    社畜(){
        if(属性.age < 30) return;
        if(!属性.isWork){
            设置属性({isWork:true});
        }
        // return true;
    }
    添加随机选择词条(){
        添加词条(随机获得词条());
    }
    初始化(){
        初始化挂载事件();
    }
}

function 随机化出生(属性){
    if(tools.随机数(0,1)){
        设置属性({sex:'男'});
    }else{
        设置属性({sex:'女'});
    }
    switch(tools.随机数(1,3)){
        case 1:
            // 贫困
            设置属性({家境:1});
            break;
        case 2:
            // 小康
            设置属性({家境:4});
            break;
        case 3:
            // 小康
            设置属性({家境:8});
            break;
    }
    // 寿命设置
    设置属性({寿命:tools.随机数(50,77)});
    if(tools.随机数(1,100) == 1){
        设置属性({health:属性.health-1});
    }
}
function 初始化挂载事件(){
    订阅事件('按钮点击',()=>{
        设置属性({age:属性.age+1});
    })
    订阅事件('游戏结束',()=>{
        alert('游戏已结束!');
    })
    订阅事件('游戏开始',()=>{
        console.log('游戏开始');
    })
}
let 事件库 = new 基本人生事件库();
export default 事件库;