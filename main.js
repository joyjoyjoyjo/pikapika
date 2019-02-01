!function () {
    var duration = 50
    function writeCode(prefix, code, fn) {
        let container = document.querySelector(`#code`)
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call
            }
        }, duration)
    }
    let code = `
    /*
     *先准备皮卡丘的皮
     */
    .preview {       
        height: 100%;
        background: #FEE433;
        display: flex;
        justify-content: center;
        align-items: center;   
    }
    
    .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*
     *皮卡丘的鼻子
     */
    .nose {
        width: 0px;
        height: 0px;
        border: 11px solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-48%);
    }
    /*
    *皮卡丘的眼睛
    */
    .eye {
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solide black;
    }
    
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        border-radius: 50%;
        background: white;
        left: 6px;
        top: 2px;
        border: 2px solid #000;
    }
    
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    /*
    *加点腮红
    */
    .face {
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    
    .face.left {
        right: 50%;
        margin-right: 116px;
    }
    
    .face.right {
        left: 50%;
        margin-left: 116px;
    }
    /*
    *嘴巴也要上线
    */
    .upperLip {
        height: 25px;
        width: 80px;
        border: 2px solid black;
        transform: rotate(-20deg);
        position: absolute;
        top: 45px;
        background: #FEE433;
    }
    
    .upperLip.left {
        border-bottom-left-radius: 40px 23px;
        border-top: none;
        border-right: none;
        right: 50%;
    }
    
    .upperLip.right {
        left: 50%;
        border-bottom-right-radius: 40px 23px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    
    .lowerlipWrapper {
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        height: 110px;
        overflow: hidden;
        width: 300px;
    }
    
    .lowerlip {
        background: #990513;
        width: 300px;
        height: 3500px;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    
    .lowerlip::after {
        content: '';
        bottom: -20px;
        position: absolute;
        width: 100px;
        height: 100px;
        background: #FC4A62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    }
    /*
    *一个皮卡丘画好了~~
    */`
    writeCode('', code)
    $(`.actions`).on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr(`data-speed`)
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case'slow':
            duration = 80
            break
            case'normal':
            duration = 50
            break
            case'fast':
            duration = 10
        }

    })
}.call()