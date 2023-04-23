
const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');


for(let x=0;x<stars.length;x++){
    stars[x].starValue = (x+1);

    ['click','mouseover','mouseout'].forEach(function(e){
        stars[x].addEventListener(e,showRating);
    })

}
function showRating(e){
    let type = e.type;
    
    let starvalue = this.starValue;

    if( type === 'click'){
        if(starvalue >= 1){
            output.innerHTML = `You Gave ${starvalue} star ratings.`;
        }
    }
    
    stars.forEach(function(ele,ind){
        if(type === 'click'){
            if(ind<starvalue){
                ele.classList.add('orange');
            }else{
                ele.classList.remove('orange');
            }
        }
        if(type === 'mouseover'){
            if(ind<starvalue){
                ele.classList.add('yellow');
            }else{
                ele.classList.remove('yellow');
            }
        }
        if(type === 'mouseout'){
            ele.classList.remove('yellow');
        }
    })
    
}

function nextpage(){
    window.location.reload();
}

