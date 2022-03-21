

function linearMove(el, attr, space, target) {
    clearInterval(el.timer);
    el.timer = setInterval(function () {
        var currentStyle = parseInt(getStyle(el, attr));
        if (Math.abs(target - currentStyle) <= Math.abs(space)) {
            el.style[attr] = target + 'px';
            clearInterval(el.timer);
        } else {
            el.style[attr] = currentStyle + space + 'px';
        }
    }, 20)
}

function getStyle(el, attr) {
    if (el.currentStyle) { // IE
        return el.currentStyle[attr]
    } else {
        return getComputedStyle(el)[attr]
    }
}