export const RECT = [
  {
    id: "heading",
    html: `<div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" id="rect"
                            data-wow-delay="0.3s">
                            <h6 class="position-relative d-inline text-primary ps-4">Loader Animation</h6>
                            <h2 class="mt-2">RECTANGLE</h2>
                        </div>`,
    css: ` `,
  },

  {
    id: "778qvxwuxps",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  animation: rotation 2s ease-in-out infinite;
}
.loader::after {
  border-color: #d80032;
  animation-delay: 1s;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `,
  }, {
    id: "9j8u5jers2t",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: scaleOut 2s ease-in-out infinite;
}
.loader::after {
  border-color: #d80032;
  animation-delay: 1s;
}

@keyframes scaleOut {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}`,
  },

  {
    id: "jcffa36l7ol",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  border: 2px solid #FFF;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid #d80032;
  width: 38px;
  height: 38px;
  animation: rotationBack 1.5s linear infinite;
  transform-origin: center center;
}
.loader::before {
  width: 28px;
  height: 28px;
  border-color: #FFF;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
  },



  {
    id: "tcrxas6ttns",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
  animation: flipX 1s linear infinite;
}

@keyframes flipX {
  0% {
    transform: perspective(200px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
  }
}
    `,
  }, {
    id: "l3vyieqr44p",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  color: #FFF;
  border: 1px solid;
  box-sizing: border-box;
  animation: fill 2s linear infinite alternate;
}

@keyframes fill {
  0% {
    box-shadow: 0 0  inset;
  }
  100% {
    box-shadow: 0 -48px inset;
  }
}
    `,
  },



  {
    id: "sqrRotTrfCrln",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  background: #fff;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.2);
    border-radius: 10%;
  }
  50% {
    transform: rotate(180deg) scale(1.5);
    border-radius: 50%;
  }
  100% {
    transform: rotate(360deg) scale(0.2);
    border-radius: 10%;
  }
}
  `,
  },


  {
    id: "nyvy2vxxdig",
    html: `<span class="loader"></span>`,
    css: `.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  transform: rotate(45deg);
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  top: -24px;
  animation: animloader 4s ease infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  animation: animloader2 2s ease infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  12% {
    box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  37% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
  }
  62% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px white, 24px 48px white, 0px 48px white;
  }
  75% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px white, 0px 48px white;
  }
  87% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px white;
  }
  100% {
    box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
}

@keyframes animloader2 {
  0% {
    transform: translate(0, 0) rotateX(0) rotateY(0);
  }
  25% {
    transform: translate(100%, 0) rotateX(0) rotateY(180deg);
  }
  50% {
    transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
  }
  75% {
    transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
  }
  100% {
    transform: translate(0, 0) rotateX(0) rotateY(360deg);
  }
}
    `,
  },


  {
    id: "sqr4xmlt2clrRotSpn",
    html: `<span class="loader"></span>`,
    css: `.loader {
        width: 64px;
        height: 64px;
        position: relative;
        background-image:
          linear-gradient(#FFF 16px, transparent 0) ,
          linear-gradient(#d80032 16px, transparent 0) ,
          linear-gradient(#d80032 16px, transparent 0) ,
          linear-gradient(#FFF 16px, transparent 0);
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: left top , left bottom , right top , right bottom;
        animation: rotate 1s linear infinite;
      }
      @keyframes rotate {
        0% {
          width: 64px;
          height: 64px;
          transform: rotate(0deg)
        }
        50% {
          width: 30px;
          height: 30px;
          transform: rotate(180deg)
        }
        100% {
          width: 64px;
          height: 64px;
          transform: rotate(360deg)
        }
      }
    `,
  },



  {
    id: "sqrFlwupShdw67",
    html: `<span class="loader"></span>`,
    css: `.loader {
        height: 5px;
        width: 5px;
        color: #fff;
        box-shadow: -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px,
                    -10px -10px 0 5px;
        animation: loader-38 6s infinite;
      }

      @keyframes loader-38 {
        0% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px;
        }
        8.33% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px -10px 0 5px;
        }
        16.66% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px;
        }
        24.99% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        33.32% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px -10px 0 5px;
        }
        41.65% {
          box-shadow: 10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px -10px 0 5px;
        }
        49.98% {
          box-shadow: 10px 10px 0 5px,
                    10px 10px 0 5px,
                    10px 10px 0 5px,
                    10px 10px 0 5px;
        }
        58.31% {
          box-shadow: -10px 10px 0 5px,
                      -10px 10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        66.64% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        74.97% {
          box-shadow: -10px -10px 0 5px,
                      10px -10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        83.3% {
          box-shadow: -10px -10px 0 5px,
                      10px 10px 0 5px,
                      10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        91.63% {
          box-shadow: -10px -10px 0 5px,
                      -10px 10px 0 5px,
                      -10px 10px 0 5px,
                      -10px 10px 0 5px;
        }
        100% {
          box-shadow: -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px,
                      -10px -10px 0 5px;
        }
      }

    `,
  },


  {
    id: "brix-shake-clr",
    html: `<span class="loader"></span>`,
    css: `.loader {
          width: 48px;
          height: 48px;
          display: flex;
          animation : rotate 2s linear infinite;
        }
        .loader:before,
        .loader:after {
          content:"";
          flex:1;
          background:#fff;
          animation: mvx 0.5s infinite linear alternate;
        }
        .loader:before {
          background: #d80032;
          animation-name:mvrx;
        }

        @keyframes rotate {
          100% {transform: rotate(360deg)}
        }
        @keyframes mvx {
          0% , 40% {transform: translateX(0px)}
          20% , 60% {transform: translateX(8px)}
          100% {transform: translateX(15px)}
        }
        @keyframes mvrx {
          0% , 40% {transform: translateX(0px)}
          20% , 60% {transform: translateX(-8px)}
          100% {transform: translateX(-15px)}
        }

    `,
  },


  {
    id: "stackLyrXp",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width:  48px;
    height: 48px;
    background: #d80032;
    transform: rotateX(65deg) rotate(45deg);
    // remove bellows command for perspective change
    //transform: perspective(200px) rotateX(65deg) rotate(45deg); 
    color: #fff;
    animation: layers1 1s linear infinite alternate;
  }
  .loader:after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.7);
    animation: layerTr 1s linear infinite alternate;
  }

  @keyframes layers1 {
    0% { box-shadow: 0px 0px 0 0px  }
   90% , 100% { box-shadow: 20px 20px 0 -4px  }
  }
  @keyframes layerTr {
    0% { transform:  translate(0, 0) scale(1) }
    100% {  transform: translate(-25px, -25px) scale(1) }
  }
      `,
  },


  {
    id: "prima-split-rects",
    html: `<span class="loader"></span>`,
    css: `.loader {
    position: relative;
    width: 164px;
    height: 164px;
  }
  .loader::before , .loader::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    animation: rotate 1s ease-in infinite;
}
.loader::after {
  width: 20px;
  height: 20px;
  background-color: #d80032;
  animation: rotate 1s ease-in infinite, moveY 1s ease-in infinite ;
}

@keyframes moveY {
  0% , 100% {top: 10%}
  45% , 55% {top: 59%}
  60% {top: 40%}
}
@keyframes rotate {
  0% { transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)}
  25%{ transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)}
  45% , 55%{ transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)}
  60%{ transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)}
  75%{ transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)}
  100%{ transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)}
}
    `,
  },


  {
    id: "prm-kti-pori-rts",
    html: `<span class="loader"></span>`,
    css: `.loader {
        position: relative;
        border: 24px solid;
        border-color: #fff  transparent #fff transparent;
        animation : rotate 2s linear infinite;
      }
      .loader:before,
      .loader:after {
        content:"";
        display: block;
        border: 24px solid transparent;
        border-left-color: #fff;
        position: absolute;
        left: -24px;
        top: -24px;
        animation: prix 1s infinite ease-in;
        transform-origin: 0% 100%;
      }
      .loader:before {
        border-color: transparent #fff transparent transparent;
        transform-origin: 100% 0%;
        animation-delay: 0.5s;
      }
      @keyframes rotate {
        100% {transform: rotate(360deg)}
      }
      @keyframes prix {
        20% , 80% {transform: rotate(0)}
        50% {transform: rotate(-90deg)}
      }
    `,
  },


  {
    id: "spinFloatSqr",
    html: `<span class="loader"></span>`,
    css: `.loader {
          width: 48px;
          height: 48px;
          margin: auto;
          position: relative;
        }
        .loader:before {
            content: '';
            width: 48px;
            height: 5px;
            background: #000;
            opacity: 0.25;
            position: absolute;
            top: 60px;
            left: 0;
            border-radius: 50%;
            animation: shadow 0.5s linear infinite;
          }
          .loader:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #fff;
            animation: bxSpin 0.5s linear infinite;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 4px;
          }
        @keyframes bxSpin {
          17% {
            border-bottom-right-radius: 3px;
          }
          25% {
            transform: translateY(9px) rotate(22.5deg);
          }
          50% {
            transform: translateY(18px) scale(1, .9) rotate(45deg);
            border-bottom-right-radius: 40px;
          }
          75% {
            transform: translateY(9px) rotate(67.5deg);
          }
          100% {
            transform: translateY(0) rotate(90deg);
          }
        }

        @keyframes shadow {
          0%, 100% {
            transform: scale(1, 1);
          }
          50% {
            transform: scale(1.2, 1);
          }
        }
      `
  },




]