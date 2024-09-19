var depart = document.getElementById("depart");
var dlist = document.getElementsByClassName("dropdown")[0];
var ditems= document.getElementsByClassName("ditem");
depart.addEventListener('mouseover', () => {
    dlist.style.display = "block";
    depart.style.backgroundColor="#0d6efd";
    depart.style.color="white";
});

depart.addEventListener('mouseout', () => {
    dlist.style.display = "none";
    depart.style.backgroundColor="white";
    depart.style.color="#0d6efd";
});

dlist.addEventListener('mouseover', () => {
    dlist.style.display = "block";
    depart.style.backgroundColor="#0d6efd";
    depart.style.color="white";
});

dlist.addEventListener('mouseout', () => {
    dlist.style.display = "none";
    depart.style.backgroundColor="white";
    depart.style.color="#0d6efd";
});
for (let i=0;i<ditems.length;i++)
{
    ditems[i].addEventListener('mouseover', () => {
        ditems[i].style.backgroundColor="#BFBFBF";
        ditems[i].style.color="black";
    });
    ditems[i].addEventListener('mouseout', () => {
        ditems[i].style.backgroundColor="#0d6efd";
    });
}