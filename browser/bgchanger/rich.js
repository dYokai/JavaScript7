let color = undefined

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked()
    })
})

function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 */
function updateBg() {
    color = getBgColor() // update state
    renderBg()               // render based on the updated state
}

function getBgColor() {
    // const colors = ['black', 'red', 'green', 'white', 'blue']
    // return colors[Math.floor(Math.random() * colors.length)]

    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const hex = [...letters, ...digits]

    color = '#'
    for (let i = 0; i<= 6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length)
        color += hex[randomHex]
    }   
}

/**
 * View - UI rendering
 */
function renderBg() {
    document.querySelector('#hex').innerHTML = color
    document.body.style.backgroundColor = color
}

