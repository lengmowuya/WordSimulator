let Trigger = {
    triggerList : ['幼童','少年','青年','社畜','婚姻','学生','带娃'],
    幼童(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='幼童'){
            if(attr.属性中心.家境<=3){
                词库管理器.载入词库('贫穷幼童');
            }else{
                词库管理器.载入词库('幼童');
            }
        }else{
            // console.log(this);
            词库管理器.卸载词库('幼童');
            词库管理器.卸载词库('贫穷幼童');
        }
    },
    少年(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='少年'){
            词库管理器.载入词库('少年');
        }else{
            词库管理器.卸载词库('少年');
        }
    },
    中年(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='中年'){
        }else{
            // 词库管理器.卸载词库('少年');
        }
    },
    青年(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='青年'){
            词库管理器.载入词库('青年');
        }else{
            词库管理器.卸载词库('青年');
        }
    },
    社畜(attr){
        if(attr.isWork == undefined || attr.isStudent) return;
        if(attr.isWork){
            词库管理器.载入词库('社畜');
        }else{
            词库管理器.卸载词库('社畜');
        }
    },
    婚姻(attr){
        if(attr.isMarried == undefined) return;
        if(attr.isMarried){
            词库管理器.载入词库('结婚');
            console.log('结婚了');
        }else{
            词库管理器.卸载词库('结婚');
        }
    },
    学生(attr){
        if(attr.isStudent == undefined) return;
        if(attr.isStudent){
            if(attr.属性中心.家境<= 3){
                词库管理器.载入词库('农村学校');
            }else{
                词库管理器.载入词库('贵族学校');
            }
        }else{
            词库管理器.卸载词库('学校');
        }
    },
    带娃(attr){
        if(attr.hasChild == undefined) return;
        if(attr.hasChild){
            词库管理器.载入词库('带娃');
        }else{
            词库管理器.卸载词库('带娃');
        }
    },
}
export default Trigger;