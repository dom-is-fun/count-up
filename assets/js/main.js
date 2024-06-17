const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const valueOfOne = $$('.counterBox ')
const numberOne = valueOfOne[0].querySelector('p:nth-child(2)')
const numbertwo = valueOfOne[1].querySelector('p:nth-child(2)')
const numberthree = valueOfOne[2].querySelector('p:nth-child(2)')

function renderTime(el, end) {
    let speed = 10
    let start = 0
    setInterval(() => {
        start += speed
        if (start > end) {
            el.innerText = end
        }
        else el.innerText = start
    }, 1);
}

renderTime(numberOne, 3000)
renderTime(numbertwo, 10000)
renderTime(numberthree, 2000)