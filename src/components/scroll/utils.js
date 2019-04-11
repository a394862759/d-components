const outerStyle = {
    width: '100px',
    height: '100px',
    overflow: 'scroll',
    visibility: 'hidden',
    position: 'absolute',
    top: '-9999px'
}

const innerStyle = {
    width: '100%',
    height: '100%',
    visibility: 'hidden'
}

function cover(obj, coverObject) {
    for(let attr in coverObject) {
        obj[attr] = coverObject[attr]
    }
}

export function getNativeScrollBarWidth() {
    let outer = document.createElement("div")
    cover(outer.style, outerStyle)
    document.body.appendChild(outer)
    let outerWidth = outer.offsetWidth

    let inner = document.createElement("div")
    cover(inner.style, innerStyle)
    outer.appendChild(inner)
    let innerWidth = inner.offsetWidth

    let barWidth = outerWidth - innerWidth
    outer.removeChild(inner)
    outer.parentNode.removeChild(outer)
    return barWidth
}