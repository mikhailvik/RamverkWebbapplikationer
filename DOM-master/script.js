window.onload = function() {
    // Lyssna efter händelser
    const profiles = document.querySelectorAll(".profile");

    profiles.forEach((img) => {
        // Наведение мыши на изображение — применить эффект
        img.addEventListener("mouseover", () => {
            effectOn(img.id);
        });

        // Уводим мышь — убираем эффект
        img.addEventListener("mouseout", () => {
            effectOff(img.id);
        });

        // Клик на изображение — меняем должность через prompt
        img.addEventListener("click", (e) => {
            editTitle(e);
        });
    });
}



var editTitle = function(e) {
    // Ändra "team-title"
};

function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?

    let img = document.getElementById(id);
    if (img) {
        img.style.boxShadow = "0 0 15px 5px rgba(0, 0, 0, 0.5)";
        img.style.border = "2px solid #007bff";
        img.style.borderRadius = "5px";
    }
}


function effectOff(id){
    // Stäng av effekten när musen inte längre är ovanför personen
    let img = document.getElementById(id);
    if (img) {
        img.style.boxShadow = "none";
        img.style.border = "none";
    }
}

