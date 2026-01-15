const slider = document.getElementById('projectsContainer');
const wrapper = document.querySelector('.projects-wrapper');

let scrollX = 0;

wrapper.addEventListener('wheel', e => {
    const containerWidth = slider.scrollWidth;
    const wrapperWidth = wrapper.clientWidth;
    const maxScroll = containerWidth - wrapperWidth;

 
    let newScrollX = scrollX + e.deltaY;

    newScrollX = Math.max(0, Math.min(newScrollX, maxScroll));


    const canScrollHorizontally = newScrollX !== scrollX;

    if (canScrollHorizontally) {
        e.preventDefault();      
        scrollX = newScrollX;
        slider.style.transform = `translateX(${-scrollX}px)`;
    }
    
});
