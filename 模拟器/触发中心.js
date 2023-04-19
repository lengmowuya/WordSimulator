let 触发中心 = {
    list:[],
    检测触发(attr){
        触发中心.list.forEach((item)=>{
            item.apply(触发中心,[attr]);
        })
    }
}
function 挂载触发器(触发库){
    触发库.triggerList.forEach(item=>{
        触发中心.list.push(触发库[item]);
    })
}