for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//        alert("cc");

        
        var buttonInnerHtml = this.innerHTML;
        
        makeSound(buttonInnerHtml);
        buttonanime(buttonInnerHtml);
            
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonanime(event.key);
});

function makeSound(key) {
    
    switch(key) {
            case "w":
                var audio=new Audio('sounds/tom-1.mp3');
                audio.play();   
                break;
            
            case "a":
                var audio=new Audio('sounds/tom-2.mp3');
                audio.play();   
                break;
            
            case "s":
                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();   
                break;
                
            case "d":
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();   
                break;
                
            case "j":
                var audio=new Audio('sounds/snare.mp3');
                audio.play();   
                break;
                
            case "k":
                var audio=new Audio('sounds/crash.mp3');
                audio.play();   
                break;
                
            case "l":
                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();   
                break;
                  
            default: console.log(key)
                break;
    }
}

function buttonanime(curkey){
    var btn=document.querySelector("."+curkey)
    btn.classList.add("pressed");
//    timeout function .1s
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}
    