class 基本人生事件库 extends 事件库模板 {
    constructor(){
        super();
        this.执行列表 = ['出生','成长','衰老','死亡','成人','学校','娱乐','社畜','年龄段','毕业','生娃']
        this.name = '基本人生事件库';
    }
    出生(属性中心){
        // 出生事件:当age等于0的时候,判断是否能出生,如果属性中心够就出生,不够就死亡.
        if(属性中心.age != 0) return;
        if(属性中心.health > 0){
            页面管理器.添加词条("你出生了");
        }else{
            页面管理器.添加词条("你胎死腹中");
            事件管理器.结束游戏();
        }
        return true;
    }
    成长(属性中心){
        // 成长事件:当age小于20时,每年health+0.2.
        if(属性中心.age > 20) return;
        // 词库管理器.载入词库('./人生重开日常/词库/日常/意外.json');
        属性中心.setAttr({health:属性中心.health+0.2});
    }
    衰老(属性中心){
        // 当age>life-5时,health每年-0.5.
        if(属性中心.age < (属性中心.life - 5)) return;
        属性中心.setAttr({health:属性中心.health-0.2});
    }
    死亡(属性中心){
        // 死亡事件:当health<0时,死亡.
        if(属性中心.health > 0) return;
        页面管理器.添加词条('你死了!');
        事件管理器.结束游戏();
        return true;
    }
    学校(属性中心){
        if(属性中心.age < 6) return;
        if(!confirm('你到了上学的年级了,是否乖乖上学')){
            页面管理器.添加词条("你的鬼哭狼嚎和挣扎只换来一顿混合双打,最后你还是屈服了");
        }
        属性中心.setAttr({isStudent:true});
        // 词库管理器.载入词库('./人生重开日常/词库/日常/学校.json');
        页面管理器.添加词条("你上学了");
        return true;
    }
    毕业(属性中心){
        if(属性中心.age < 22) return;
        属性中心.setAttr({isStudent:false});
        页面管理器.添加词条("你毕业了");
        return true;
    }
    生娃(属性中心){
        if(属性中心.isWork && 属性中心.isMarried && !属性中心.hasChild){
            页面管理器.添加词条(`<span style="color:red">你的老婆给你生了一个大胖儿子,恭喜你有娃了!</span>`);
            属性中心.setAttr({hasChild:true});
        }
    }
    年龄段(属性中心){
        switch(属性中心.age){
            case 0:
                属性中心.setAttr({年龄段:'幼童'});
                break;
            case 6:
                属性中心.setAttr({年龄段:'少年'});
                break;
            case 18:
                属性中心.setAttr({年龄段:'青年'});
                break;
            case 30:
                属性中心.setAttr({年龄段:'中年'});
                break;
            case 55:
                属性中心.setAttr({年龄段:'老年'});
                break;
        }
    }
    娱乐(属性中心){
        if(属性中心.age < 12) return;
        // this.删除事件('娱乐');
        词库管理器.载入词库('./人生重开日常/词库/日常/娱乐.json');
        return true;
    }
    成人(属性中心){
        if(属性中心.age <18) return;
        // this.删除事件('成人');
        import('./../事件库/成人事件.js')
            .then(data=>{
                事件库 = data.default;
                事件管理器.挂载事件库(事件库);
            })
        return true;
    }
    社畜(属性中心){
        if(属性中心.age < 30) return;
        if(!属性中心.isWork){
            属性中心.setAttr({isWork:true});
        }
        // this.删除事件('社畜');
        return true;
    }
}
let 事件库 = new 基本人生事件库();
export default 事件库;