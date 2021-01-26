ul.addEventListener('mousedown', function(e) {
    if( e.target.nodeName != 'LI' ) return;
    
    let li = e.target;
    
    if ( e.metaKey || e.ctrlKey ) {
    li.classList.toggle('selected');
    } else {
    let siblings = [...li.parentNode.children].filter(child => child != li);
    
    siblings.forEach(s => s.classList.remove('selected'));
    li.classList.add('selected');
    }
    
    e.preventDefault();
    });