let 音效中心 = {
    controller:undefined,
    初始化(){
        this.controller = document.querySelector('audio');
    },
    播放(){
        this.controller.play();
    }
}
音效中心.初始化();