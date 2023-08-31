export const TEXT = [
  {
    id: "heading",
    html: `<div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" id="text"
                            data-wow-delay="0.3s">
                            <h6 class="position-relative d-inline text-primary ps-4">Loader Animation</h6>
                            <h2 class="mt-2">TEXT</h2>
                        </div>`,
    css: ` `,
  },

  {
    id: "xkjlk7q886r",
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
  font-size: 40px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #263238;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
`,
  }, {
    id: "x5uh05vpzo",
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader {
  font-size: 40px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #263238;
  box-sizing: border-box;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  letter-spacing: 2px;
  position: relative;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
`,
  },

  {
    id: "oq8vTeX8tt5n9",
    html: `<span class="loader">Load&nbsp;ng</span>`,
    css: `.loader{
    font-size: 40px;
    color: transparent;
    overflow:hidden;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow:0 0 #FFF, 5em 0 #FFF;
    animation:marquee 2s infinite ease;
  }
  .loader:before {
    content:"Loading...";
  }

  @keyframes marquee {to{text-shadow:-5em 0 #FFF, 0 0 #FFF}}
`
  },


  {
    id: "oq8v82tt5n9",
    content: 'Load&nbsp;ng',
    html: `<span class="loader">Load&nbsp;ng</span>`,
    css: `.loader {
  color: #FFF;
  position: relative;
  display: inline-block;
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 46px;
  letter-spacing: 4px;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  right: 66px;
  bottom: 10px;
  height: 24px;
  width: 5.15px;
  background: currentColor;
}
.loader::after {
  content: '';  
  width: 8px;
  height: 8px;
  position: absolute;
  left: 122px;
  top: 12px;
  border-radius: 50%;
  background: red;
  box-sizing: border-box;
  animation: animloader 1s ease-in infinite;
}

@keyframes animloader {
  0% {
    transform: translateY(8px) scaleY(1) scaleX(1.25);
  }
  25%, 75% {
    transform: translateY(-5px) scaleY(1.2) scaleX(1);
  }
  50% {
    transform: translateY(-10px) scaleY(1) scaleX(1);
  }
  100% {
    transform: translateY(8px) scaleY(0.8) scaleX(0.8);
  }
}
`,
  },

  {
    id: "text-fkeibm",
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader{
        font-size: 40px;
        color: #FFF;
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        position: relative;
      }
      .loader:after{
        content: '';
        height: 4px;
        width:0%;
        display: block;
        background: #d80032;
        animation: 5s lineGrow linear infinite;
      }
      
      @keyframes lineGrow {to{width: 100%;}}
`,
  },


  {
    id: "textFlowBrkbxb78im",
    content: 'Loading',
    html: `<span class="loader">Loading</span>`,
    css: `.loader{
        display: inline-block;
        text-align: center;
        line-height: 86px;
        text-align: center;
        position: relative;
        padding: 0 48px;
        font-size: 40px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        }
        .loader:before, .loader:after {
          content: "";
          display: block;
          width: 15px;
          height: 15px;
          background: currentColor;
          position: absolute;
          animation: load .7s infinite alternate ease-in-out;
          top: 0;
        }
        .loader:after {
          top: auto;
          bottom: 0;
        }
      @keyframes load {
        0% {
          left: 0;
          height: 43px;
          width: 15px;
          transform: translateX(0)
        }
        50% {
          height: 10px;
          width: 40px
        }
        100% {
          left: 100%;
          height: 43px;
          width: 15px;
          transform: translateX(-100%)
        }
      }
`,
  },

  {
    id: "text-ub-prog-im",
    html: `<span class="loader"></span>`,
    css: `.loader{
      font-size: 40px;
      color: #FFF;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:after{
      content: 'Loading';
      position: relative;
      z-index: 5;
    }
    .loader:before{
      content: '';
      height: 6px;
      border: 1px solid;
      border-radius: 10px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      background: linear-gradient(#d80032 100%, transparent 0) no-repeat;
      background-size: 0% auto;
      animation: 10s lineGrow linear infinite;
    }

    @keyframes lineGrow {to {  background-size: 100% auto}}
`,
  },

  {
    id: "text-typ-an",
    html: `<span class="loader"></span>`,
    css: `.loader{
      font-size: 40px;
      color: #FFF;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:before{
      content: '';
      animation: 5s print linear alternate infinite;
    }
    .loader:after{
      content: '';
      position: absolute;
      right: -4px;
      top: 50%;
      transform: translatey(-45%);
      width: 2px;
      height: 1.3em;
      background: currentColor;
      opacity: 0.8;
      animation: 1s blink steps(2) infinite;
    }
    
    @keyframes blink {
      0%  { visibility: hidden;}
      100%  { visibility: visible;}
    }
    @keyframes print {
      0% { content: 'L'}
      10% { content: 'Lo'}
      20% { content: 'Loa'}
      30% { content: 'Load'}
      40% { content: 'Loadi'}
      50% { content: 'Loadin'}
      60% { content: 'Loading'}
      70% { content: 'Loading.'}
      80% { content: 'Loading..'}
      90% , 100% { content: 'Loading...'}
    }
`,
  },

  {
    id: "text-ball-spn-ar",
    html: `<span class="loader"></span>`,
    css: `.loader{
    position: relative;
    font-size: 40px;
    letter-spacing: 2px;
  }
  .loader:before {
    content: "Loading";
    color: #fff;
  }
  .loader:after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #d80032;
    border-radius: 50%;
    position: absolute;
    inset: 0;
    margin: auto;
    top: -70px;
    animation: motion 3s ease-in-out infinite;
  }

  @keyframes motion {
    0%, 50%, 100% {
      transform: translateX(0) scale(1);
    }
    25% {
      transform: translateX(-100px) scale(0.3);
    }
    75% {
      transform: translateX(100px) scale(0.3);
    }
  }
`,
  },
  {
    id: "text-balloon",
    html: `<span class="loader"></span>`,
    css: `.loader{
    position: relative;
    font-size: 40px;
    letter-spacing: 6px;
  }
  .loader:before {
    content: "Loading";
    color: #fff;
  }
  .loader:after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #d80032;
    background-image: radial-gradient(circle 2px, #fff4 100%, transparent 0),
      radial-gradient(circle 1px, #fff3 100%, transparent 0);
    background-position: 14px -4px, 12px -1px;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    top: -5px;
    right: 66px;
    transform-origin: center bottom;
    animation: fillBaloon 1s ease-in-out infinite alternate;
  }

  @keyframes fillBaloon {
    0% { transform: scale(1)}
    100% { transform: scale(3)}
  }
`,
  },
  {
    id: "text-smoky",
    html: `<span class="loader"></span>`,
    css: `.loader{
      font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    animation: smokeOut 1s ease-in-out infinite alternate;
    text-shadow: 0 0 1px white;
  }
  .loader:before {
    content: "Loading";
  }

  @keyframes smokeOut {
    100% {
      opacity: 0.08;
      filter: blur(5px);
      letter-spacing: 4px;
    }
  }
`,
  },


]


