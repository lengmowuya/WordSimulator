let Attr ={
    _age:-1,
    get age(){
        return this._age;
    },
    set age(value){
        console.log();
        this._age = value;
        页面管理器.添加词条("年龄:"+value);
    },
    _health:0.2,
    get health(){
        return this._health;
    },
    set health(value){
        if(value>= this._health){
            页面管理器.添加词条("体质+"+(value-this._health).
            toFixed(1)+` (${value.toFixed(1)})`);
        }else{
            页面管理器.添加词条("体质"+(value-this._health).toFixed(1)+` (${value.toFixed(1)})`);
        }
        this._health = value;
    },
    life:65,
    isDie:false,
    isBorn:false,
    
}


function 随机数(min,max){
    return Math.floor(Math.random()*(max+1-min)+min);
}