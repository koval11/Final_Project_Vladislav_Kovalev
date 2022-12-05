let animationIsUnderway = false;

const btnStart    = document.getElementById('btn_start_animation');
const btnStop     = document.getElementById('btn_stop_animation');
const imageInHTML = document.getElementById('product_img');

const imagePathBegining = "images/product-images/bike-";
const imagePathEnding = ".jpg";

let Animation;
let Timeout;
let TimeoutPop;

let count = 1;
let countBefore = 1;


const popup = document.getElementById('pop-up'); 
const closeButton = document.getElementById("close-pop-up");

const interval = 10;
const incrementer = 10;
let counter = 0;

TimeoutPop = setTimeout(function(){
	
	const startTime = Date.now();

	popup.style.opacity = 0;
	popup.style.display = "block";
	
	let intervalId;
	intervalId  = setInterval(function(){

        
       
        counter = counter + incrementer;
        
		popup.style.opacity = 0.001 * counter;

		// console.log(counter);

        
        if(counter >= 1000){
            
			console.log(`Time elapsed: ${Date.now() - startTime}`);
            clearInterval(intervalId);
        }
    }, interval);

	
}, 3000);


closeButton.addEventListener('click', function (){
   
    popup.style.display = "none";
});

btnStart.addEventListener('click', function(){

	clearTimeout(TimeoutPop);

	if( !animationIsUnderway ){
			
			animationIsUnderway = true;
		
			Animation = requestAnimationFrame(function(){Timeout = setTimeout(rotate, 100)});
	}
});

btnStop.addEventListener('click', function(){
    
  	animationIsUnderway = false;
    
	clearTimeout(Timeout);
    cancelAnimationFrame(Animation);

});

function rotate(){

	if(count == 1){
		count++;
		countBefore = 1;
		imageInHTML.src = `${imagePathBegining}${count}${imagePathEnding}`;
	}else if(count == 34){
		count--;
		countBefore = 34;
		imageInHTML.src = `${imagePathBegining}${count}${imagePathEnding}`;
	}else if(countBefore < count){
		count++;
		countBefore++;
		imageInHTML.src = `${imagePathBegining}${count}${imagePathEnding}`;
	}else{
		count--;
		countBefore--;
		imageInHTML.src = `${imagePathBegining}${count}${imagePathEnding}`;
	}

	setTimeout(function(){
		Animation = requestAnimationFrame(rotate);
	},200)
}



