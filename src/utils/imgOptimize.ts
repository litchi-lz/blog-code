const optimizeLoad = () => {
    setTimeout(() => {
        const preList = document.querySelectorAll(".pre");
        console.log(preList);
        preList.forEach((preItem) => {
            preItem.classList.add("loaded");
        })
        const nextList = document.querySelectorAll(".next");
        nextList.forEach((nextItem, i) => {
            nextItem.classList.add("loaded");
            nextItem.addEventListener("transitionend", function animationend() {
                preList[i].classList.add("hidden");
                nextItem.removeEventListener("transitionend", animationend);
            })
        })
    }, 2000);
}
export {
    optimizeLoad
}