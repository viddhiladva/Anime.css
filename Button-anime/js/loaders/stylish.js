export const STYLISH = [
  {
    id: "heading",
    html: `<div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" id="stylish"
                            data-wow-delay="0.3s">
                            <h6 class="position-relative d-inline text-primary ps-4">Button Animation</h6>
                            <h2 class="mt-2">STYLISH</h2>
                        </div>`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--winona" data-text="Open Project"><span>Button 1</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--winona {
  overflow: hidden;
  transition: border-color 0.3s, background-color 0.3s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.button--winona::after {
  content: attr(data-text);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 14px;
  left: 0;
  opacity: 0;
  color: #7986cb;
  transform: translate3d(0, 25%, 0);
}

.button--winona > span {
  display: block;
}

.button--winona::after,
.button--winona > span {
  transition: transform 0.3s, opacity 0.3s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.button--winona:hover {
  border-color: #7986cb;
  background-color: rgba(40, 162, 238, 0.1);
}

.button--winona:hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.button--winona:hover > span {
  opacity: 0;
  transform: translate3d(0, -25%, 0);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--wayra">Button 2</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--wayra {
	overflow: hidden;
	transition: border-color 0.3s, color 0.3s;
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.button--wayra::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 150%;
	height: 100%;
	background: #7986cb;
	z-index: -1;
	transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
	transform-origin: 0% 100%;
	transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}

.button--wayra:hover {
	color: #fff;
	border-color: #7986cb;
}

.button--wayra:hover::before {
	opacity: 1;
	background-color: #7986cb;
	transform: rotate3d(0, 0, 1, 0deg);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--tamaya" data-text="Open"><span>Open Button 3</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 40px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--tamaya {
	overflow: hidden;
	color: #7986cb;
}

.button--tamaya::before,
.button--tamaya::after {
	content: attr(data-text);
	position: absolute;
	width: 100%;
	height: 50%;
	left: 0;
	background: #7986cb;
	color: #fff;
	overflow: hidden;
	transition: transform 0.3s;
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.button--tamaya.button--inverted::before,
.button--tamaya.button--inverted::after {
	background: #fff;
	color: #37474f;
}

.button--tamaya::before {
	top: 0;
	padding-top: 1em;
}

.button--tamaya::after {
	bottom: 0;
	line-height: 0;
}

.button--tamaya > span {
	display: block;
	transform: scale3d(0.2, 0.2, 1);
	opacity: 0;
	transition: transform 0.3s, opacity 0.3s;
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.button--tamaya:hover::before {
	transform: translate3d(0, -100%, 0);
}

.button--tamaya:hover::after {
	transform: translate3d(0, 100%, 0);
}

.button--tamaya:hover > span {
	opacity: 1;
	transform: scale3d(1, 1, 1);
}

`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--rayen" data-text="Send Message"><span>Button 4</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--rayen {
  padding: 0;
	overflow: hidden;
}

.button--rayen::before {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
  padding-top: 15px;
	width: 100%;
	height: 100%;
	background: #7986cb;
	transform: translate3d(-100%, 0, 0);
}

.button--rayen > span {
	display: block;
  padding: 15px 54px;

}

.button--rayen::before,
.button--rayen > span {
	transition: transform 0.3s;
	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}

.button--rayen:hover::before {
	transform: translate3d(0, 0, 0);
}

.button--rayen:hover > span {
	transform: translate3d(0, 100%, 0);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--pipaluk">Button 5</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--pipaluk {
	color: #7986cb;
  z-index: 1;
  overflow: visible;
}

.button--pipaluk::before,
.button--pipaluk::after {
	content: '';
	border-radius: inherit;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	transition: transform 0.3s, background-color 0.3s;
	transition-timing-function: cubic-bezier(0.25, 0, 0.3, 1);
}

.button--pipaluk::before {
	border: 2px solid #fff;
}

.button--pipaluk::after {
	background: #fff;
}

.button--pipaluk:hover::before {
	transform: scale3d(1, 1, 1);
}

.button--pipaluk::before,
.button--pipaluk:hover::after {
	transform: scale3d(0.7, 0.7, 1);
}

.button--pipaluk:hover::after {
	background-color: #fff;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--moema">Button 6</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: visible;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--moema {
	border-radius: 50px;
	background: #ECEFF1;
	color: #0a219a;
	transition: background-color 0.3s, color 0.3s;
}

.button--moema::before {
	content: '';
	position: absolute;
	top: -20px;
	left: -20px;
	bottom: -20px;
	right: -20px;
	background: inherit;
	border-radius: 50px;
	opacity: 0.4;
	transform: scale3d(0.8, 0.5, 1);
}

.button--moema:hover {
	transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
	color: #ECEFF1;
	background-color: #7986cb;
  border: none;
	animation: anim-moema-1 0.3s forwards;
}

.button--moema:hover::before {
	animation: anim-moema-2 0.3s 0.3s forwards;
}

@keyframes anim-moema-1 {
	60% {
		transform: scale3d(0.8, 0.8, 1);
	}
	85% {
		transform: scale3d(1.1, 1.1, 1);
	}
	100% {
		transform: scale3d(1, 1, 1);
	}
}

@keyframes anim-moema-2 {
	to {
		opacity: 0;
		transform: scale3d(1, 1, 1);
	}
}

`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--isi"><span>Button 7</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--isi span {
  position: relative;
  z-index: 1;
}

.button--isi::before {
	content: '';
	z-index: 0;
	position: absolute;
	top: 50%;
	left: 100%;
	margin: -15px 0 0 1px;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #3f51b5;
	transform-origin: 100% 50%;
	transform: scale3d(1, 2, 1);
	transition: transform 0.3s, opacity 0.3s;
	transition-timing-function: cubic-bezier(0.7,0,0.9,1);
}

.button--isi:hover::before {
	transform: scale3d(9, 9, 1);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--aylen"><span>Button 8</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--aylen {
	background: none;
	color: #fff;
	transition: color 0.3s;
}

.button.button--aylen span {
  position: relative;
  z-index: 1;
}

.button--aylen.button--inverted {
	background: none;
	color: #fff;
}

.button--aylen::before,
.button--aylen::after {
	content: '';
	position: absolute;
	height: 100%;
	width: 100%;
	bottom: 100%;
	left: 0;
	z-index: 0;
	transition: transform 0.3s;
	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}

.button--aylen::before {
	background: #7986cb;
}

.button--aylen::after {
	background: #3f51b5;
}

.button--aylen:hover {
	color: #fff;
}

.button--aylen:hover::before,
.button--aylen:hover::after {
	transform: translate3d(0, 100%, 0);
}

.button--aylen:hover::after {
	transition-delay: 0.175s;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--saqui" data-text="Button 9">Button 9</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button.button--saqui {
	background: #fff;
	color: #37474f;
	transition: background-color 0.3s ease-in, color 0.3s ease-in;
}

.button--saqui::after {
	content: attr(data-text);
	position: absolute;
	top: 15px;
	left: 0;
	width: 100%;
	height: 100%;
	color: #fff;
	transform-origin: -25% 50%;
	transform: rotate3d(0, 0, 1, 45deg);
	transition: transform 0.3s ease-in;
}

.button--saqui:hover::after,
.button--saqui:hover {
	transition-timing-function: ease-out;
}

.button--saqui:hover {
	background-color: #3f51b5;
	color: #3f51b5;
}

.button--saqui:hover::after {
	transform: rotate3d(0, 0, 1, 0deg);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--nina" data-text="Filter">
  <span>F</span>
  <span>i</span>
  <span>l</span>
  <span>t</span>
  <span>e</span>
  <span>r</span>
</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--nina {
	background: #7986cb;
	color: #fff;
	transition: background-color 0.3s;
  letter-spacing: 4px;
}

.button--nina > span {
	display: inline-block;
	opacity: 0;
	color: #fff;
  margin: 0 -4px;
	transform: translate3d(0, -10px, 0);
	transition: transform 0.3s, opacity 0.3s;
	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}

.button--nina::before {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 15px 0;
	transition: transform 0.3s, opacity 0.3s;
	transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}

.button--nina:hover {
	background-color: #3f51b5;
}

.button--nina:hover::before {
	opacity: 0;
	transform: translate3d(0, 100%, 0);
}

.button--nina:hover > span {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.button--nina:hover > span:nth-child(1) {
	transition-delay: 0.045s;
}

.button--nina:hover > span:nth-child(2) {
	transition-delay: 0.09s;
}

.button--nina:hover > span:nth-child(3) {
	transition-delay: 0.135s;
}

.button--nina:hover > span:nth-child(4) {
	transition-delay: 0.18s;
}

.button--nina:hover > span:nth-child(5) {
	transition-delay: 0.225s;
}

.button--nina:hover > span:nth-child(6) {
	transition-delay: 0.27s;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--nanuk">
  <span>F</span>
  <span>i</span>
  <span>l</span>
  <span>t</span>
  <span>e</span>
  <span>r</span>
</a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--nanuk {
	background: #7986cb;
	transition: background-color 0.3s;
}

.button--nanuk.button--inverted {
	background: #fff;
	color: #7986cb;
}

.button--nanuk > span {
	display: inline-block;
}

.button--nanuk:hover {
	background-color: #3f51b5;
}

.button--nanuk:hover span {
  transition: opacity 0.3s;
}

.button--nanuk:hover > span:nth-child(odd) {
	animation: anim-nanuk-1 0.5s forwards;
}

.button--nanuk:hover > span:nth-child(even) {
	animation: anim-nanuk-2 0.5s forwards;
}

.button--nanuk:hover > span:nth-child(odd),
.button--nanuk:hover > span:nth-child(even) {
	transition-animation-function: cubic-bezier(0.75, 0, 0.125, 1);
}

@-webkit-keyframes anim-nanuk-1 {
	0%,
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	49% {
		opacity: 1;
		transform: translate3d(0, 200%, 0);
	}
	50% {
		opacity: 0;
		transform: translate3d(0, 200%, 0);
		color: inherit;
	}
	51% {
		opacity: 0;
		transform: translate3d(0, -200%, 0);
		color: #fff;
	}
	100% {
		color: #fff;
	}
}

@-webkit-keyframes anim-nanuk-2 {
	0%,
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	49% {
		opacity: 1;
		transform: translate3d(0, -200%, 0);
	}
	50% {
		opacity: 0;
		transform: translate3d(0, -200%, 0);
		color: inherit;
	}
	51% {
		opacity: 0;
		transform: translate3d(0, 200%, 0);
		color: #fff;
	}
	100% {
		color: #fff;
	}
}

.button--nanuk:hover > span:nth-child(1) {
	animation-delay: 0s;
}

.button--nanuk:hover > span:nth-child(2) {
	animation-delay: 0.05s;
}

.button--nanuk:hover > span:nth-child(3) {
	animation-delay: 0.1s;
}

.button--nanuk:hover > span:nth-child(4) {
	animation-delay: 0.15s;
}

.button--nanuk:hover > span:nth-child(5) {
	animation-delay: 0.2s;
}

.button--nanuk:hover > span:nth-child(6) {
	animation-delay: 0.25s;
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--nuka button--inverted"><span>Button 12</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 44px;
  margin: 0 3px 6px 3px;
  text-align: center;
  border: solid 2px #ffffff;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button--nuka {
	transition: color 0.3s;
  color: #37474f;
  border: none;
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  border-radius: 40px;
}

.button--nuka span {
  position: relative;
  z-index: 2;
}

.button--nuka::before,
.button--nuka::after {
	content: '';
	position: absolute;
	border-radius: inherit;
	background: #fff;
	z-index: 1;
}

.button--nuka::before {
	top: -5px;
	bottom: -5px;
	left: -5px;
	right: -5px;
	opacity: 0.2;
	transform: scale3d(0.7, 1, 1);
	transition: transform 0.3s, opacity 0.3s;
}

.button--nuka::after {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform: scale3d(1.1, 1, 1);
	transition: transform 0.3s, background-color 0.3s;
}

.button--nuka::before,
.button--nuka::after {
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.button--nuka:hover {
	color: #fff;
}

.button--nuka:hover::before {
	opacity: 1;
}

.button--nuka:hover::after {
	background-color: #7986cb;
}

.button--nuka:hover::after,
.button--nuka:hover::before {
	transform: scale3d(0.95, 1, 1);
}
`,
  },


  {
    id: "8z8lfq1886d",
    html: `<a class="button button--sacnite"><span>Button 13</span></a>`,
    css: `.button {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  padding: 15px 54px;
  margin: 0 3px 6px 3px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  white-space: nowrap;
  border-radius: 4px;
}

.button.button--sacnite {
	color: #37474f;
	transition: color 0.3s;
}

.button--sacnite::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: inherit;
	z-index: 0;
	box-shadow: inset 0 0 0 35px #fff;
	transform: scale3d(0.9, 0.9, 1);
	transition: box-shadow 0.3s, transform 0.3s;
}

.button--sacnite .button__icon {
	font-size: 22px;
	width: 22px;
}

.button--sacnite > span {
  position: relative;
  z-index: 1;
}

.button--sacnite:hover {
	color: #fff;
}

.button--sacnite:hover::before {
	box-shadow: inset 0 0 0 2px #fff;
	transform: scale3d(1, 1, 1);
}
`,
  },
]