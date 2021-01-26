tree.addEventListener("click",(event)=>{
    if (event.target.tagName == "LI") {
    for (let i = 0; i < event.target.children.length; i++) {
    event.target.children[i].hidden = !event.target.children[i].hidden;
    }
    }
    });