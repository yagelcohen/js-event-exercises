let container = document.getElementsByClassName("container")
container.onclick = function(event){
  if(event.target.tagName !== "BUTTON"){
              return;}
       let rem = event.target.closest(".section");
        rem.remove();
    }





