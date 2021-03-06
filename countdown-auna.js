
setTimeout(function () {
    const COUNT_DOWN_CONTENT = `
        <style>
            .countdown-band {
                width: 100%;
                background-color: #0096AD; 
                display: flex;
                flex-flow: row wrap;
            }

            .countdown-band-left,
            .countdown-band-right {
                width: 55%;
                height: 48px;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
            }

            .countdown-band-left {
                position: relative;
                width: 45%;
                padding-left: 24px;
                padding-right: 24px;
                justify-content: flex-end;
            }

            .countdown-band-left::after{
                content: '';
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                width: 1px;
                height: 31px;
                background: #fff;
            }

            .countdown-band-right {
                padding-left: 16px;
            }

            .countdown-band-left p {
                position: relative;
                display: flex;
                flex-flow: column wrap;
            }

            .countdown-band-left p::before,
            .countdown-band-left p::after{
                content: '';
                position: absolute;
                top: 0;
                left: -13px;
                background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.92578 1V5' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5 2.92773H1' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
                background-repeat: no-repeat;
                background-size: contain;
                width: 8px;
                height: 8px;
            }

            .countdown-band-left p::after{
                top: auto;
                left: auto;
                bottom: 0;
                right: -8px;
            }

            .countdown-band-left span {
                font-size: 16px;
                font-weight: 500;
                line-height: 1.2;
                width: 100%;
                color: #fff;
            }

            .countdown-band-left span:nth-child(1),
            .countdown-band-right p:nth-child(1) {
                display: none;
            }

            .countdown-band-left span:nth-child(3) {
                font-size: 12px;
                font-weight: 400;
            }

            .countdown-counter{
                display: flex;
                flex-flow: row wrap;
            }

            .leaf {
                width: 30px;
                position: relative;
                text-align: center;
            }

            .dots {
                position: relative;
                width: 4px;
                height: 24px;
                font-size: 32px;
                color: #fff;
                margin: 0 6px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .dots::before{
                content: '';
                position: absolute;
                top: 8px;
                left: 0;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #fff;
            }

            .dots::after{
                content: '';
                position: absolute;
                bottom: 3px;
                left: 0;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #fff;
            }

            .box {
                display: block;
                width: 30px;
                height: 28px;
                text-align: center;
                perspective: 400px;
                position: relative;
            }

            .box .topLeaf,
            .box .bottomLeaf {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                height: 50%;
                perspective: 400px;
                overflow: hidden;
            }

            .box .topLeaf {
                align-items: flex-end;
                background: #FFFFFF;
                border-radius: 2px;
            }

            .box .bottomLeaf {
                align-items: flex-start;
                background: #E6F8FA;
                border-radius: 2px;
            }

            .box .topLeaf span {
                font-size: 16px;
                line-height: 1.2;
                font-weight: 600;
                color: #0D1436;
                transform: translateY(50%);
            }

            .box .bottomLeaf span {
                font-size: 16px;
                line-height: 1.2;
                font-weight: 600;
                color: #0D1436;
                transform: translateY(-50%);
            }

            .box .fold {
                top: 0;
                transform-origin: 50% 100%;
                align-items: flex-end;
                background: #FFFFFF;
                border-radius: 2px;
            }

            .box .fold span {
                font-size: 16px;
                line-height: 1.2;
                font-weight: 600;
                color: #0D1436;
                transform: translateY(50%);
            }

            .box .unfold {
                top: 50%;
                transform-origin: 50% 0%;
                background: #FCF7F9;
                align-items: flex-start;
                border-radius: 2px;
                transform: rotateX(90deg);
            }

            .box .unfold span {
                font-size: 16px;
                line-height: 1.2;
                font-weight: 600;
                color: #0D1436;
                transform: translateY(-50%);
            }

            .box .flipLeaf {
                position: absolute;
                left: 0;
                width: 30px;
                height: 14px;
                display: flex;
                justify-content: center;
                overflow: hidden;
            }

            .box.flip .fold {
                animation: fold 0.5s ease-in both;
            }

            .box.flip .unfold {
                animation: unfold 0.5s 0.5s ease-in both;
            }

            .label {
                font-size: 10px;
                font-weight: 500;
                line-height: 1;
                margin-top: 2px;
                color: #fff;
            }

            @keyframes unfold {
                0% {
                    transform: rotateX(90deg);
                }

                100% {
                    transform: rotateX(0deg);
                }
            }

            @keyframes fold {
                0% {
                    transform: rotateX(0deg);
                }

                100% {
                    transform: rotateX(-90deg);
                }
            }

            @media (min-width: 450px) {
                .countdown-band-left,
                .countdown-band-right{
                    width: 50%;
                }
            }
        
            @media (min-width: 1024px) {
                .countdown-band-left,
                .countdown-band-right{
                    height: 56px;
                }

                .label{
                    font-size: 12px;
                    margin-top: 4px;
                }
            }

            @media (min-width: 1280px){
                .countdown-band{
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='56' viewBox='0 0 1920 56' fill='none'%3E%3Crect width='1920' height='56' fill='%230096AD'/%3E%3Crect width='1920' height='56' fill='%230096AD'/%3E%3Cpath d='M4.5 46.777C34.0539 34.0249 138.469 24.0765 193.909 24.7033C263.207 25.4867 348.599 50.6942 413.094 46.777C464.689 43.6432 492.438 30.7604 499.863 24.7108C503.96 21.9184 509.52 14.2059 503.374 9.31039C500.74 7.62246 496.351 6.74138 491.961 11.9441C490.644 12.8891 490.644 15.8932 492.4 15.8932C494.156 15.8932 494.595 12.4501 489.767 9.31039C487.96 8.13549 482.043 7.18261 479.671 11.1332C476.285 16.7715 479.671 25.1799 493.717 30.3815C501.472 33.4543 535.418 38.7854 560 30.3815' stroke='white'/%3E%3Cpath d='M1919 47.5C1881.85 20.2679 1736 21.3859 1659.5 32.4166C1638.22 35.4857 1549.5 50.5291 1466 39.0291C1421.5 32.4166 1405 29.4996 1411 15.9964C1415 10.0003 1418.69 12.7371 1420 16.0003C1422 20.9984 1420 27 1409.5 29.9989C1406.9 30.7427 1399.87 33.7524 1388.89 32.4166C1388.78 32.4166 1372.78 30.4776 1362 21.3859' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M379.852 25V33' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M384 28.8549H376' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1531.85 22V30' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1536 25.8549H1528' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1748.85 36V44' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1753 39.8549H1745' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M110.852 34V42' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M115 37.8549H107' stroke='white' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }
                
                .countdown-band-left{
                    width: 55%;
                    padding-right: 16px;
                }

                .countdown-band-right{
                    width: 45%;
                    padding-left: 16px;
                }

                .countdown-band-left p{
                    display: block;
                }

                .countdown-band-left p::before, 
                .countdown-band-left p::after{
                    display: none;
                }

                .countdown-band-left span:nth-child(1), 
                .countdown-band-right p:nth-child(1){
                    display: initial;
                }

                .countdown-band-right p:nth-child(1){
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    margin-right: 16px;
                }

                .countdown-band-left span{
                    font-size: 24px !important;
                    font-weight: 600 !important;
                }

                .dots{
                    margin: 0 8px;
                }
            }

            @media (min-width: 1440px){
                .countdown-band-left{
                    padding-right: 24px;
                }

                .countdown-band-right{
                    padding-left: 24px;
                }
            }
        </style>

        <div class="countdown-band">
            <div class="countdown-band-left">
                <p>
                    <span>Oncocyber </span>
                    <span>40% de dscto. </span>
                    <span>por 12 meses</span>
                </p>
            </div>
            <div class="countdown-band-right">
                <p>??ltimos d??as:</p>
                <div class="countdown-counter">
                    <div class="leaf" id="days">
                        <div class="box">
                            <div class="topLeaf next"><span>-</span></div>
                            <div class="bottomLeaf number"><span>-</span></div>
                            <div class="fold flipLeaf number"><span>-</span></div>
                            <div class="unfold flipLeaf next"><span>-</span></div>
                        </div>
                        <div class="label"><span>D??AS</span></div>
                    </div>
                    <div class="dots"></div>
                    <div class="leaf" id="hours">
                        <div class="box">
                            <div class="topLeaf next"><span>-</span></div>
                            <div class="bottomLeaf number"><span>-</span></div>
                            <div class="fold flipLeaf number"><span>-</span></div>
                            <div class="unfold flipLeaf next"><span>-</span></div>
                        </div>
                        <div class="label"><span>HRS</span></div>
                    </div>
                    <div class="dots"></div>
                    <div class="leaf" id="minutes">
                        <div class="box">
                            <div class="topLeaf next"><span>-</span></div>
                            <div class="bottomLeaf number"><span>-</span></div>
                            <div class="fold flipLeaf number"><span>-</span></div>
                            <div class="unfold flipLeaf next"><span>-</span></div>
                        </div>
                        <div class="label"><span>MIN</span></div>
                    </div>
                    <div class="dots"></div>
                    <div class="leaf" id="seconds">
                        <div class="box">
                            <div class="topLeaf next"><span>-</span></div>
                            <div class="bottomLeaf number"><span>-</span></div>
                            <div class="fold flipLeaf number"><span>-</span></div>
                            <div class="unfold flipLeaf next"><span>-</span></div>
                        </div>
                        <div class="label"><span>SEG</span></div>
                    </div>
                </div>
            </div>
        </div>
    `
    const APP_HEADBAND_CONTAINER_ID = document.getElementById('APP_HEADBAND_CONTAINER_ID')
    if (APP_HEADBAND_CONTAINER_ID) {
        APP_HEADBAND_CONTAINER_ID.innerHTML = ''
        APP_HEADBAND_CONTAINER_ID.insertAdjacentHTML('beforeend', COUNT_DOWN_CONTENT)
    } else {
        const NEXT_CONTAINER = document.getElementById('__next')
        if (!NEXT_CONTAINER) return
        NEXT_CONTAINER.insertAdjacentHTML('beforebegin', `
            <div id="APP_HEADBAND_CONTAINER_ID">${COUNT_DOWN_CONTENT}</div>
        `)
    }

    const countDownDate = new Date("Jan 1, 2022 00:00:00")

    const counter = setInterval(function () {
        startCounter()
    }, 1000)

    const startCounter = function () {
        const now = new Date().getTime()
        const future = countDownDate.getTime() - (new Date().getTime() + 1000)
        const distance = countDownDate.getTime() - now
        const presentTime = getTime(distance)
        const futureTime = getTime(future)

        if (distance < 0) clearInterval(counter)

        // Present
        updateNumber('#days .number span', presentTime.days)
        updateNumber('#hours .number span', presentTime.hours)
        updateNumber('#minutes .number span', presentTime.minutes)
        updateNumber('#seconds .number span', presentTime.seconds)

        // Future
        updateNumber('#days .next span', futureTime.days)
        updateNumber('#hours .next span', futureTime.hours)
        updateNumber('#minutes .next span', futureTime.minutes)
        updateNumber('#seconds .next span', futureTime.seconds)

        resetBox()
    }

    const resetBox = function () {
        const boxes = document.querySelectorAll('.leaf .box')
        setTimeout(function () {
            boxes.forEach(function (elem) {
                elem.classList.remove('flip')
            })
        }, 900)
    }

    const getTime = function (mainTime) {
        return {
            days: Math.floor(mainTime / (1000 * 60 * 60 * 24)),
            hours: Math.floor((mainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((mainTime % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((mainTime % (1000 * 60)) / 1000)
        }
    }

    const updateNumber = function (selector, number) {
        document.querySelectorAll(selector).forEach(function (elem) {
            if (elem.innerText != number) {
                if (elem.parentNode.classList.contains('number') && elem.innerText != '') {
                    elem.parentNode.parentNode.classList.add('flip')
                }
                setTimeout(function () {
                    elem.innerText = number < 0 ? '-' : number
                }, !elem.classList.contains('next') ? 900 : 0)
            }
        })
    }

    startCounter()
}, 1500)
