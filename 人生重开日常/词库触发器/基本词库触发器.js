let Trigger = {
    幼童(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='幼童'){
            词库管理器.载入词库('./人生重开日常/词库/日常/幼童.json');
        }else if(attr.年龄段!='幼童'){
            事件管理器.卸载词库('幼童');
        }
    },
    少年(attr){
        if(!attr.年龄段) return;
        if(attr.年龄段=='少年'){
            词库管理器.载入词库('./人生重开日常/词库/日常/少年.json');
        }else if(attr.年龄段!='少年'){
            事件管理器.卸载词库('少年');
        }
    },
    婚姻(attr){

    }
}