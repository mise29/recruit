const burger = document.querySelector(".burger");
const nav = document.querySelector(".navLi");
// querySelectorAll = .navLi li の全てを取得できる（all）
const navLinks = document.querySelectorAll(".navLi li");


// burger push
// toggle = class名をつけたり消したりする
burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
        // humburger-menu を２回目以降押したとき
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
    });
    burger.classList.toggle("toggle")
})


//ページをトップに戻す function() ()は何でも可
document.querySelector('.rayTopLogo').addEventListener('click', function(e) {
    e.preventDefault(); // ページ遷移をキャンセル
    window.scrollTo({ top: 0, behavior: 'smooth' });
});