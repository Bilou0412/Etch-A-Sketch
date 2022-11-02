const sketch = document.querySelector('div#sketch');
let numberCases = 0;



function doWidthDiv(number){
    let y = 900/number
    return Math.sqrt(y);
}

function dispalyDiv(numberCases){
    const div = document.createElement('div');
    for( i=0 ; i < numberCases ; i++){
        const div = document.createElement('div');
        div.setAttribute('id', 'square')
        div.style.cssText = `width:${doWidthDiv(numberCases)}rem ;height:${doWidthDiv(numberCases)}rem `
        sketch.appendChild(div)
    }
    const divs = document.querySelectorAll('div#square')
    divs.forEach(div => {
    div.addEventListener('mouseover',function(){
    div.style.cssText = `background-color : black ;width:${doWidthDiv(numberCases)}rem ;height:${doWidthDiv(numberCases)}rem `
    });
})
}

const divs = document.querySelectorAll('div#square')
divs.forEach(div => {
    div.addEventListener('mouseover',function(){
    div.style.cssText = `background-color : black ;width:${doWidthDiv(numberCases)}rem ;height:${doWidthDiv(numberCases)}rem `
    });
})

const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click',function(){
    const divs = document.querySelectorAll('div#square')
    divs.forEach(div => {
        div.style.cssText = `background-color : white ;width:${doWidthDiv(numberCases)}rem ;height:${doWidthDiv(numberCases)}rem `
    })
})

const buttons = document.querySelectorAll('#button')

buttons.forEach(button => {
    button.addEventListener('click',function(e){
        const divs = document.querySelectorAll('div#square')
        divs.forEach(div => {
            const sketch = document.querySelector('div#sketch');
            sketch.removeChild(div);
        })
        numberCases = (e.target.className);
        dispalyDiv(e.target.className);
        })
});


