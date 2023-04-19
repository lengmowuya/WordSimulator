let 属性 ={
    age:-1,
    health:1,
    寿命:65,
    isDie:false,
    isBorn:false,
    family:{
        sex:'男',
        father:true,
        mother:true,
        parter:false,
    },
    money:0,
}
function 设置属性(attr){
    for(let key in attr){
        // 触发中心.触发
        if(typeof attr[key] === 'number'){
            // 粗糙解决小数点问题
            属性[key] = Number(attr[key].toFixed(2));
        }else{
            属性[key] = attr[key];
        }
        
    }
    触发中心.检测触发(attr);
}