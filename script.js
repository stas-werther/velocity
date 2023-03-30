const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

const hideTabs = () => {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(btn => btn.classList.remove("active"))
}

const showTab = (index) => {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

// ------------------------
const anchors = document.querySelectorAll(".header__nav a");
anchors.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const id = item.getAttribute("href");
        const el = document.querySelector(id);

        window.scroll({
            top: el.offsetTop - 76,
            behavior: 'smooth'
        });
    });
});