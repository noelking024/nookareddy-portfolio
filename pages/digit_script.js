const counters = document.querySelectorAll(".ab-text span");
const container = document.querySelector(".ab-text");

let activated = false;

window.addEventListener('scroll', () => {
    if(
        scrollY > container.offsetTop - container.offsetHeight -200
        && activated === false
    ){
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;
            function updateCount(){
                const target = parseInt(counter.dataset.count);
                if(count < target){
                    count ++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });
    } else if(
        scrollY < container.offsetTop - container.offsetHeight - 500
        || scrollY === 0
        && activated ===true
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});