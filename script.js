const buttonColors =[
    { name: "red", value: "#ff0000" },
    { name: "blue", value: "#00008b" },
    { name: "yellow", value: "#ffff00" },
    { name: "green", value: "#00ff00" },
    { name: "orange", value: "#ffa500" },
    { name: "purple", value: "#800080" },
    { name: "pink", value: "#ff69b4" },
    { name: "brown", value: "#a52a2a" },
    { name: "gray", value: "#808080" }
];
// Lặp qua tất cả các button để gán sự kiện
for (let i = 1; i <= buttonColors.length; i++) {
    const button = document.getElementById(`but${i}`);
    button.textContent =buttonColors[i-1].name;
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = buttonColors[i - 1].value;
    });}

