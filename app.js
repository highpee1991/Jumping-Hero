let character = document.querySelector("#character");
let block = document.querySelector("#block");

jump = () => {
    if (character.classList != "animate") {
    character.classList.add("animate")
};
    setTimeout( () => {
        character.classList.remove("animate")
    }, 500)
}

var checkDead = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let BlockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(BlockLeft < 20 && BlockLeft > 0 &&  characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You Loose Refesh and try again")
    }
}, 10);