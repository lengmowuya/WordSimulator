// import tools from './tools.js'
let 事件管理器 = {
    广播组:[],
    挂载事件库(事件列表){
        // this.广播组 = [...this.广播组,...事件列表];
        this.广播组.push(事件列表);
        // console.log(this.广播组);
    },
    卸载事件库(事件列表){
        this.广播组 = this.广播组.filter(item => !事件列表.some(event => event === item));
    },
    推进按钮:undefined,
    初始化(属性中心){
        this.属性中心 = 属性中心;
        this.推进按钮 = document.querySelector('#推进');
        this.推进按钮.onclick = ()=>{
            this.推进();
        }
    },
    属性中心:undefined,
    推进(){
        if(事件管理器.广播组.length <= 0) return;
        this.属性中心.age++;
        事件管理器.广播组.forEach((item)=>{
            item.运行列表(this.属性中心);
        })
        页面管理器.添加词条(词库管理器.随机获得词条());
    }
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
let 词库管理器 = {
    词库列表:[],
    随机获得词条(){
        // console.log(this.词库列表);
        let 词列 = this.词库列表[tools.随机数(0,this.词库列表.length-1)].list;
        let 词条 = 词列[tools.随机数(0,词列.length-1)]
        return 词条.text;
    },
    挂载词库(list){
        // console.log(list);
        this.词库列表.push(list);
    },
    卸载词库(name){
        // this.词库列表
        for(let i =0;i<this.词库列表.length;i++){
            if(this.词库列表[i].name == name){
                this.词库列表.splice(i,1);
            }
        }
    }
}

