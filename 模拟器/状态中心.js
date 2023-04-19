let 状态中心 = {
    状态列表:[],
    状态UI:undefined,
    刷新状态UI(){
        this.状态UI.innerHTML = '';
        this.状态列表.forEach((item)=>{
            let li = document.createElement('li');
            li.className = item.type;
            if(item.count){
                li.innerText = item.text + '*' + item.count;
            }else{
                li.innerText = item.text;
            }
            this.状态UI.appendChild(li);
        });
    },
    初始化(状态UI){
        this.状态UI =状态UI;
        this.刷新状态UI();
    }
}
function 添加状态(text,type){
    let has = false;
    // 如果已有状态,加一层
    状态中心.状态列表.forEach((item,index)=>{
        if(item.text === text){
            item.count = item.count ? ++item.count : 1;
            has = true;
        }
    });
    if(!has) 状态中心.状态列表.push({text,type});
    状态中心.刷新状态UI();
}
function 删除状态(name){
    状态中心.状态列表.forEach((item,index)=>{
        if(item.text === name){
            状态中心.状态列表.splice(index,1);
        }
    });
}