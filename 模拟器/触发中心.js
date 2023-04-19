let 触发中心 = {
    triggleHash:{},
    list:[],
    触发(name,val){
        if(this.triggleHash[name]){
            this.triggleHash[name].forEach(item=>{
                item(val);
            })
        }
    },
    检测触发(attr){
        触发中心.list.forEach((item)=>{
            item.apply(触发中心,[attr]);
        })

        for(let name in attr){
            // 触发中心.触发
            this.触发(name,attr[name]);
        }
    },
    触发时(attr,fn){
        if(this.triggleHash[attr]){
            this.triggleHash[attr].push(fn);
        }else{
            this.triggleHash[attr] = [fn] ;
        } 
    }
}
function 挂载触发器(触发库){
    触发库.triggerList.forEach(item=>{
        触发中心.list.push(触发库[item]);
    })
}