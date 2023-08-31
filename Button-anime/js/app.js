import { REVEAL } from './loaders/reveal.js';
import { SLIDE } from './loaders/slide.js';
import { LINK } from './loaders/link.js';
import { BORDER } from './loaders/border.js';
import { DISTORTED } from './loaders/distorted.js';
import { STYLISH } from './loaders/stylish.js';

const LOADERS = [...DISTORTED, ...STYLISH, ...LINK, ...SLIDE, ...REVEAL, ...BORDER];

const main = document.getElementById('mainDiv');
let counter = 0;

// Create Spinners 
LOADERS.forEach((loader, i) => {
    createLoader(i);
})

function createLoader(i) {
    let loader = LOADERS[i];

    if (loader.id === "heading" || loader.id === "main") {
        main.insertAdjacentHTML("beforeend", loader.html);

        let mainEl = document.createElement('main');
        mainEl.setAttribute('id', 'main');
        mainEl.setAttribute('data-id', ++counter);
        main.appendChild(mainEl);
    }
    else {
        // Create html
        let sectionEl = document.createElement('div');
        sectionEl.setAttribute('class', 'section');
        sectionEl.setAttribute('data-id', loader.id);
        sectionEl.setAttribute('data-index', (i + 1));
        let shadowRoot = sectionEl.attachShadow({ mode: 'open' });

        let loaderEl = document.createElement('div');
        loaderEl.innerHTML = loader.html;
        loaderEl.querySelector('a').href = `javascript:void(0);`;
        shadowRoot.appendChild(loaderEl);

        //Create CSS 
        let loaderStyles = document.createElement('style');
        loaderStyles.type = 'text/css';
        loaderStyles.innerHTML = loader.css;
        shadowRoot.appendChild(loaderStyles);

        let mainEl = document.querySelector(`main[data-id="` + counter + `"]`);
        mainEl.appendChild(sectionEl);

        return sectionEl
    }
}




document.querySelectorAll('#main .section').forEach(elm => {
    elm.addEventListener('click', (e) => {
        let index = parseInt(e.target.dataset.index);
        let showCase = document.querySelector('.showcase');

        showCase.replaceChildren(createLoader((index - 1)));

        // console.log(e);
        showCase.dataset.index = index;

        // load code
        document.querySelector('#markup').textContent = LOADERS[index - 1].html;
        document.querySelector('#css').textContent = LOADERS[index - 1].css;

        // popup
        document.querySelector('body').classList.add('pop')
        document.querySelector('.overlay').classList.add('in')
    })
})


// close popup
document.querySelector('.btn-close').addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('pop')
    document.querySelector('.overlay').classList.remove('in');
});

document.querySelector('.overlay').addEventListener('click', (e) => {
    if (e.target.className === "overlay in") {
        document.querySelector('body').classList.remove('pop')
        document.querySelector('.overlay').classList.remove('in');
    }
});


// Copy to clipboard
document.querySelectorAll('.copy').forEach(copyBtn => {
    copyBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        selectText(id);
        document.execCommand("copy");
        e.target.textContent = 'Copied';

        setTimeout(time => e.target.textContent = 'Copy', 300);
    })
});


// select Text
function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
