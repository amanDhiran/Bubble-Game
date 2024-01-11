let clutter = "";

for (let i = 0; i < 168; i++) {
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
    
}

document.querySelector(".pbot").innerHTML = clutter;