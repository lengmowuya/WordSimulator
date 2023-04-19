let Trigger = {
    初始化(){
        属性触发器挂载();
    }
}
function 属性触发器挂载(){
    触发中心.触发时('age',(val)=>{
        添加词条(`<span style="color:gray;font-size:12px">年龄:${val}</span>`,true);
    })
    触发中心.触发时('health',()=>{
        界面.更新();
    })
    触发中心.触发时('年龄段',(val)=>{
        if(val=='中年'){
        }else{
        }
    })
    词库响应('少年','age',val=>val>=6 && val<18);
    词库响应('青年','age',val=>val>=18 && val<30);
    词库响应('结婚','isMarried',val=>!val);
    词库响应('带娃','hasChild',val=>val);
    词库响应('世界随机词条','age',val=>val>=30);
    词库响应('农村学校','isStudent',val=>{
        if(val && 属性.家境 <= 3) return true;
    });
    词库响应('贵族学校','isStudent',val=>{
        if(val && 属性.家境 > 3) return true;
    });
    词库响应('社畜','isWork',val=>{
        if(val && !属性.isStudent) return true;
    });
    词库响应('贫穷幼童',['age','家境'],val=>{
        if(属性.age>=0 && 属性.age<6 && 属性.家境 <= 3) return true;
    });
    词库响应('幼童',['age','家境'],val=>{
        if(属性.age>=0 && 属性.age<6 && 属性.家境 > 3) return true;
    });
}

export default Trigger;