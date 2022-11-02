const sketch = document.querySelector('div#sketch');
let numberCase = 0;

numberCase = prompt('Combiens de case veux tu ?');

function doWidthDiv(number){
    let y = 900/number
    
    return Math.sqrt(y);
}

function dispalyDiv(numberCases){
    const div = document.createElement('div');
    for( i=0 ; i < numberCases ; i++){
        const div = document.createElement('div');
        div.setAttribute('id', 'square')
        div.style.cssText = `width:${doWidthDiv(numberCase)}rem ;height:${doWidthDiv(numberCase)}rem `
        sketch.appendChild(div)
    }
}


dispalyDiv(numberCase);

const divs = document.querySelectorAll('div#square')


divs.forEach(div => {
    div.addEventListener('mouseover',function(){
    div.style.cssText = `background-color : black ;width:${doWidthDiv(numberCase)}rem ;height:${doWidthDiv(numberCase)}rem `
    });
})

const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click',function(){
    divs.forEach(div => {
        div.style.cssText = `background-color : white ;width:${doWidthDiv(numberCase)}rem ;height:${doWidthDiv(numberCase)}rem `
    })
})
