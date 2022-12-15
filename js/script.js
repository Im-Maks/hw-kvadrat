function change_div(){
    var kvadrat = document.getElementById('kv')
    var w = document.getElementById('width').value
    var h = document.getElementById('height').value
    var bg = document.getElementById('bg').value
    var bgImg = document.getElementById('bgImg').value
    var position = document.getElementById('position').value
    var top = document.getElementById('top').value
    var left = document.getElementById('left').value
    var border = document.getElementById('border').value
    var border_r = document.getElementById('border_r').value
    var box_sh = document.getElementById('box_sh').value
    var text = document.getElementById('text').value
    var font_size = document.getElementById('font_size').value
    var color = document.getElementById('color').value

    kvadrat.style.width = w
    kvadrat.style.height = h
    kvadrat.style.background = bg
    kvadrat.style.backgroundImage = 'url('+bgImg+')'
    kvadrat.style.position = position
    kvadrat.style.top = top
    kvadrat.style.left = left
    kvadrat.style.border = border
    kvadrat.style.borderRadius = border_r
    kvadrat.style.boxShadow = box_sh
    kvadrat.style.color = color
    kvadrat.style.fontSize = font_size
    kvadrat.style.transition = "0.5s"
    kv.innerHTML = "text"

}
