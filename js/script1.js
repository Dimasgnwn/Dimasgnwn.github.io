// toggle menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
});
//toggle menu end

let data = prompt ("masukan umur");

if (data >= 90) {
    alert ("grade A");
} else
if (data >= 70) {
    alert (" grade B");
} else
if (data >= 50) {
    alert ("Grade C");
} else {
    alert ("Grade D");
}