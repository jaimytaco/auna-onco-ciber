
setTimeout(function () {
    const date = new Date('Dec 1, 2021 00:00:00').getTime()

    const COUNT_DOWN_CONTENT = `
        <style>
            .countdown-band {
                width: 100%;
                background-image: url("data:image/svg+xml,%3Csvg width='360' height='62' viewBox='0 0 360 62' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3907_51204)'%3E%3Crect y='-4' width='360' height='93' fill='%23003D88'/%3E%3Cpath d='M75.5076 90.6125C66.47 85.8069 63.7187 76.1818 61.0327 66.772C57.5514 54.577 53.9506 41.9888 36.8911 39.1176C34.5674 46.6797 28.4106 50.6968 20.7663 49.4495C15.2309 48.5466 12.1335 46.413 12.4944 43.7482C13.0194 39.7893 21.2826 36.445 34.1948 37.7152C34.8641 37.7807 35.5113 37.8581 36.1488 37.9538C36.2212 37.6705 36.2908 37.3779 36.3542 37.082C39.3052 23.0883 28.9048 -2.95711 -11.5523 -13.2863C-11.8255 -13.3609 -11.9975 -13.6407 -11.9283 -13.9178C-11.8592 -14.195 -11.5733 -14.3648 -11.2969 -14.2962C29.8575 -3.79255 40.3948 22.9221 37.3629 37.2887C37.3031 37.563 37.2433 37.8373 37.1713 38.1051C54.772 41.0914 58.4606 53.9852 62.0268 66.4765C66.2043 81.1136 70.1591 94.9338 96.0029 92.4069C104.906 91.5373 112.023 90.6285 122.431 86.8394C136.82 94.7359 144.034 84.6569 144.111 84.5565C144.275 84.3218 144.601 84.2676 144.834 84.4312C145.068 84.5947 145.125 84.9151 144.957 85.1559C144.887 85.2595 137.503 95.6009 122.785 87.8206C112.255 91.647 105.086 92.567 96.1024 93.4408C86.8519 94.3609 80.3009 93.1613 75.5076 90.6125ZM35.8592 38.9691C35.2831 38.8904 34.6944 38.8206 34.087 38.7566C21.2764 37.5012 13.9076 40.9287 13.5141 43.8901C13.2447 45.8973 16.0897 47.6377 20.9323 48.4312C28.0871 49.5987 33.6609 46.0015 35.8592 38.9691Z' fill='%230050B5'/%3E%3Cpath d='M329.417 57.9587C329.352 57.9587 329.281 57.9456 329.215 57.9194C319.84 53.7202 313.249 41.4367 312.812 27.3479C312.806 27.1974 312.871 27.0535 312.988 26.9554C313.106 26.8573 313.256 26.8246 313.406 26.8508C314.755 27.1386 316.144 27.2825 317.533 27.2825C321.731 27.2825 325.74 25.9874 329.137 23.5346C329.307 23.4103 329.541 23.4103 329.711 23.5346C333.107 25.9874 337.117 27.2825 341.315 27.2825C342.704 27.2825 344.086 27.1386 345.436 26.8508C345.579 26.8181 345.736 26.8573 345.853 26.9554C345.97 27.0535 346.035 27.1974 346.029 27.3479C345.592 41.4301 339.001 53.7137 329.626 57.9194C329.554 57.9456 329.489 57.9587 329.417 57.9587ZM313.823 27.93C314.41 41.2862 320.623 52.8569 329.424 56.9252C338.225 52.8503 344.438 41.2862 345.025 27.93C343.806 28.1524 342.561 28.2636 341.315 28.2636C337.032 28.2636 332.925 26.9751 329.43 24.5353C325.93 26.9751 321.829 28.2636 317.546 28.2636C316.287 28.2636 315.042 28.1524 313.823 27.93Z' fill='%230050B5'/%3E%3Cpath d='M328.934 45.6511C328.804 45.6511 328.68 45.5988 328.589 45.5072L324.494 41.3996C324.305 41.21 324.305 40.896 324.494 40.7063C324.683 40.5166 324.996 40.5166 325.185 40.7063L328.888 44.4215L336.184 35.2513C336.353 35.042 336.66 35.0028 336.868 35.1728C337.077 35.3429 337.116 35.6503 336.946 35.8596L329.312 45.4614C329.227 45.5726 329.097 45.6381 328.96 45.6446C328.954 45.6511 328.941 45.6511 328.934 45.6511Z' fill='%230050B5'/%3E%3Cpath d='M348.991 55.8666C338.483 61.0177 324.634 57.8272 323.978 57.675C257.439 41.4226 230.975 81.8582 213.467 108.616C206.836 118.757 201.59 126.763 195.789 129.607C195.549 129.725 195.252 129.623 195.134 129.382C195.016 129.141 195.117 128.844 195.357 128.726C200.919 126 206.094 118.087 212.651 108.076C230.312 81.0833 256.998 40.299 324.206 56.7182C324.378 56.7578 341.682 60.7459 351.919 52.9233C356.663 49.3009 359.819 40.917 360.845 24.4793C360.855 24.2046 361.081 23.9991 361.353 24.0045C361.627 24.0158 361.833 24.2427 361.828 24.5146C360.788 41.265 357.505 49.8933 352.512 53.7034C351.403 54.5527 350.22 55.264 348.991 55.8666Z' fill='%230050B5'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3907_51204'%3E%3Crect width='360' height='62' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                display: flex;
                flex-flow: row wrap;
            }

            .countdown-band-left,
            .countdown-band-right {
                width: 50%;
                height: 61px;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
            }

            .countdown-band-left {
                padding-left: 14px;
                padding-right: 8px;
                justify-content: flex-end;
            }

            .countdown-band-right {
                padding-left: 4px;
            }

            .countdown-band-left p {
                display: flex;
                flex-flow: column wrap;
            }

            .countdown-band-left span {
                font-size: 22px;
                font-weight: 600;
                line-height: 1.2;
                width: 100%;
                color: #fff;
            }

            .countdown-band-left span:nth-child(1),
            .countdown-band-right p:nth-child(1) {
                display: none;
            }

            .countdown-band-left span:nth-child(3) {
                font-size: 14px;
            }

            .countdown-digit {
                font-size: 21px;
                font-weight: 600;
                line-height: 1;
                color: #00B0CA;
                padding: 4px 6px;
                border-radius: 4px;
                background: #fff;
                text-align: center;
                display: flex;
                flex-flow: column wrap;
                align-items: center;
                justify-content: center;
            }

            .countdown-digit::after {
                content: attr(data-desc);
                font-size: 10px;
                line-height: 1;
            }

            .countdown-band-right .countdown-digit {
                margin-right: 8px;
            }

            .countdown-band-right .countdown-digit:last-child {
                margin-right: 0 !important;
            }

            @media (min-width: 375px) {
                .countdown-band-left {
                    padding-right: 7px;
                }

                .countdown-band-right {
                    padding-left: 7px;
                }
            }

            @media (min-width: 768px) {
                .countdown-band-left {
                    padding-right: 12px;
                }

                .countdown-band-right {
                    padding-left: 12px;
                }
            }

            @media (min-width: 1024px) {
                .countdown-band-left {
                    position: relative;
                    padding-right: 32px;
                    background-image: url("data:image/svg+xml,%3Csvg width='1360' height='60' viewBox='0 0 1360 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3907_51286)'%3E%3Crect x='305.608' y='105.668' width='365.761' height='171' rx='36' transform='rotate(-34.9439 305.608 105.668)' fill='%23E6EFFA'/%3E%3Crect x='-50' width='651' height='60' fill='%23E6EFFA'/%3E%3Cpath d='M101.823 66C89.599 66 81.3011 56.6503 73.193 47.5074C62.6846 35.6585 51.8297 23.432 32.2316 30.5342C34.0215 40.612 29.7818 48.9638 21.0221 52.1912C14.6791 54.5287 10.2167 53.9713 9.1032 50.6989C7.43703 45.8443 14.2749 36.98 28.6023 30.5701C29.3447 30.2375 30.0705 29.9318 30.7964 29.6531C30.7139 29.2845 30.6232 28.907 30.5242 28.5294C25.7896 10.7021 0.2197 -12.798 -48.2312 0.0128621C-48.5611 0.0937727 -48.8993 -0.121985 -48.9818 -0.481588C-49.0643 -0.841191 -48.8581 -1.20979 -48.5282 -1.29969C0.755845 -14.3353 26.8454 9.848 31.7037 28.1518C31.7945 28.5024 31.8852 28.853 31.9594 29.2036C52.1927 21.9037 63.3115 34.4269 74.0756 46.5635C86.6873 60.7858 98.6062 74.2079 124.44 55.5715C133.34 49.1526 140.335 43.7765 149.185 33.0963C162.787 16.6894 164.742 0.750048 164.766 0.588226C164.808 0.219633 165.121 -0.0410733 165.459 0.0038771C165.797 0.0488275 166.037 0.381457 165.995 0.75904C165.979 0.920861 163.991 17.2648 150.109 34.0043C141.151 44.8014 134.107 50.2224 125.125 56.6953C115.887 63.3839 108.306 66 101.823 66ZM31.0603 30.9927C30.4087 31.2534 29.7489 31.5321 29.0725 31.8287C14.8606 38.1937 9.01246 46.6084 10.258 50.2404C11.0993 52.7037 15.075 52.9644 20.6262 50.9236C28.825 47.903 32.6853 40.3873 31.0603 30.9927Z' fill='%2399B9E1'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3907_51286'%3E%3Crect width='1360' height='60' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-color: #e6effa;
                }

                .countdown-band-left::after {
                    content: '';
                    position: absolute;
                    top: -1px;
                    right: -1px;
                    width: 21px;
                    height: 88px;
                    background-color: #003d88;
                    background-image: url("data:image/svg+xml,%3Csvg width='21' height='60' viewBox='0 0 21 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_298_4' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='21' height='60'%3E%3Crect width='21' height='60' fill='%23E6EFFA'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_298_4)'%3E%3Crect x='-377' y='99.4775' width='365.76' height='171' rx='36' transform='rotate(-34.94 -377 99.4775)' fill='%23E6EFFA'/%3E%3C/g%3E%3C/svg%3E%0A");
                    background-repeat: no-repeat;
                    background-size: cover;
                    z-index: 2;
                }

                .countdown-band-left p,
                .countdown-band-left span {
                    position: relative;
                    z-index: 3;
                    display: initial;
                    color: #003D88;
                }

                .countdown-band-left span {
                    width: auto;
                    font-size: 22px !important;
                }

                .countdown-band-left span:nth-child(1) {
                    display: initial;
                }

                .countdown-band-right {
                    padding-left: 10px;
                    background-image: url("data:image/svg+xml,%3Csvg width='696' height='60' viewBox='0 0 696 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3907_51310)'%3E%3Crect x='-664' width='1360' height='60' fill='%23003D88'/%3E%3Cpath d='M656.623 43.872C656.558 43.872 656.486 43.8577 656.421 43.8292C647.046 39.2483 640.455 25.848 640.018 10.4784C640.012 10.3143 640.077 10.1573 640.194 10.0503C640.311 9.94325 640.461 9.90758 640.611 9.93612C641.961 10.2501 643.349 10.407 644.738 10.407C648.937 10.407 652.946 8.99424 656.343 6.31848C656.512 6.1829 656.747 6.1829 656.916 6.31848C660.313 8.99424 664.322 10.407 668.521 10.407C669.91 10.407 671.292 10.2501 672.641 9.93612C672.785 9.90044 672.941 9.94324 673.058 10.0503C673.176 10.1573 673.241 10.3143 673.234 10.4784C672.798 25.8409 666.206 39.2411 656.832 43.8292C656.76 43.8577 656.695 43.872 656.623 43.872ZM641.029 11.1135C641.615 25.6839 647.828 38.3064 656.629 42.7446C665.431 38.2992 671.644 25.6839 672.23 11.1135C671.011 11.3561 669.766 11.4774 668.521 11.4774C664.238 11.4774 660.13 10.0717 656.636 7.41019C653.135 10.0717 649.034 11.4774 644.751 11.4774C643.493 11.4774 642.248 11.3561 641.029 11.1135Z' fill='%23E6F8FA'/%3E%3Cpath d='M656.14 30.4454C656.01 30.4454 655.886 30.3883 655.795 30.2884L651.7 25.8074C651.511 25.6005 651.511 25.258 651.7 25.0511C651.889 24.8441 652.202 24.8441 652.391 25.0511L656.095 29.104L663.39 19.1002C663.559 18.8718 663.866 18.829 664.074 19.0145C664.283 19.2001 664.322 19.5354 664.153 19.7638L656.518 30.2385C656.434 30.3598 656.303 30.4311 656.166 30.4383C656.16 30.4454 656.147 30.4454 656.14 30.4454Z' fill='%23E6F8FA'/%3E%3Cpath d='M487.463 28.1374C499.115 29.3159 510.926 20.6931 511.485 20.2838C567.903 -22.0864 607.011 8.88477 632.886 29.3809C642.688 37.1514 650.436 43.2809 656.87 43.9316C657.136 43.9585 657.377 43.7392 657.402 43.4479C657.427 43.1566 657.226 42.8928 656.96 42.8658C650.793 42.2421 643.144 36.1799 633.457 28.5143C607.355 7.83753 567.917 -23.4035 510.932 19.3966C510.785 19.5036 496.028 30.2792 483.68 26.2714C477.958 24.4171 472.028 17.0918 465.227 0.72816C465.12 0.452147 464.836 0.330239 464.584 0.440939C464.332 0.558744 464.22 0.869921 464.321 1.14528C471.246 17.8224 477.381 25.3477 483.403 27.2968C484.741 27.7331 486.1 27.9995 487.463 28.1374Z' fill='%23E6F8FA'/%3E%3Cpath d='M826.529 76.4446C814.827 76.4446 803.796 86.2201 803.275 86.6839C766.682 90.9188 713.121 68.3821 685.622 50.5793C675.204 43.8292 662.97 42.8699 656.509 42.8699C656.242 42.8699 656.021 43.1125 656.021 43.405C656.021 43.6976 656.242 43.9402 656.509 43.9402C662.703 43.9402 674.833 44.8425 685.127 51.4998C712.867 69.4595 766.78 92.2317 803.901 87.5116C804.037 87.3903 817.819 75.1746 830.454 77.9217C836.309 79.1918 841.068 83.4873 844.582 90.6797C844.712 90.9437 845.005 91.0365 845.247 90.9009C845.488 90.7582 845.573 90.4371 845.449 90.1731C841.785 82.681 836.804 78.2071 830.643 76.8728C829.274 76.5731 827.898 76.4446 826.529 76.4446Z' fill='%23E6F8FA'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3907_51310'%3E%3Crect width='696' height='60' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: right;
                    background-color: #003d88;
                }

                .countdown-band-right p:nth-child(1) {
                    display: block;
                    font-size: 22px;
                    font-weight: 500;
                    line-height: 1.2;
                    color: #fff;
                    margin-right: 20px;
                }

                .countdown-digit {
                    font-size: 22px;
                    min-width: 42px;
                }

                .countdown-band-right .countdown-digit {
                    margin-right: 12px;
                }
            }

            @media (min-width: 1280px) {
                .countdown-band-left span,
                .countdown-band-right p:nth-child(1),
                .countdown-digit {
                    font-size: 24px !important;
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
                <p class="countdown-digit" data-desc="D??AS">-</p>
                <p class="countdown-digit" data-desc="HRS">-</p>
                <p class="countdown-digit" data-desc="MIN">-</p>
                <p class="countdown-digit" data-desc="SEG">-</p>
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

    const daysP = document.querySelector('.countdown-digit[data-desc="D??AS"]')
    const hoursP = document.querySelector('.countdown-digit[data-desc="HRS"]')
    const minutesP = document.querySelector('.countdown-digit[data-desc="MIN"]')
    const secondsP = document.querySelector('.countdown-digit[data-desc="SEG"]')

    const interval = setInterval(function () {
        const now = new Date().getTime()
        const distance = date - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        daysP.textContent = `${days}`
        hoursP.textContent = `${hours}`
        minutesP.textContent = `${minutes}`
        secondsP.textContent = `${seconds}`

        if (distance < 0) {
            clearInterval(interval)
            daysP.textContent = '0'
            hoursP.textContent = '0'
            minutesP.textContent = '0'
            secondsP.textContent = '0'
        }
    }, 1000)
}, 1500)
