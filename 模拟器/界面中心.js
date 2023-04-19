let 界面 = {
    体质属性li:null,
    初始化(){
        this.体质属性li = document.querySelector('.attr_health');
        this.词条列表UI = document.querySelector('.worldList');
    },
    更新(){
        this.体质属性li.innerText = '体质:' + 属性.health;
    },
    词条列表UI:undefined,
    上一个词条:null,
}
function 添加词条(text,isBegin){
    if(isBegin || 界面.上一个词条 == null){
        let li = document.createElement('li');
        界面.上一个词条 = li;
        li.className = 'word';
        界面.上一个词条.innerHTML = text;
        界面.词条列表UI.appendChild(li);
    }else{
        界面.上一个词条.innerHTML = 界面.上一个词条.innerHTML + '<br>' +text;
    }
    界面.词条列表UI.scrollTop = 界面.词条列表UI.scrollHeight;
}