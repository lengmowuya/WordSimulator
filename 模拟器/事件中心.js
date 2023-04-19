let 事件中心 = {
    广播组:[],
    推进按钮:undefined,
    初始化(){
        this.推进按钮 = document.querySelector('#推进');
        this.推进按钮.onclick = ()=>{
            this.推进();
        }
    },
    推进(){
        if(this.广播组.length <= 0) return;
        this.广播组.forEach((item)=>{
            item.运行列表();
        })
    }
}
function 挂载事件库(事件列表){
    事件中心.广播组.push(事件列表);
}
function 卸载事件库(name){
    for(let i =0;i<事件中心.广播组.length;i++){
        if(事件中心.广播组[i].name == name){
            事件中心.广播组.splice(i,1);
        }
    }
}
function 结束游戏(){
    事件中心.广播组 = [];
}