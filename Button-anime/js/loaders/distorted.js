export const DISTORTED = [
  {
    id: "heading",
    html: `<div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" id="distorted"
                            data-wow-delay="0.3s">
                            <h6 class="position-relative d-inline text-primary ps-4">Button Animation</h6>
                            <h2 class="mt-2">DISTORTED</h2>
                        </div>`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--pan"><span>Upload</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--pan {
  font-family: aktiv-grotesk-extended, sans-serif;
  font-weight: 700;
  border: 2px solid #000;
  border-radius: 3rem;
  color: #fff;
}

.button--pan span {
  position: relative;
  mix-blend-mode: difference;
}

.button--pan::before {
  content: "";
  background: #000;
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pan:hover::before {
  transform: translate3d(0, -100%, 0);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--hyperion"><span><span>New page</span></span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--hyperion {
	font-family: input-mono-narrow, monospace;
	font-weight: 500;
	border: 1px solid #000;
	overflow: hidden;
	color: #fff;
}

.button--hyperion span {
	display: block;
	position: relative;
}

.button--hyperion > span {
	overflow: hidden;
}

.button--hyperion > span > span {
	overflow: hidden;
	mix-blend-mode: difference;
}

.button--hyperion:hover > span > span {
	animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
}

@keyframes MoveUpInitial {
	to {
		transform: translate3d(0,-105%,0);
	}
}

@keyframes MoveUpEnd {
	from {
		transform: translate3d(0,100%,0);
	}
	to {
		transform: translate3d(0,0,0);
	}
}

.button--hyperion::before {
	content: '';
	background: #000;
	transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
	transform-origin: 100% 50%;
}

.button--hyperion:hover::before {
	transform: scale3d(0,1,1);
	transform-origin: 0% 50%;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--mimas"><span>Render</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--mimas {
	text-transform: uppercase;
	letter-spacing: 0.05rem;
	font-weight: 700;
	font-size: 0.85rem;
	border-radius: 0.5rem;
	overflow: hidden;
	color: #fff;
	background: #e7e7e7;
}

.button--mimas span {
	position: relative;
	mix-blend-mode: difference;
}

.button--mimas::before {
	content: '';
	background: #000;
	width: 120%;
	left: -10%;
	transform: skew(30deg);
	transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

.button--mimas:hover::before {
	transform: translate3d(100%,0,0);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--atlas">
  <span>Subscribe</span>
  <div class="marquee" aria-hidden="true">
    <div class="marquee__inner">
      <span>Subscribe</span>
      <span>Subscribe</span>
      <span>Subscribe</span>
      <span>Subscribe</span>
    </div>
  </div>
</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--atlas {
	font-family: signo, sans-serif;
	font-weight: 600;
}

.button--atlas > span {
	display: inline-block;
}

.button--atlas:hover > span {
	opacity: 0;
}

.marquee {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	pointer-events: none;
}

.marquee__inner {
	width: fit-content;
	display: flex;
	position: relative;
	--offset: 1rem;
	--move-initial: calc(-25% + var(--offset));
	--move-final: calc(-50% + var(--offset));
	transform: translate3d(var(--move-initial), 0, 0);
	animation: marquee 1s linear infinite;
	animation-play-state: paused;
	opacity: 0;
}

.button--atlas:hover .marquee__inner {
	animation-play-state: running;
	opacity: 1;
	transition-duration: 0.4s;
}

.marquee span {
	text-align: center;
	white-space: nowrap;
	font-style: italic;
	padding: 15px 0.5rem;
}

@keyframes marquee {
	0% {
		transform: translate3d(var(--move-initial), 0, 0);
	}

	100% {
		transform: translate3d(var(--move-final), 0, 0);
	}
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--kari">
  <span>Send Love</span>
  <div class="marquee" aria-hidden="true">
    <div class="marquee__inner">
      <span>Send Love</span>
      <span>Send Love</span>
      <span>Send Love</span>
      <span>Send Love </span>
    </div>
  </div>
</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--kari {
	font-family: freight-display-pro, serif;
	font-weight: 900;
	font-size: 1.25rem;
	border-radius: 50%;
	border: 2px solid #000;
}

.button--kari > span {
	display: inline-block;
	transition: opacity 0.1s;
}

.button--kari:hover > span {
	opacity: 0;
}

.button--kari .marquee {
	transform: rotate(-2.75deg);
}

.button--kari:hover .marquee__inner {
	animation-play-state: running;
	opacity: 1;
	transition-duration: 0.6s;
}

.marquee {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	pointer-events: none;
}

.marquee__inner {
	width: fit-content;
	display: flex;
	position: relative;
	--offset: 1rem;
	--move-initial: calc(-25% + var(--offset));
	--move-final: calc(-50% + var(--offset));
	transform: translate3d(var(--move-initial), 0, 0);
	animation: marquee 1s linear infinite;
	animation-play-state: paused;
	opacity: 0;
}

.marquee span {
	text-align: center;
	white-space: nowrap;
	font-style: italic;
	padding: 15px 0.5rem;
}

@keyframes marquee {
	0% {
		transform: translate3d(var(--move-initial), 0, 0);
	}

	100% {
		transform: translate3d(var(--move-final), 0, 0);
	}
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--pandora"><span>Activate Card</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--pandora {
	background: #000;
	font-weight: 700;
	padding: 0;
	border-radius: 5px;
}

.button--pandora span {
	display: block;
	background: #a7a7a7;
	padding: 1.5rem 2rem;
	border: 1px solid #000;
	border-radius: 5px;
	transform: translate3d(-4px, -4px, 0);
	transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pandora:hover span {
	transform: translate3d(-8px, -8px, 0);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--janus"><span>Reshape</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--janus {
	font-family: freight-display-pro, serif;
	font-weight: 900;
  display: flex;
	height: 120px;
	color: #fff;
	background: none;
}

.button--janus::before {
	content: '';
	z-index: 1;
	background: #e6e6e6;
	-webkit-clip-path: path("M154.5,88.5 C131,113.5 62.5,110 30,89.5 C-2.5,69 -3.5,42 4.5,25.5 C12.5,9 33.5,-6 85,3.5 C136.5,13 178,63.5 154.5,88.5 Z");
	clip-path: path("M154.5,88.5 C131,113.5 62.5,110 30,89.5 C-2.5,69 -3.5,42 4.5,25.5 C12.5,9 33.5,-6 85,3.5 C136.5,13 178,63.5 154.5,88.5 Z");
	transition: clip-path 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55), -webkit-clip-path 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55), background 0.5s ease;
}

.button--janus:hover::before {
	background: #000;
	-webkit-clip-path: path("M143,77 C117,96 74,100.5 45.5,91.5 C17,82.5 -10.5,57 5.5,31.5 C21.5,6 79,-5.5 130.5,4 C182,13.5 169,58 143,77 Z");
	clip-path: path("M143,77 C117,96 74,100.5 45.5,91.5 C17,82.5 -10.5,57 5.5,31.5 C21.5,6 79,-5.5 130.5,4 C182,13.5 169,58 143,77 Z");
}

.button--janus::after {
	content: '';
	height: 86%;
	width: 97%;
	top: 5%;
	border-radius: 58% 42% 55% 45% / 56% 45% 55% 44%;
	border: 1px solid #fff;
	transform: rotate(-20deg);
	z-index: 0;
	transition: transform 0.5s cubic-bezier(0.585, 2.5, 0.645, 0.55);
}

.button--janus:hover::after {
	transform: translate3d(0,-5px,0);
}

.button--janus span {
	display: block;
  margin: auto;
	transition: transform 0.3s ease;
	mix-blend-mode: difference;
  position: relative;
  font-size: 1.2rem;
  transform: translateY(-5px);
  z-index: 2;
}

.button--janus:hover span {
	transform: translate3d(0,-10px,0);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--anthe"><span>Initialize</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--anthe {
	font-family: freight-display-pro, serif;
	color: #000;
  font-weight: 900;
  letter-spacing: 1px;
	background: none;
}

.button--anthe::before {
	content: '';
	background: #fff;
	-webkit-clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
	clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
	transition: clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1), -webkit-clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1);
}

.button--anthe:hover::before {
	background: #fff;
	-webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
	clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}

.button--anthe span {
	display: block;
  position: relative;
  z-index: 1;
	transition: transform 0.4s cubic-bezier(0.2, 1, 0.8, 1);
}

.button--anthe:hover span {
	transform: translate3d(-10px,0,0);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--pallene">Hide Details</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--pallene {
	font-family: aktiv-grotesk-extended, sans-serif;
	font-weight: 700;
	border-radius: 0.5rem;
	border: 2px solid #000;
	box-shadow: inset 0 0 0 0px #000;
	transition: border-radius 0.3s, box-shadow 0.3s, color 0.3s;
	transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
}

.button--pallene:hover {
	color: #e7e7e7;
	border-radius: 50%;
	box-shadow: inset 0 0 0 40px #000;
	transition-delay: 0s, 0s, 0.2s;
}

`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--telesto"><span><span>Verify</span></span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--telesto {
	overflow: hidden;
	font-family: obvia, sans-serif;
	font-weight: 800;
	font-style: italic;
	font-size: 1.15rem;
	color: #fff;
}

.button--telesto span {
	display: block;
	position: relative;
	z-index: 1;
}

.button--telesto > span {
	overflow: hidden;
	mix-blend-mode: difference;
}

.button--telesto:hover > span > span {
	animation: MoveRightInitial 0.1s forwards, MoveRightEnd 0.3s forwards 0.2s;
}

@keyframes MoveRightInitial {
	to {
		transform: translate3d(105%,0,0);
	}
}

@keyframes MoveRightEnd {
	from {
		transform: translate3d(-100%,0,0);
	}
	to {
		transform: translate3d(0,0,0);
	}
}

.button--telesto::before,
.button--telesto::after {
	content: '';
	background: #000;
}

.button--telesto::before {
	width: 135%;
	-webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
	clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0% 0%);
	transform: translate3d(-100%,0,0);
}

.button--telesto:hover::before {
	transform: translate3d(0,0,0);
	transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--telesto::after {
	width: 105%;
	transform: translate3d(100%,0,0);
	transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}

.button--telesto:hover::after {
	transform: translate3d(0,0,0);
	transition: transform 0.01s 0.3s cubic-bezier(0.7, 0, 0.2, 1);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--calypso"><span>Export File</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--calypso {
	overflow: hidden;
	font-family: freight-display-pro, serif;
	font-size: 1.15rem;
	border-radius: 0.85rem;
	color: #fff;
}

.button--calypso span {
	display: block;
	position: relative;
	mix-blend-mode: difference;
	z-index: 10;
}

.button--calypso:hover span {
	animation: MoveScaleUpInitial 0.3s forwards, MoveScaleUpEnd 0.3s forwards 0.3s;
}

@keyframes MoveScaleUpInitial {
	to {
		transform: translate3d(0,-105%,0) scale3d(1,2,1);
		opacity: 0;
	}
}

@keyframes MoveScaleUpEnd {
	from {
		transform: translate3d(0,100%,0) scale3d(1,2,1);
		opacity: 0;
	}
	to {
		transform: translate3d(0,0,0);
		opacity: 1;
	}
}

.button--calypso::before {
	content: '';
	background: #000;
	width: 120%;
	height: 0;
	padding-bottom: 120%;
	top: -110%;
	left: -10%;
	border-radius: 50%;
	transform: translate3d(0,68%,0) scale3d(0,0,0);
}

.button--calypso:hover::before {
	transform: translate3d(0,0,0) scale3d(1,1,1);
	transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
}

.button--calypso::after {
	content: '';
	background: #000;
	transform: translate3d(0,-100%,0);
	transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
}

.button--calypso:hover::after {
	transform: translate3d(0,0,0);
	transition-duration: 0.05s;
	transition-delay: 0.4s;
	transition-timing-function: linear;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--greip"><span><span>Next</span></span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--greip {
	overflow: hidden;
	color: #fff;
	font-family: input-mono-narrow, monospace;
	font-weight: 500;
}

.button--greip span {
	display: block;
	position: relative;
}

.button--greip > span {
	overflow: hidden;
	mix-blend-mode: difference;
}

.button--greip:hover > span > span {
	animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
}

@keyframes MoveUpInitial {
	to {
		transform: translate3d(0,-105%,0);
	}
}

@keyframes MoveUpEnd {
	from {
		transform: translate3d(0,100%,0);
	}
	to {
		transform: translate3d(0,0,0);
	}
}

.button--greip::before {
	content: '';
	background: #000;
	width: 100%;
	height: 100%;
	transform-origin: 50% 100%;
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	transition: clip-path 0.2s, -webkit-clip-path 0.2s;
	transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
}

.button--greip:hover::before {
	transition-duration: 0.3s;
	-webkit-clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
	clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--dione"><span>Resize</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--dione {
	background: none;
	font-family: obvia, sans-serif;
	font-weight: 500;
	font-style: italic;
}

.button--dione span {
	display: inline-block;
	position: relative;
	color: #000;
}

.button--dione::before {
	content: '';
	background: #fff;
	transition: transform 0.3s cubic-bezier(0.2,1,0.7,1);
}

.button--dione:hover::before {
	transform: scale3d(0.9, 0.8, 1);
}

.button--dione::after {
	content: '';
	border: 1px solid #fff;
	transition: transform 0.3s cubic-bezier(0.2,1,0.7,1);
	border-radius: 0px;
	transform: scale3d(0.85, 0.65, 1);
}

.button--dione:hover::after {
	transform: scale3d(1,1,1);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--helene"><span><span>Sell</span></span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 0px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--helene {
	border-radius: 7px;
	border: 1px solid #000;
	font-family: sans-serif;
	font-weight: 900;
	font-style: normal;
	text-transform: uppercase;
}

.button--helene::before {
	content: '';
	top: 10px;
	left: 10px;
	width: calc(100% - 20px);
	height: calc(100% - 20px);
	background: rgba(0,0,0,0.5);
	filter: blur(7px);
	border-radius: 7px;
	z-index: -1;
	transform: translate3d(0,15px,0);
	transition: transform 0.45s;
}

.button--helene:hover::before {
	transform: translate3d(0,0,0);
}

.button--helene span {
	display: block;
}

.button--helene > span {
	height: 100%;
	overflow: hidden;
	line-height: 3.4rem;
}

.button--helene:hover > span > span {
	animation: slotMachine 0.15s ease-out forwards 3;
}

@keyframes slotMachine {
	50% {
		transform: translate3d(0,100%,0);
		opacity: 0;
	}
	51% {
		transform: translate3d(0,-100%,0);
		opacity: 0;
	}
	100% {
		transform: translate3d(0,0,0);
		opacity: 1;
	}
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--rhea"><span>Delete</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--rhea {
  font-family: freight-display-pro, serif;
  font-weight: 900;
  font-style: normal;
  width: 180px;
  display: flex;
  overflow: visible;
  align-items: center;
  justify-content: center;
  color: #000;
  background: none;
}

.button--rhea::before {
	content: '';
	z-index: 0;
  height: 120px;
  position: absolute;
  top: calc(-200%);
	background: #e7e7e7;
	-webkit-clip-path: polygon(20% 30%, 0 30%, 0 50%, 0 70%, 20% 70%, 50% 70%, 80% 70%, 100% 70%, 100% 50%, 100% 30%, 80% 30%, 50% 30%);
	clip-path: polygon(20% 30%, 0 30%, 0 50%, 0 70%, 20% 70%, 50% 70%, 80% 70%, 100% 70%, 100% 50%, 100% 30%, 80% 30%, 50% 30%);
	transition: clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1), -webkit-clip-path 0.4s cubic-bezier(0.3, 1, 0.2, 1), transform 0.4s cubic-bezier(0.3, 1, 0.2, 1), background 0.4s ease;
}

.button--rhea:hover::before {
	background: #fff;
	transform: scale3d(0.7,1,1);
	-webkit-clip-path: polygon(30% 10%, 10% 30%, 30% 50%, 10% 70%, 30% 90%, 50% 70%, 70% 90%, 90% 70%, 70% 50%, 90% 30%, 70% 10%, 50% 30%);
	clip-path: polygon(30% 10%, 10% 30%, 30% 50%, 10% 70%, 30% 90%, 50% 70%, 70% 90%, 90% 70%, 70% 50%, 90% 30%, 70% 10%, 50% 30%);
}

.button--rhea span {
	display: block;
  position: relative;
  z-index: 1;
	transition: transform 0.4s cubic-bezier(0.3, 1, 0.2, 1), opacity 0.05s;
}

.button--rhea:hover span {
	transform: scale3d(0.1,0.1,1);
	opacity: 0;
	transition-delay: 0s, 0.35s;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--narvi"><span><span>Open chat</span></span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 22px 54px;
  margin: 0;
  top: 12px;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--narvi {
	font-weight: bold;
	background: none;
}

.button--narvi::before {
	content: '';
	z-index: 0;
	background: #e7e7e7;
	-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 85% 70%, 80% 70%, 75% 70%, 0 70%);
	clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 85% 70%, 80% 70%, 75% 70%, 0 70%);
	transition: clip-path 0.3s cubic-bezier(0.7, 0, 0.2, 1), -webkit-clip-path 0.3s cubic-bezier(0.7, 0, 0.2, 1), transform 0.3s ease;
}

.button--narvi:hover::before {
	transform: translate3d(0,-10px,0);
	-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 85% 70%, 86% 100%, 75% 70%, 0 70%);
	clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 85% 70%, 86% 100%, 75% 70%, 0 70%);
}

.button--narvi span {
	display: block;
	position: relative;
}

.button--narvi > span {
	transition: transform 0.3s;
	transform: translate3d(0,-0.556rem,0);
	z-index: 1;
	overflow: hidden;
}

.button--narvi:hover > span {
	transform: translate3d(0,-1.111rem,0);
}

.button--narvi:hover > span > span {
	animation: MoveUpInitial 0.15s forwards, MoveUpEnd 0.15s forwards 0.15s;
}

@keyframes MoveUpInitial {
	to {
		transform: translate3d(0,-105%,0);
	}
}

@keyframes MoveUpEnd {
	from {
		transform: translate3d(0,100%,0);
	}
	to {
		transform: translate3d(0,0,0);
	}
}

`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--hati"><span>Activate</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 22px 58px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--hati {
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid;
	background: none;
	font-family: aktiv-grotesk-extended, sans-serif;
	font-weight: 900;
	font-style: italic;
}

.button--hati:hover {
	background: none;
}

.button--hati::before {
	animation: rotateIt 10s linear infinite;
	background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7zh_wLkQg_Um4_keceQ_R6shq8oBxjH54Iq2cqtEhvQj6_C9H1sH6kRVkBR1jeL7Nk1M&usqp=CAU);
  background-size: 10px;
	content: '';
	width: 300%;
	height: 300%;
	top: -100%;
	left: -100%;
	z-index: 0;
	opacity: 0;
	transform-origin: 50% 50%;
	transition: opacity 0.3s;
}

@keyframes rotateIt {
  to {
	transform: rotate(-360deg);
  }
}

.button--hati:hover::before {
	opacity: 0.4;
}

.button--hati span {
	display: block;
	position: relative;
	z-index: 1;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--surtur">
  <svg class="textcircle" viewBox="0 0 500 500">
    <title>Projects & client work 2020</title>
    <defs>
      <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" />
    </defs>
    <text>
      <textPath xlink:href="#textcircle" aria-label="Projects & client work 2020" textLength="900">Projects &amp;
        client work 2020</textPath>
    </text>
  </svg>
  <svg aria-hidden="true" class="eye" width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
    <path class="eye__outer"
      d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z" />
    <path class="eye__lashes-up" d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192" />
    <path class="eye__lashes-down"
      d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z" />
    <circle class="eye__iris" cx="35" cy="35.31" r="5.221" />
    <circle class="eye__inner" cx="35" cy="35.31" r="10.041" />
  </svg>
</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0;
  text-align: center;
  background: #e7e7e7;
  border: none;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
}

.button::before,
.button::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.button--surtur {
    padding: 0;
    background: none;
    height: 200px;
    clip-path: circle(40% at 50% 50%);
    position: absolute;
    left: 50%;
    transform: translateX(calc(-50%));
    top: 0;
}

.button--surtur:focus-visible {
	background: #fff;
}

.textcircle {
	position: relative;
	display: block;
	width: 200px;
}

.textcircle text {
	font-size: 32px;
	text-transform: uppercase;
	fill: #fff;
}

.textcircle textPath {
	letter-spacing: 17px; /* Firefox needs this */
}

.button--surtur:hover .textcircle {
	animation: rotateIt 7s linear infinite;
}

.eye {
	position: absolute;
	z-index: 2;
	width: 60px;
	height: 60px;
	top: calc(50% - 30px);
	left: calc(50% - 30px);
}

.eye__outer,
.eye__inner,
.eye__lashes-up,
.eye__lashes-down {
	stroke: #fff;
	fill: none;
	stroke-width: 1.5px;
}

.eye__lashes-down {
	opacity: 0;
}

.button--surtur:hover .eye__lashes-up,
.button--surtur:hover .eye__inner,
.button--surtur:hover .eye__iris {
	animation: blinkHide 2s step-end infinite;
}

.button--surtur:hover .eye__lashes-down {
	animation: blinkShow 2s step-end infinite;
}

@keyframes blinkHide {
	0% {
		opacity: 0;
	}
	10% {
		opacity: 1;
	}
}

@keyframes blinkShow {
	0% {
		opacity: 1;
	}
	10% {
		opacity: 0;
	}
}

@keyframes rotateIt {
  to {
	transform: rotate(-360deg);
  }
}
`,
  },
]