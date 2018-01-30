console.log("JS TEST");

let header = document.getElementById("page-header");
let saywhat = document.getElementById("output");

function handleHeaderMouseEvent (event) {
    // console.log("event", event.currentTarget);
    saywhat.innerHTML = "The force is strong with this mouse";
}

function handleHeaderMouseOut (event) {
    saywhat.innerHTML = "Rememeber... the Force is will be with you always.";
}


let listItems = document.getElementsByClassName("list-item");
for (var i = 0; i < listItems.length; i++) {
    listItems.item(i).addEventListener("click", handleClick);
}


function handleClick (MouseEvent) {
    let elementText = MouseEvent.target.innerHTML;
    saywhat.innerHTML = "hummm, " + elementText + " clicked you have";
}


header.addEventListener("mouseover", handleHeaderMouseEvent);
header.addEventListener("mouseout", handleHeaderMouseOut);

var yodaImage = document.getElementById("theYoda");

document.getElementById("change-color").addEventListener("click", () => {
    yodaImage.classList.toggle("flashy");
})

document.getElementById("force-lots-of")
  .addEventListener("click", function() {
  yodaImage.classList.toggle("moreforce");
});

document.getElementById("add-border")
  .addEventListener("click", function() {
  yodaImage.classList.toggle("bordered");
});