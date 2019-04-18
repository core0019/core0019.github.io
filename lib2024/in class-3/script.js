window.onload = init;

function init() {

    document.querySelector('blue').onclick = changeColor;
    document.querySelector('red').onclick = changeColor;
    
    document.querySelector('show').onclick = showHideMobileMenu;
    document.querySelector('hide').onclick = showHideMobileMenu;
}

function changeColor() {
    var elementId = this.id;
    this.style.backgroundColor = "#C5CAE9";
    this.style.backgroundColor = "#ffa291";
    var indicatorText = document.getElementById("indicator-text");
    if(!indicatorText.innerHTML.includes(elementId)

}