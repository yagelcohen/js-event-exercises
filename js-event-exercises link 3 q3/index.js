const tooltip = document.getElementById('tooltip');
  
document.addEventListener('mouseover', function(event) {
  const elem = event.target;
  const tooltipData = event.target.dataset.tooltip;

  if(tooltipData) {
    tooltip.innerHTML = tooltipData;

    if((window.scrollY + tooltip.offsetHeight) > elem.offsetTop) {
      tooltip.style.top = elem.offsetTop + elem.offsetHeight - window.scrollY+ 'px';
    } else {
      tooltip.style.top = elem.offsetTop - tooltip.offsetHeight - window.scrollY + 'px';
    }

    tooltip.style.left = elem.offsetLeft - window.scrollX + 'px';
    tooltip.style.visibility = 'visible';
  }

});

document.addEventListener('mouseout', function(event) {
  const tooltipData = event.target.dataset.tooltip;
});
