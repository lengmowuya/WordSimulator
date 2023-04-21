let 抉择控制器 = (function(){
    let instance;
    return ()=>{
        if(instance){

        }
    }
})()

function 抉择窗口(){

}

let 抉择中心 = {
    mainView:undefined,
    初始化(){
        this.mainView = document.querySelector('.mainView');
    },
    instance:undefined,
    创建抉择窗口(title,options){
        if(this.instance)return;
        // 创建出窗口
        let choice = document.createElement('div');
        choice.className = 'choice';
        let titleH3 = document.createElement('h3');
        titleH3.innerText = title;
        let hint = document.createElement('h6');
        hint.innerText = '---------------抉择时刻---------------';
        let ol = document.createElement('ol');
        options.forEach(item=>{
            let button = document.createElement('button');
            button.innerText = item.text;
            button.onclick = ()=>{
                抉择中心.关闭抉择窗口();
                广播事件(item.text);
            }
            ol.appendChild(button);
            
        })
        choice.appendChild(titleH3);
        choice.appendChild(hint);
        choice.appendChild(ol);
        this.mainView.appendChild(choice);

        this.instance = choice;
        事件中心.isPause = true;
        音效中心.播放();
    },
    关闭抉择窗口(){
        this.instance.remove();
        this.instance = undefined;
        事件中心.isPause = false;
    }
}
抉择中心.初始化();