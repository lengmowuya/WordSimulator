let Trigger = {
    triggerList : ['幼童','少年','青年','社畜','婚姻','学生','带娃'],
    幼童(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='幼童'){
            词库管理器.载入词库('./人生重开日常/词库/日常/幼童.json');
        }else{
            console.log(this);
            词库管理器.卸载词库('幼童');
        }
    },
    少年(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='少年'){
            词库管理器.载入词库('./人生重开日常/词库/日常/少年.json');
            // 词库管理器.载入词库('./人生重开日常/词库/日常/娱乐.json');
        }else{
            词库管理器.卸载词库('少年');
        }
    },
    青年(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='青年'){
            词库管理器.载入词库('./人生重开日常/词库/日常/青年.json');
        }else{
            词库管理器.卸载词库('青年');
        }
    },
    社畜(attr){
        if(attr.isWork == undefined || attr.isStudent) return;
        if(attr.isWork){
            词库管理器.载入词库('./人生重开日常/词库/日常/社畜.json');
        }else{
            词库管理器.卸载词库('社畜');
        }
    },
    婚姻(attr){
        if(attr.isMarried == undefined) return;
        if(attr.isMarried){
            词库管理器.载入词库('./人生重开日常/词库/日常/结婚.json');
            console.log('结婚了');
        }else{
            词库管理器.卸载词库('结婚');
        }
    },
    学生(attr){
        if(attr.isStudent == undefined) return;
        if(attr.isStudent){
            词库管理器.载入词库('./人生重开日常/词库/日常/学校.json');
        }else{
            词库管理器.卸载词库('学校');
        }
    },
    带娃(attr){
        if(attr.hasChild == undefined) return;
        if(attr.hasChild){
            词库管理器.载入词库('./人生重开日常/词库/日常/带娃.json');
        }else{
            词库管理器.卸载词库('带娃');
        }
    },
}
export default Trigger;