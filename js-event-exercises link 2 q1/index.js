const a = document.querySelector("a")
a.addEventListener("click", (Event) =>{
    const exit = confirm(
        `are you sure you want go to ${a.getAttribute("href")}?`)
    if(!exit){Event.preventDefault()}
});



// const array = document.querySelectorAll("A")
// for (const a of array){
// a.addEventListener("click", (event) =>{
//     const exit = confirm(
//         `are you sure you want go to ${a.getAttribute("href")}?`)
//     if(!exit){event.preventDefault()}
// });
// }


