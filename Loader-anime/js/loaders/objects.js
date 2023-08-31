export const OBJECTS = [
  {
    id: "heading",
    html: `<div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" id="objects"
                            data-wow-delay="0.3s">
                            <h6 class="position-relative d-inline text-primary ps-4">Loader Animation</h6>
                            <h2 class="mt-2">OBJECTS</h2>
                        </div>`,
    css: ` `,
  },

  {
    id: "linQbFll",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  font-size: 16px;
  width:  5.5em;
  height: 5.5em;
  }
  .loader:before{
    content: '';
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 100%;
    width: 4px;
    background: #fff;
    left: 50%;
    top: 50%;
  }
  .loader:after{
    content: '';
    position: absolute;
    left: 0.2em;
    bottom: 0.18em;
    width: 1em;
    height: 1em;
    background-color: #de3500;
    border-radius: 15%;
    animation: rollingRock 2.5s cubic-bezier(.79, 0, .47, .97) infinite;
  }
@keyframes rollingRock {
  0% {transform: translate(0, -1em) rotate(-45deg)}
  5% {transform: translate(0, -1em) rotate(-50deg)}
  20% {transform: translate(1em, -2em) rotate(47deg)}
  25% {transform: translate(1em, -2em) rotate(45deg)}
  30% {transform: translate(1em, -2em) rotate(40deg)}
  45% {transform: translate(2em, -3em) rotate(137deg)}
  50% {transform: translate(2em, -3em) rotate(135deg)}
  55% {transform: translate(2em, -3em) rotate(130deg)}
  70% {transform: translate(3em, -4em) rotate(217deg)}
  75% {transform: translate(3em, -4em) rotate(220deg)}
  100% {transform: translate(0, -1em) rotate(-225deg)}
}
      `,
  },
  {
    id: "pngPong",
    html: `<span class="loader"></span>`,
    css: `.loader {
  position: relative;
  height: 40px;
  width: 6px;
  color: #FFF;
  animation: paddles 0.75s ease-out infinite;
}
.loader:before {
  content: "";
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 15px;
  width: 12px;
  height: 12px;
  background-color: #de3500;
  border-radius: 50%;
  animation: ballbounce 0.6s ease-out infinite;
}

@keyframes paddles {
  0% { box-shadow: -25px -10px, 25px 10px}
  50% { box-shadow: -25px 8px, 25px -10px }
  100% { box-shadow: -25px -10px, 25px 10px}
}
@keyframes ballbounce {
  0% { transform: translateX(-20px) scale(1, 1.2) }
  25% { transform: scale(1.2, 1) }
  50% { transform: translateX(15px) scale(1, 1.2) }
  75% { transform: scale(1.2, 1) }
  100% { transform: translateX(-20px) }
}
      `,
  },

  {
    id: "brckBblUp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    color: #fff;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 78px;
    opacity: 0.8;
  }
  .loader:before {
    content: "{";
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }
  .loader:after {
    content: "}";
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }

  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
      `,
  },
  {
    id: "wifiLd",
    html: `<span class="loader"></span>`,
    css: `.loader, .loader:before {
	display: inline-block;
	border: 20px double transparent;
	border-top-color: #fff;
	border-radius: 50%;
  position: relative;
  box-sizing: border-box;
}
.loader {
	padding: 8px;
  animation: wifiLoading 1s ease-in infinite;
  top: 30px;

}
.loader:before {
	content: '';
	width: 0; height: 0;
}
@keyframes wifiLoading {
  0% { border-style: none}
  100% { border-style: double;
   }
}
      `,
  },

  {
    id: "packManEt2Xb",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
        border: 24px solid #FFF;
        border-radius: 50%;
        box-sizing: border-box;
        animation: eat 1s linear infinite;
      }
      .loader::after , .loader::before {
        content: '';
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        box-sizing: border-box;
        opacity: 0;
        animation: move 2s linear infinite;
      }

      .loader::before {
        animation-delay: 1s;
      }

      @keyframes eat {
        0% , 49% { border-right-color: #FFF }
        50% , 100% { border-right-color: #0000 }
      }
      @keyframes move {
        0% { left: 75px ; opacity: 1}
        50% { left: 0px; opacity: 1 }
        52%, 100% { left: -5px; opacity: 0; }
      }
`,
  },



  {
    id: "navigator2SpinLding",
    html: `<span class="loader"></span>`,
    css: `.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background: #FFF;
      border-radius: 50%;
      transform: rotate(45deg);
      animation: rotate 2s linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 15px;
      height: 30px;
      background:#d80032;
      transform: skew(5deg , 60deg) translate(-50%, -5%);
    }

    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #FFF;
      transform:translate(-50% , -50%);
    }

    @keyframes rotate {
      0% { transform: rotate(45deg)}
      30% , 50% , 70%  { transform: rotate(230deg)}
      40% , 60% , 80% { transform: rotate(240deg)}
      100% {  transform: rotate(245deg)}
   }
  `,
  },


  {
    id: "fillSandClock",
    html: `<span class="loader"></span>`,
    css: `.loader {
  box-sizing: border-box;
  display: inline-block;
  width: 50px;
  height: 80px;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  position: relative;
  background: linear-gradient(#d80032 30px, transparent 0) no-repeat;
  background-size: 2px 40px;
  background-position: 50% 0px;
  animation: spinx 5s linear infinite;
}
.loader:before, .loader:after {
  content: "";
  width: 40px;
  left: 50%;
  height: 35px;
  position: absolute;
  top: 0;
  transform: translatex(-50%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 0 20px 20px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 0 0px;
  animation: lqt 5s linear infinite;
}
.loader:after {
  top: auto;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  animation: lqb 5s linear infinite;
}
@keyframes lqt {
  0%, 100% {
    background-image: linear-gradient(#d80032 40px, transparent 0);
    background-position: 0% 0px;
  }
  50% {
    background-image: linear-gradient(#d80032 40px, transparent 0);
    background-position: 0% 40px;
  }
  50.1% {
    background-image: linear-gradient(#d80032 40px, transparent 0);
    background-position: 0% -40px;
  }
}
@keyframes lqb {
  0% {
    background-image: linear-gradient(#d80032 40px, transparent 0);
    background-position: 0 40px;
  }
  100% {
    background-image: linear-gradient(#d80032 40px, transparent 0);
    background-position: 0 -40px;
  }
}
@keyframes spinx {
  0%, 49% {
    transform: rotate(0deg);
    background-position: 50% 36px;
  }
  51%, 98% {
    transform: rotate(180deg);
    background-position: 50% 4px;
  }
  100% {
    transform: rotate(360deg);
    background-position: 50% 36px;
  }
}
    `,
  },


  {
    id: "lookingEyesmove",
    html: `<span class="loader"></span>`,
    css: `.loader {
            position: relative;
            width: 108px;
            display: flex;
            justify-content: space-between;
          }
          .loader::after , .loader::before  {
            content: '';
            display: inline-block;
            width: 48px;
            height: 48px;
            background-color: #FFF;
            background-image:  radial-gradient(circle 14px, #0d161b 100%, transparent 0);
            background-repeat: no-repeat;
            border-radius: 50%;
            animation: eyeMove 10s infinite , blink 10s infinite;
          }
          @keyframes eyeMove {
            0%  , 10% {     background-position: 0px 0px}
            13%  , 40% {     background-position: -15px 0px}
            43%  , 70% {     background-position: 15px 0px}
            73%  , 90% {     background-position: 0px 15px}
            93%  , 100% {     background-position: 0px 0px}
          }
          @keyframes blink {
            0%  , 10% , 12% , 20%, 22%, 40%, 42% , 60%, 62%,  70%, 72% , 90%, 92%, 98% , 100%
            { height: 48px}
            11% , 21% ,41% , 61% , 71% , 91% , 99%
            { height: 18px}
          }
`,
  },


  {
    id: "h7vm0fttsne",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background-color: #FFF;
  background: radial-gradient(ellipse at center, #d80032 0%, #d80032 14%, #FFF 15%, #FFF 100%);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
.loader::after,
.loader::before {
  content: '';  
  position: absolute;
  height: 16px;
  width: 4px;
  background: #d80032;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  transform-origin: 25% 0;
  box-sizing: border-box;
  animation: rotation 10s linear infinite;
}
.loader::before {
  height: 22px;
  width: 2px;
  transform: translateX(-50%) rotate(0deg);
  animation-duration: 1s;
} 
@keyframes rotation {
  0%    { transform: rotate(0deg)}
  100%  { transform: rotate(360deg)}
} 
`,
  },

  {
    id: "52ma1rva0kd",
    note: 'Set background',
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 60px;
  height: 40px;
  position: relative;
  display: inline-block;
  --base-color: #263238; /*use your base color*/
}
.loader::before {
  content: '';  
  left: 0;
  top: 0;
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #FFF;
  background-image: radial-gradient(circle 8px at 18px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, var(--base-color) 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 3s linear infinite;
}
.loader::after {
  content: '';  
  left: 35px;
  top: 15px;
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #FFF;
  background-image: radial-gradient(circle 5px at 12px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, var(--base-color) 100%, transparent 0);
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: rotationBack 4s linear infinite reverse;
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}  `,
  },




  {
    id: "n4oiol4um1g",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 24px;
  display: inline-block;
  position: relative;
  border: 1px solid #FFF;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #FFF;
  width: 5px;
  height: 12px;
}
.loader::before {
  content: '';  
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  height: 80%;
  width: 6px;
  box-sizing: border-box;
  animation: animloader  2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 11px 0 white, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  75% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 white;
  }
}
    `,
  },



  {
    id: "ofqzm8c3y98",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 40px;
  margin-top: 30px;
  display: inline-block;
  position: relative;
  background: #FFF;
  border-radius: 15% 15% 35% 35%;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 45px;
  top: 8px;
  border: 4px solid #FFF;
  width: 16px;
  height: 20px;
  border-radius: 0 4px 4px 0;
}
.loader::before {
  content: '';  
  position: absolute;
  width: 1px;
  height: 10px;
  color: #FFF;
  top: -15px;
  left: 11px;
  box-sizing: border-box;
  animation: animloader 1s ease infinite;
}

@keyframes animloader {
    0% {
  box-shadow: 2px 0px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0.3), 20px 0px rgba(255, 255, 255, 0);
}
    50% {
  box-shadow: 2px -5px rgba(255, 255, 255, 0.5), 12px -3px rgba(255, 255, 255, 0.5), 20px -2px rgba(255, 255, 255, 0.6);
}
    100% {
  box-shadow: 2px -8px rgba(255, 255, 255, 0), 12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0);
}
  }`,
  },



  {
    id: "9p7nroeguim",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  background: #d80032;
  display: block;
  margin: 20px auto;
  position: relative;
  box-sizing: border-box;
  animation: rotationBack 1s ease-in-out infinite reverse;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  left: 0;
  top: 0;
  transform: rotate(45deg);
  position: absolute;
  width: 48px;
  height: 48px;
  background: #d80032;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #FFF;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
`,
  }, {
    id: "cctrtq4l314",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 60px;
  height: 60px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
  background-size: 20px 20px , 20px auto;
  background-repeat: repeat-x;
  background-position: center bottom, center -5px;
  box-sizing: border-box;
}
.loader::before,
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: -20px;
  top: 0;
  width: 20px;
  height: 60px;
  background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
  background-size: 20px 20px , 20px auto;
  background-repeat: no-repeat;
  background-position: center bottom, center -5px;
  transform: rotate(0deg);
  transform-origin: 50% 0%;
  animation: animPend 1s linear infinite alternate;
}
.loader::after {
  animation: animPend2 1s linear infinite alternate;
  left: 100%;
}

@keyframes animPend {
  0% {
    transform: rotate(22deg);
  }
  50% {
    transform: rotate(0deg);
  }
}

@keyframes animPend2 {
  0%, 55% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-22deg);
  }
}
`,
  },


  {
    id: "anbeLighup",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 4px;
  height: 86px;
  background: #fff;
  margin: auto;
  position: relative;
  animation: shake 1s linear infinite alternate,
             lightup 1s linear infinite;
  transform-origin: 0 0;
}

.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 32px;
  height: 16px;
  box-sizing:border-box;
  border: 5px solid #d80032;
  border-top: none;
  border-radius: 0 0 20px 20px;
}
.loader::after {
  content: '';
  left: 50%;
  bottom: 0;
  position: absolute;
  transform: translateX(-50%);
  width: 64px;
  height: 32px;
  border-radius: 50px 50px 0 0;
  background: #fff;
}

@keyframes shake {
  0% { transform: rotate(10deg)  }
  100% { transform: rotate(-10deg)  }
}
@keyframes lightup {
  0% ,20% , 40% {
    opacity: 0
  }
  10%, 30% , 50% , 100% {
    opacity: 1
  }
}
    `
  },



  {
    id: "2hmjm05ufjc",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 24px;
  height: 80px;
  display: block;
  margin: 35px auto 0;
  border: 1px solid #FFF;
  border-radius: 0 0 50px 50px;
  position: relative;
  box-shadow: 0px 0px #d80032 inset;
  background-image: linear-gradient(#d80032 100px, transparent 0);
  background-position: 0px 0px;
  background-size: 22px 80px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  border: 1px solid #FFF;
  border-radius: 50%;
  width: 28px;
  height: 6px;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  left: 0;
  bottom: -4px;
  border-radius: 50%;
  position: absolute;
  width: 6px;
  height: 6px;
  animation: animloader1 6s linear infinite;
}

@keyframes animloader {
  0% {
    background-position: 0px 80px;
  }
  100% {
    background-position: 0px 0px;
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 4px -10px rgba(255, 255, 255, 0), 6px 0px rgba(255, 255, 255, 0), 8px -15px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0);
  }
  20% {
    box-shadow: 4px -20px rgba(255, 255, 255, 0), 8px -10px rgba(255, 255, 255, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 255, 255, 0);
  }
  40% {
    box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 255, 255, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5);
  }
  60% {
    box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 255, 255, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5);
  }
  80% {
    box-shadow: 2px -80px rgba(255, 255, 255, 0.5), 4px -70px rgba(255, 255, 255, 0.4), 8px -120px rgba(255, 255, 255, 0), 12px -35px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 4px -100px rgba(255, 255, 255, 0), 8px -90px rgba(255, 255, 255, 0), 10px -120px rgba(255, 255, 255, 0), 15px -45px rgba(255, 255, 255, 0);
  }
}

`,
  },



  {
    id: "mouseScrDwn",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 78px;
  box-sizing: border-box;
  border: 2px solid #fff;
  position: relative;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
}

.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50% , 50%);
  width: 10px;
  height: 10px;
  background: #FFF;
  border-radius: 50%;
  animation: fadeDown 1s ease-out infinite;
}

@keyframes fadeDown {
  0% {
    top: 0%;
    opacity: 1;
  }
  100% {
    top: 60%;
    opacity: 0;
  }
}
`,
  },
  {
    id: "mouseLnScrDwn",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 78px;
  position: relative;
  box-sizing: border-box;
  border: 2px solid #fff;
  margin: auto;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
}
.loader::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 10px;
  animation: scrollDown 1.5s linear infinite;
}
@keyframes scrollDown {
  0% {
    top: 15px;
    height: 4px;
    opacity: 1;
  }
  33% {
    top: 15px;
    height: 40px;
  }
  66% {
    top: 50px;
    height: 10px;
    opacity: 1;
  }
  100% {
    top: 56px;
    height: 4px;
    opacity: 0;
  }
}
`,
  },

]