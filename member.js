function skillsMember() {
    // skills
    var skills = {
        "HTML": "80%",
        "CSS": "70%",
        "JavaScript": "70%",
        "React": "60%",
        "Node.js": "60%",
        "MongoDB": "60%",
        "Express": "60%",
        "Python": "50%",
        "Django": "50%",
        "C/C++": "50%"
    }

    // skills loop
    for (var i in skills) {
        var skill = document.createElement("div");
        skill.className = "skill";
        skill.innerHTML = `
            <div class="skill-title">
                <h4>${i}</h4>
                <h4>${skills[i]}</h4>
            </div>
            <div class="skill-bar">
                <div class="skill-value" style="width: ${skills[i]}"></div>
            </div>
        `;
        document.querySelector(".skills").appendChild(skill);
    }
}