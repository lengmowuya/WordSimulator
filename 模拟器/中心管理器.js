let 事件管理器 = {
    广播组:[],
    挂载事件库(事件列表){
        this.广播组 = [...this.广播组,...事件列表];
    },
    卸载事件库(事件列表){
        this.广播组 = this.广播组.filter(item => !事件列表.some(event => event === item));
    }
}
function 推进(){
    if(事件管理器.广播组.length <= 0) return;
    Attr.age++;
    事件管理器.广播组.forEach((item)=>{
        item();
    })
    页面管理器.添加词条(词库管理器.随机获得词条());
}
let 页面管理器 ={
    词条列表UI:undefined,
    初始化(){
        this.词条列表UI = document.querySelector('.worldList');
    },
    添加词条(text){
        let li = document.createElement('li');
        li.innerText = text;
        li.className = 'word';
        this.词条列表UI.appendChild(li);
    }
}
页面管理器.初始化();
let 词库管理器 = {
    词库列表:[],
    随机获得词条(){
        let 词列 = this.词库列表[随机数(0,this.词库列表.length-1)];
        console.log(词列);
        let 词条 = 词列[随机数(0,词列.length-1)]
        return 词条.text;
    },
    挂载词库(list){
        console.log(list);
        this.词库列表.push(list);
    },
    卸载词库(){

    }
}