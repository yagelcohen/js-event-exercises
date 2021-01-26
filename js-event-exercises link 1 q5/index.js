
// function add1(){
//     list.hidden=false;
// }

// function rem(){
//     list.hidden=true;
// }



// ele.addEventListener('click' , rem);
// ele.addEventListener('click', add1);


list.hidden=true;

function myFunction() {
    let x = document.getElementById("list");
    if (x.hidden === true) {
      x.hidden = false;
    } else {
      x.hidden = true;
    }
  }
  ele.addEventListener('click' , myFunction);