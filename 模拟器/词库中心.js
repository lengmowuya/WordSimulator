let 词库中心 = {
    词库列表:[]
}
function 随机获得词条(){
    let index = tools.随机数(0,词库中心.词库列表.length-1);
    let 词列 = 词库中心.词库列表[index];
    // console.log(词列);
    // if(词列==undefined){ return '<span style="font-size:12px;opacity:0.2">今年无事发生</span>'};
    if(词列==undefined){ return '今年无事发生'};
    let 词条 = 词列.list.splice(tools.随机数(0,词列.list.length-1),1)[0];
    if(词列.list.length == 0){
        词库中心.卸载词库(词库中心.词库列表[index].name);
    }
    // return 词条.text + `<span style="font-size:12px;opacity:0.5"><${词列.name}></span>`;
    return 词条.text;
}
// 读取文件的同时挂载词库.
async function 载入词库(url){
    词库中心 = 词库中心;
    let library = await tools.载入文件(url);
    词库中心.挂载词库(library);
}
function 挂载词库(list){
    词库中心 = 词库中心;
    词库中心.词库列表.push(list);
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