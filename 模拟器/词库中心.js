let 词库中心 = {
    Hash:{},
    词库列表:[]
}
function 随机获得词条(){
    let index = tools.随机数(0,词库中心.词库列表.length-1);
    let 词列 = 词库中心.词库列表[index];
    if(词列==undefined){ return '<span style="font-size:12px;opacity:0.2">今年无事发生</span>'};
    // if(词列==undefined){ return '今年无事发生'};
    let 词条 = 词列.list.splice(tools.随机数(0,词列.list.length-1),1)[0];
    if(词列.list.length == 0){
        卸载词库(词库中心.词库列表[index].name);
    }
    return 词条.text + `<span style="font-size:12px;opacity:0.5"><${词列.name}></span>`;
    // return 词条.text;
}
// 读取文件的同时挂载词库.
async function 载入词库(name){
    let has = false;
    词库中心.词库列表.forEach(library=>{
        if(library.name == name) has = true;
    })
    if(has) return;

    词库中心 = 词库中心;
    let library = await tools.载入文件(name);
    挂载词库(library);
}
function 挂载词库(library){
    console.log(library);
    console.log('词库挂载:'+library.name);
    词库中心 = 词库中心;
    词库中心.词库列表.push(library);
}
function 卸载词库(name){
    词库中心 = 词库中心;
    for(let i =0;i<词库中心.词库列表.length;i++){
        if(词库中心.词库列表[i].name == name){
            词库中心.词库列表.splice(i,1);
            console.log('-词库卸载:'+name);
        }
    }
}
function 词库响应(libraryName,attrName,func){
    if(attrName instanceof Array){
        attrName.forEach(name=>{
            词库响应(libraryName,name,func);
        })
        return;
    }
    // 添加响应判断
    if(!词库中心.Hash[attrName]){
        词库中心.Hash[attrName] = [{name:libraryName,func}];
        // 注册属性触发
        触发中心.触发时(attrName,(val)=>{
            词库中心.Hash[attrName].forEach(item=>{
                // 判断响应
                if(item.func(val)){
                    载入词库(item.name);
                }else{
                    卸载词库(item.name);
                }
            })
        })
    }else{
        词库中心.Hash[attrName].push({name:libraryName,func});
    }

}