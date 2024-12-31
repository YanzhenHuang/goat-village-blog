function setHamburgerBtn(){
    let hamburgerBtn = document.querySelector(".hamburgerBtn");
    let navList = document.querySelector(".navList");
    let strike1 = document.querySelector(".hamburgerBtnStrike:nth-child(1)");
    let strike2 = document.querySelector(".hamburgerBtnStrike:nth-child(2)");
    let strike3 = document.querySelector(".hamburgerBtnStrike:nth-child(3)");

    hamburgerBtn.addEventListener("click", function () {
        navList.classList.toggle("hiddenWhenNarrow");
        strike1.classList.toggle("toggled");
        strike2.classList.toggle("toggled");
        strike3.classList.toggle("toggled");
    });
}

setHamburgerBtn();