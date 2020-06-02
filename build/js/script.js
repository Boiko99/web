let cards = document.querySelectorAll('.banner-slider .cards');

let current = 0;
let timer;
// function Autotimer(){
//     timer = setTimeout(function , 3000);
// }
    function slider(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('opacity0');
            
        }
        setTimeout(slider , 2000);
        cards[current].classList.remove('opacity0');
        if(current+1 == cards.length){
            current = 0;
            
        }
        else{
            current++
            clearTimeout(setTimeout)
        }
        
    }
document.querySelector('.banner-slider').onclick = slider;
setTimeout(slider , 2000);
//document.querySelector('.banner-slider');



    

