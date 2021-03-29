

const tooltips = document.querySelectorAll('.all-tooltips .tooltip');
const contents = document.querySelector('.tooltip-content .content');


tooltips.forEach(contents =>{
    const pin = tooltip.querySelector('.pin');
    const content = tooltip-content.querySelector('.tooltip-content .content');
    pin.addEventListener('click', ()=>{
        content.classList.add('active');
    })
})