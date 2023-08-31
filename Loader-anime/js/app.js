import { BUBBLE } from './loaders/bubble.js';
import { CIRCLE } from './loaders/circle.js';
import { RECT } from './loaders/rect.js';
import { LINE } from './loaders/line.js';
import { TEXT } from './loaders/text.js';
import { OBJECTS } from './loaders/objects.js';

const LOADERS = [...CIRCLE, ...BUBBLE, ...RECT, ...LINE, ...TEXT, ...OBJECTS];

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

        let loaderEl = document.createElement('span');
        loaderEl.setAttribute('class', 'loader');
        loaderEl.innerHTML = loader.content || null;
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
