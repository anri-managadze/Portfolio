
// Change color (darkmode/lightmode) start

const colorChangeBtn = document.querySelector('.change');

colorChangeBtn.addEventListener("click", function () {
    document.querySelector(".light-mode").classList.toggle("dark-mode");

    let theme = "light";
    if (document.querySelector(".light-mode").classList.contains("dark-mode")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.querySelector(".light-mode").classList.add("dark-mode");
}

// Change color (darkmode/lightmode) end

document.querySelector('.reload').addEventListener('click', function (){
    location.reload();
})
