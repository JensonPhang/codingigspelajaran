function changeSection(num) {
    let sections = document.getElementsByClassName("Section");
    let nav = document.getElementsByClassName("nav");
    let image = document.getElementsByClassName("bearimage");
    let add = document.getElementsByClassName("address");
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        nav[i].style.color = "black"
    }
    nav[num - 1].style.color = "blue"
    sections[num - 1].style.display = "block";
    if (num == 1) {
        image[0].className = "bearimage active";
        add[0].style.display = "none";
    } else if (num > 1) {
        image[0].className = "bearimage non";
        add[0].style.display = "block";
    }
}