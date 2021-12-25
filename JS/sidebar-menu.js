const openinigBtn = document.querySelector(".sidebar_hamburger");
const closingBtn = document.querySelector(".sidebar_close");
const sidebar = document.querySelector(".sidebar");


openinigBtn.addEventListener("click", function(){
    sidebar.classList.add('sidebar_opened');
});

closingBtn.addEventListener("click", function(){
    sidebar.classList.remove('sidebar_opened');
});