export const LINK = [
  {
    id: "heading",
    html: `<div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" id="link"
                            data-wow-delay="0.3s">
                            <h6 class="position-relative d-inline text-primary ps-4">Button Animation</h6>
                            <h2 class="mt-2">LINK</h2>
                        </div>`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-1">Link Effect 1</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-1::before,
.cl-effect-1::after {
	display: inline-block;
	opacity: 0;
	transition: transform 0.3s, opacity 0.2s;
}

.cl-effect-1::before {
	margin-right: 10px;
	content: '[';
	transform: translateX(20px);
}

.cl-effect-1::after {
	margin-left: 10px;
	content: ']';
	transform: translateX(-20px);
}

.cl-effect-1:hover::before,
.cl-effect-1:hover::after{
	opacity: 1;
	transform: translateX(0px);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-2"><span data-hover="Link Effect 2">Link Effect 2</span></a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-2  {
	line-height: 44px;
	-webkit-perspective: 1000px;
	-moz-perspective: 1000px;
	perspective: 1000px;
}

.cl-effect-2  span {
	position: relative;
	display: inline-block;
	padding: 0 14px;
	background: #2195de;
	transition: transform 0.3s;
	transform-origin: 50% 0;
	transform-style: preserve-3d;
}

.cl-effect-2  span::before {
	position: absolute;
	top: 100%;
	left: 0;
	width: calc(100% - 14px);
	height: 100%;
  padding-left: 14px;
	background: #0965a0;
	content: attr(data-hover);
	transition: background 0.3s;
	transform: rotateX(-90deg);
	transform-origin: 50% 0;
}

.cl-effect-2:hover span,
.cl-effect-2:focus span {
	transform: rotateX(90deg) translateY(-22px);
}

.cl-effect-2:hover span::before,
.cl-effect-2:focus span::before {
	background: #28a2ee;	
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-3">Link Effect 3</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-3::after {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 1px;
	background: #fff;
	content: '';
	opacity: 0;
	transition: height 0.3s, opacity 0.3s, transform 0.3s;
	transform: translateY(-10px);
}

.cl-effect-3:hover::after,
.cl-effect-3:focus::after {
	height: 4px;
	opacity: 1;
	transform: translateY(5px);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-4"><span data-hover="Link Effect 4">Link Effect 4</span></a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-4 {
	overflow: hidden;
	height: 30px;
}

.cl-effect-4 span {
	position: relative;
	display: inline-block;
	transition: transform 0.3s;
}

.cl-effect-4 span::before {
	position: absolute;
	top: 100%;
	content: attr(data-hover);
	font-weight: 700;
	transform: translate3d(0,0,0);
}

.cl-effect-4:hover span,
.cl-effect-4:focus span {
	transform: translateY(-100%);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-5">Link Effect 5</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-5 {
	margin: 0 10px;
	padding: 10px 20px;
}

.cl-effect-5::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 2px;
	background: #fff;
	content: '';
	transition: top 0.3s;
}

.cl-effect-5::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 2px;
	height: 2px;
	background: #fff;
	content: '';
	transition: height 0.3s;
}

.cl-effect-5:hover::before {
	top: 100%;
	opacity: 1;
}

.cl-effect-5:hover::after {
	height: 100%;
} 
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-6">Link Effect 6</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-6 {
	padding: 12px 10px 10px;
	color: #fff;
	text-shadow: none;
	font-weight: 400;
}

.cl-effect-6::before,
.cl-effect-6::after {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 2px;
	background: #fff;
	content: '';
	transition: transform 0.3s;
	transform: scale(0.85);
}

.cl-effect-6::after {
	opacity: 0;
	transition: top 0.3s, opacity 0.3s, transform 0.3s;
}

.cl-effect-6:hover::before,
.cl-effect-6:hover::after,
.cl-effect-6:focus::before,
.cl-effect-6:focus::after {
	transform: scale(1);
}

.cl-effect-6:hover::after,
.cl-effect-6:focus::after {
	top: 0%;
	opacity: 1;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-7">Link Effect 7</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-7 {
	padding: 10px 20px;
}

.cl-effect-7::before,
.cl-effect-7::after  {
	position: absolute;
	top: -3px;
	left: 0;
	width: 100%;
	height: 100%;
	border: 3px solid #354856;
	content: '';
	transition: transform 0.3s, opacity 0.3s;
}

.cl-effect-7::after  {
	border-color: #fff;
	opacity: 0;
	transform: translateY(-10px) translateX(8px);
}

.cl-effect-7:hover::before,
.cl-effect-7:focus::before {
	opacity: 0;
	transform: translateY(5px) translateX(-5px);
}

.cl-effect-7:hover::after,
.cl-effect-7:focus::after  {
	opacity: 1;
	transform: translateY(0px) translateX(0px);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-8" data-hover="Link Effect 8"><span>Link Effect 8</span></a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-8 {
	overflow: hidden;
	z-index: 1;
}

.cl-effect-8 span {
	display: block;
	padding: 10px 20px;
	background: #0f7c67;
	transition: transform 0.3s;
}

.cl-effect-8::before {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	padding: 10px 20px;
	width: 100%;
	height: 100%;
	background: #fff;
	color: #0f7c67;
	content: attr(data-hover);
	transition: transform 0.3s;
}

.cl-effect-8:hover span,
.cl-effect-8:focus span {
	transform: translateX(100%);
}

.cl-effect-8:hover::before,
.cl-effect-8:focus::before {
	transform: translateX(0%);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-9" data-hover="Link Effect 9">Link Effect 9</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	font-size: 1.3em;
}

.cl-effect-9 {
	padding: 10px 0;
	border-top: 2px solid #6d747d;
	color: #6d747d;
	text-shadow: none;
} 

.cl-effect-9::before {
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	padding: 10px 0;
	max-width: 0;
	border-bottom: 2px solid #fff;
	color: #fff;
	content: attr(data-hover);
	transition: max-width 0.5s;
	white-space: nowrap;
}

.cl-effect-9:hover::before,
.cl-effect-9:focus::before {
	max-width: 100%;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-10">Link Effect 10</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
  z-index: 2;
}

.cl-effect-10::before,
.cl-effect-10::after {
	position: absolute;
	top: 50%;
  box-sizing: border-box;
  z-index: 1;
	left: 50%;
	width: 100px;
	height: 100px;
	border: 2px solid #fff;
  mix-blend-mode: lighten;
	border-radius: 50%;
	content: '';
	opacity: 0;
	transition: transform 0.3s, opacity 0.3s;
	transform: translateX(-50%) translateY(-50%) scale(0.2);
}

.cl-effect-10::after {
	width: 90px;
	height: 90px;
	border-width: 6px;
	transform: translateX(-50%) translateY(-50%) scale(0.8);
}

.cl-effect-10:hover::before,
.cl-effect-10:hover::after,
.cl-effect-10:focus::before,
.cl-effect-10:focus::after {
	opacity: 0.1;
	transform: translateX(-50%) translateY(-50%) scale(1);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-11">Link Effect 11</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-11 {
	transition: color 0.3s;
}

.cl-effect-11::before {
	position: absolute;
	top: 100%;
	left: 50%;
	color: transparent;
	content: '•';
	text-shadow: 0 0 transparent;
	font-size: 10px;
	transition: text-shadow 0.3s, color 0.3s;
	transform: translateX(-50%);
	pointer-events: none;
}

.cl-effect-11:hover::before,
.cl-effect-11:focus::before {
	color: #fff;
	text-shadow: 10px 0 #fff, -10px 0 #fff;
}

.cl-effect-11:hover,
.cl-effect-11:focus {
	color: #ba7700;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-12">Link Effect 12</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-12 {
	padding: 0 20px;
	height: 45px;
	line-height: 45px;
}

.cl-effect-12::before,
.cl-effect-12::after {
	position: absolute;
	width: 45px;
	height: 2px;
	background: #fff;
	content: '';
	opacity: 0.2;
	transition: all 0.3s;
	pointer-events: none;
}

.cl-effect-12::before {
	top: 0;
	left: 0;
	transform: rotate(90deg);
	transform-origin: 0 0;
}

.cl-effect-12::after {
	right: 0;
	bottom: -2px;
	transform: rotate(90deg);
	transform-origin: 100% 0;
}

.cl-effect-12:hover::before,
.cl-effect-12:hover::after,
.cl-effect-12:focus::before,
.cl-effect-12:focus::after {
	opacity: 1;
}

.cl-effect-12:hover::before,
.cl-effect-12:focus::before {
	left: 50%;
	transform: rotate(0deg) translateX(-50%);
}

.cl-effect-12:hover::after,
.cl-effect-12:focus::after {
	right: 50%;
	transform: rotate(0deg) translateX(50%);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-13" data-hover="Link Effect 13">Link Effect 13</a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-13 {
	padding: 0 5px;
	color: #c4770f;
	transition: color 0.3s;
	z-index: 2;

}

.cl-effect-13::before,
.cl-effect-13::after {
	position: absolute;
	width: 100%;
	left: 0;
	top: 50%;
	height: 2px;
	margin-top: -1px;
  mix-blend-mode: lighten;
  z-index: 1;
	background: #b4770d;
	content: '';
	transition: transform 0.3s, opacity 0.3s;
	pointer-events: none;
}

.cl-effect-13::before {
	transform: translateY(-22px);
}

.cl-effect-13::after {
	transform: translateY(22px);
}

.cl-effect-13:hover,
.cl-effect-13:focus {
	color: #fff;
}

.cl-effect-13:hover::before,
.cl-effect-13:hover::after,
.cl-effect-13:focus::before,
.cl-effect-13:focus::after {
	opacity: 0.6;
}

.cl-effect-13:hover::before,
.cl-effect-13:focus::before {
	transform: rotate(45deg);
}

.cl-effect-13:hover::after,
.cl-effect-13:focus::after {
	transform: rotate(-45deg);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-14"><span data-hover="Link Effect 14">Link Effect 14</span></a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-14 {
	line-height: 2em;
	perspective: 800px;
	width: 180px;
}

.cl-effect-14 span {
	position: relative;
	display: inline-block;
	width: 100%;
  text-align: center;
	background: #e35041;
	transition: transform 0.4s, background 0.4s;
	transform-style: preserve-3d;
	transform-origin: 50% 50% -100px;
}

.cl-effect-14 span::before {
	position: absolute;
	top: 0;
	left: 100%;
	width: 100%;
	height: 100%;
	background: #b53a2d;
	content: attr(data-hover);
	transition: background 0.4s;
	transform: rotateY(90deg);
	transform-origin: 0 50%;
	pointer-events: none;
}

.cl-effect-14:hover span,
.cl-effect-14:focus span {
	background: #b53a2d;
	transform: rotateY(-90deg);
}

.cl-effect-14:hover span::before,
.cl-effect-14:focus span::before {
	background: #ef5e50;	
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a href="#" class="cl-effect-15"><span data-hover="Link Effect 15">Link Effect 15</span></a>`,
    css: `a {
	position: relative;
	display: inline-block;
	color: #fff;
	text-decoration: none;
	letter-spacing: 1px;
	text-shadow: 0 0 1px rgba(255,255,255,0.3);
	font-size: 1.3em;
}

.cl-effect-15 {
	line-height: 2em;
	-webkit-perspective: 800px;
	-moz-perspective: 800px;
	perspective: 800px;
}

.cl-effect-15 span {
	position: relative;
	display: inline-block;
	padding: 3px 15px 0;
	background: #587285;
	box-shadow: inset 0 3px #2f4351;
	transition: background 0.6s;
	transform-origin: 50% 0;
	transform-style: preserve-3d;
	transform-origin: 0% 50%;
  text-align: center;
}

.cl-effect-15 span::before {
	position: absolute;
	top: 3px;
	left: 0;
	width: 100%;
	background: #fff;
	color: #2f4351;
	content: attr(data-hover);
	transform: rotateX(270deg);
	transition: transform 0.6s;
	transform-origin: 0 0;
	pointer-events: none;
}

.cl-effect-15:hover span,
.cl-effect-15:focus span {
	background: #2f4351;
}

.cl-effect-15:hover span::before,
.cl-effect-15:focus span::before {
	transform: rotateX(10deg);
}
`,
  },
]