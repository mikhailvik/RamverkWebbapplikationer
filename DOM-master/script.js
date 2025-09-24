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
    const img = e.target; // Det elementet som klickades
    const memDiv = img.closest(".team-member"); // Hitta närmaste förälder med klass "team-member"
    const titleElement = memDiv.querySelector(".team-title"); // Hitta <p>-elementet med klass "team-title"

    if (titleElement) {
        const newTitle = prompt("Ange ny arbetstitel please:"); // Fråga användaren efter ny titel
        if (newTitle) {
            titleElement.textContent = newTitle; // Uppdatera texten
        }
    }
};


function effectOn(id){
    // Rita en ram runt personen, kanske lite drop shadow?

    let img = document.getElementById(id);
    if (img) {
        img.style.boxShadow = "0 0 15px 5px rgba(0, 0, 0, 0.5)";
        img.style.border = "3px solid #007bff";
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

