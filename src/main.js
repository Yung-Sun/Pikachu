import string from './css.js' //模块化

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

