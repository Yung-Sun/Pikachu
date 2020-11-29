// import string from './css.js' //模块化
const string = `.skin{
    position: relative;
}
.nose{
    border: 10px solid  #2e2e2e;
    border-color: #2e2e2e transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;   
    z-index: 1;
}
@keyframes wave{
    0%{transform: rotate(0deg);}
    33%{transform: rotate(5deg);}
    66%{transform: rotate(-5deg);}
    100%{transform: rotate(0deg);}
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 0.5s 1;
}
.circle{
    position: absolute;
    border: 1px solid #2e2e2e;
    width: 20px;
    height: 6px;   
    top: -16px;
    transform: translate(-50%);
    border-radius: 10px 10px 0 0;
    background:  #2e2e2e;
}

.eye{
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    background: white;   
    border: 2px solid black; 
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 2px;
}
.eye.left{
    transform: translate(-120px);
}
.eye.right{
    transform: translate(120px);
}
.mouth{
    position: absolute;
    width: 146px;
    height: 150px;   
    top: 150px;
    left: 50%;
    transform: translate(-50%);
    
}
.mouth .up .lip{
    border: 3px solid #2e2e2e;
    height: 30px;
    width: 70px;
    border-top-color: transparent;
    position: relative;
    /* top: -13px; */
    position: absolute;
    border-right-color: transparent;
    border-left-color: transparent;
    background: #ffe600;
}
.mouth .up .lip.left{
    left: 1px;
    transform: rotate(-20deg);
    border-radius: 0 0 0 50px;
 }
 .mouth .up .lip.right{
    right: 1px;
    transform: rotate(20deg);
    border-radius: 0 0 50px 0;
 }
 .mouth .up .lip::before{
    content: '';
    display: block;
    width: 5px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
 }
 .mouth .up .lip.left::before{
    right: -4px;
}
.mouth .up .lip.right::before{
    left: -4px;
}
.mouth .up .lip::after{
    content: '';
    position: absolute;
    display: block;
    width: 80px;
    height: 8px;
    top: -5px;
    background: #ffe600;
}
.mouth .up .lip.left::after{
    right: -4px;
}
.mouth .up .lip.right::after{
    left: -4px;
}
.mouth .down{
  /* border: 1px solid red;   */
  height: 160px;
  position: absolute;
  top: 15px;
  width: 100%;
  overflow: hidden;
  z-index: -1;
}
.mouth .down .circle1{
    border: 3px solid black;
    width: 125px;
    height: 800px;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%);    
    border-radius: 100px/450px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .circle1 .circle2{
    /* border:1px solid  green ; */
    height: 150px;
    width: 150px;
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    background: #ff485f;
}
.face{
    position: absolute;
    left: 50%;
    margin-left:-44px ;
    top: 190px;
    border: 2px solid black;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: #ff0000;
}
.face.left{
    transform: translateX(-180px);
}
.face.right{
    transform: translateX(180px);
} 

// 可以动动皮卡丘的鼻子~
`
const player = {
    n: 0,
    time: 50,
    id: undefined,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.run()

    },
    events: {
        '#btnPlay': 'run',
        '#btnPause': 'stop',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                let value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    codeShow: () => {
        player.n += 1
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
    },
    run: () => {
        player.stop()
        player.id = setInterval(player.codeShow, player.time)
    },
    stop: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.stop()
        player.time = 100
        player.run()
    },
    normal: () => {
        player.stop()
        player.time = 50
        player.run()
    },
    fast: () => {
        player.stop()
        player.time = 5
        player.run()
    }
}

player.init()

