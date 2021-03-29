

const tooltips = document.querySelectorAll('.all-tooltips .tooltip');
const contents = document.querySelector('.tooltip-content .content');

// you don't get content elements when you loop through tooltips, name is not semantic here
tooltips.forEach(contents =>{
    const pin = tooltip.querySelector('.pin');
    // I believe variables can't have hyphen you can say tooltipContent instead
    const content = tooltip-content.querySelector('.tooltip-content .content');
    // you need to remove active from other contents before adding it again
    pin.addEventListener('click', ()=>{
        content.classList.add('active');
    })
})