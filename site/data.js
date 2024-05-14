const categoryTemplate = document.querySelector("#category-template");
const entryTemplate = document.querySelector("#entry-template");

const dailiesNode = document.querySelector("#dailies");
const weekliesNode = document.querySelector("#weeklies");

const dailies = [
    {
        title: "Arcane River Dailies",
        subContent: ["Vanishing Journey", "Chu-Chu Island", "Lachelein", "Arcana", "Morass", "Esfera", "Tenebris"],
    },

    {
        title: "Grandis Dailies",
        subContent: ["Cernium", "Arcus", "Odium", "Shangri-La", "Arteria", "Carcion", "Erda's Request"],
    },

    {
        title: "Bosses",
        subContent: ["Zakum", "Magnus", "Hilla", "Papulatus", "Pierre", "Von Bon", "Crimson Queen", "Vellum", "Von Leon", "Horntail", "Arkarium", "Pink Bean", "Gollux"],
    },

    {
        title: "Misc.",
        subContent: ["Monster Park", "Maple Tour", "Ursus", "Legion", "Commerci", "Event Coin Cap", "Profession Stamina", "Threads of Fate", "Monster Collection", "Maple Home", "Fairy Bros Daily Gift", "Fairy Bros Golden Giveaway"],
    },
        
];

const weeklies = [
    {
        title: "Arcane River Weeklies",
        subContent: ["Vanishing Journey", "Chu-Chu Island", "Lachelein", "Arcana", "Morass", "Esfera"],
    },

    {
        title: "Bosses",
        subContent: ["C. Zakum", "HMagnus", "HHilla", "HPapulatus", "C. Pierre", "C. Von Bon", "C. Crimson Queen", "C. Pink Bean", "Cygnus", "Lotus", "Damien", "Guardian Angel Slime", "Lucid", "Will", "Gloom", "VHilla", "PNo", "Akechi"],
    },

    {
        title: "Misc.",
        subContent: ["Scrapyard Weeklies", "Dark World Tree Weeklies", "Culvert", "Event Weeklies"],
    },
];

function addContent(content, idNode, type) {
    for (const attribute of content) {
        const categoryNode = categoryTemplate.content.cloneNode(true);
        const titleNode = categoryNode.querySelector(".collapse-title");
        const formControlNode = categoryNode.querySelector(".form-control");
        const categoryCheckboxNode = categoryNode.querySelector(".category-checkbox");
        categoryCheckboxNode.addEventListener("change", (event) => {
            localStorage.setItem(`${type}-${attribute.title}`, event.target.checked);
        });

        const state = localStorage.getItem(`${type}-${attribute.title}`);
        categoryCheckboxNode.checked = state === "true";

        titleNode.textContent = attribute.title
        for (const entry of attribute.subContent) {
            const entryNode = entryTemplate.content.cloneNode(true);
            const checkbox = entryNode.querySelector("input[type='checkbox']")
            checkbox.addEventListener("change", (event) => {
                localStorage.setItem(`${type}-${entry}`, event.target.checked);
            });

            const state = localStorage.getItem(`${type}-${entry}`);
            checkbox.checked = state === "true";

            const spanNode = entryNode.querySelector("span");
            spanNode.textContent = entry;
    
            formControlNode.appendChild(entryNode);
        }

        idNode.appendChild(categoryNode);
    }
}

addContent(dailies, dailiesNode, "daily");
addContent(weeklies, weekliesNode, "weekly");

function updateCountdown(resetTime, type) {
    const daysNode = document.querySelector(`#${type}-days`);
    const hoursNode = document.querySelector(`#${type}-hours`);
    const minutesNode = document.querySelector(`#${type}-minutes`);
    const secondsNode = document.querySelector(`#${type}-seconds`);

    const now = new Date();
    const timeUntilReset = Math.floor((resetTime - now) / 1000);
    const seconds = timeUntilReset % 60;
    const minutes = Math.floor((timeUntilReset / 60) % 60);
    const hours = Math.floor(timeUntilReset / 60 / 60) % 24;
    const days = Math.floor(timeUntilReset / 60 / 60 / 24);
    console.log(days);

    if (type !== "daily") {
        daysNode.style = `--value:${days}`;
    }
    hoursNode.style = `--value:${hours}`;
    minutesNode.style = `--value:${minutes}`;
    secondsNode.style = `--value:${seconds}`;
}

setInterval(() => {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    updateCountdown(midnight, "daily");
    
    const thursReset = new Date();
    thursReset.setDate(thursReset.getDate() + 4 - thursReset.getDay());
    thursReset.setUTCHours(0, 0, 0, 0);
    console.log("thursday reset:", thursReset);
    updateCountdown(thursReset, "weekly1")
    
    const monReset = new Date();
    monReset.setDate(monReset.getDate() + 8 - monReset.getDay());
    monReset.setUTCHours(0, 0, 0, 0)
    console.log("monday reset:", monReset);
    updateCountdown(monReset, "weekly2")
}, 500);

