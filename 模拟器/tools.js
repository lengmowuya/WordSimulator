const tools = {
    随机数(min,max){
        return Math.floor(Math.random()*(max+1-min)+min);
    },
    async 载入文件(url){
        let data = await $.getJSON(url,(data)=>{
            // 词库管理器.挂载词库(data);
            let bag = new Promise((resolve,reject)=>resolve(data))
                bag.then(data=>{return data});
            
        })
        return data;
    }
}