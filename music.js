var noOfButtons=document.querySelectorAll(".song").length;

for(var a=0; a<noOfButtons; a++){
    document.querySelectorAll(".song")[a].addEventListener("click",function(){
      var buttonInner= this.innerHTML
       makeSound(buttonInner);
    })          
} 
      document.addEventListener("keydown",function(event){
        console.log(event.key);
        makeSound(event.key);
      })
      
    







function makeSound (key){
switch(key){
    case "a":
        var song1=new Audio(`songs/song-english-edm-296526.mp3`)
        song1.play();
         break;

    case "b":
            var song2=new Audio(`songs/song-english-edm-296526.mp3`)
            song2.play();
             break;
    case "c":
        var song3=new Audio(`songs/song-english-edm-296526.mp3`)
        song3.play();
         break;
   
    default:
        console.log("click the valid key");
    }
}