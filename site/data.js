const categoryTemplate = document.querySelector("#category-template");
const entryTemplate = document.querySelector("#entry-template");

const dailiesNode = document.querySelector("#dailies");
const weekliesThursNode = document.querySelector("#weeklies-thurs");
const weekliesMonNode = document.querySelector("#weeklies-mon");
const checkboxes = {
    "daily": [],
    "weekly-thurs": [],
    "weekly-mon": [],
};

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

const weekliesThurs = [
    {
        title: "Bosses",
        subContent: ["C. Zakum", "HMagnus", "HHilla", "HPapulatus", "C. Pierre", "C. Von Bon", "C. Crimson Queen", "C. Pink Bean", "Cygnus", "Lotus", "Damien", "Guardian Angel Slime", "Lucid", "Will", "Gloom", "VHilla", "PNo", "Akechi"],
    },
];

const weekliesMon = [
    {
        title: "Arcane River Weeklies",
        subContent: ["Vanishing Journey", "Chu-Chu Island", "Lachelein", "Arcana", "Morass", "Esfera"]
    },

    {
        title: "Misc.",
        subContent: ["Scrapyard", "Dark World Tree", "Culvert", "Flag Race", "Mu Lung Dojo"]
    },
];


function updateEntryState(type, entry, newState) {
    const stateJSON = localStorage.getItem(type);
    const state = stateJSON ? JSON.parse(stateJSON) : {};
    state[entry] = newState;
    localStorage.setItem(type, JSON.stringify(state));
}

function getEntryState(type, entry) {
    const stateJSON = localStorage.getItem(type);
    const state = stateJSON ? JSON.parse(stateJSON) : {};
    return state[entry] === true;
}

function clearState(type) {
    localStorage.removeItem(type);
    for (const checkbox of checkboxes[type]) {
        checkbox.checked = false;
    }
}

function addContent(content, idNode, type) {
    for (const attribute of content) {
        const categoryNode = categoryTemplate.content.cloneNode(true);
        const titleNode = categoryNode.querySelector(".collapse-title");
        const formControlNode = categoryNode.querySelector(".form-control");
        const categoryCheckboxNode = categoryNode.querySelector(".category-checkbox");
        categoryCheckboxNode.addEventListener("change", (event) => {
            updateEntryState(type, attribute.title, event.target.checked);
        });

        categoryCheckboxNode.checked = getEntryState(type, attribute.title);

        titleNode.textContent = attribute.title
        for (const entry of attribute.subContent) {
            const entryNode = entryTemplate.content.cloneNode(true);
            const checkboxNode = entryNode.querySelector("input[type='checkbox']")
            checkboxes[type].push(checkboxNode);

            checkboxNode.addEventListener("change", (event) => {
                updateEntryState(type, entry, event.target.checked);
            });

            checkboxNode.checked = getEntryState(type, entry);

            const spanNode = entryNode.querySelector("span");
            spanNode.textContent = entry;
    
            formControlNode.appendChild(entryNode);
        }

        idNode.appendChild(categoryNode);
    }
}

addContent(dailies, dailiesNode, "daily");
addContent(weekliesThurs, weekliesThursNode, "weekly-thurs");
addContent(weekliesMon, weekliesMonNode, "weekly-mon");

function updateCountdown(resetTime, type) {
    const daysNode = document.querySelector(`#${type}-days`);
    const hoursNode = document.querySelector(`#${type}-hours`);
    const minutesNode = document.querySelector(`#${type}-minutes`);

    const now = new Date();
    let timeUntilReset = Math.floor((resetTime - now) / 1000);
    if (resetTime < now) {
        timeUntilReset = 0;
    }
    const minutes = Math.ceil((timeUntilReset / 60) % 60);
    if (minutes == 60) {
        minutes = 59;
    }
    const hours = Math.floor(timeUntilReset / 60 / 60) % 24;
    const days = Math.floor(timeUntilReset / 60 / 60 / 24);

    if (type !== "daily") {
        daysNode.style = `--value:${days}`;
    }
    hoursNode.style = `--value:${hours}`;
    minutesNode.style = `--value:${minutes}`;

    return timeUntilReset;
}

let lastTimeUntilDailyReset = Infinity
let lastTimeUntilThursReset = Infinity
let lastTimeUntilMonReset = Infinity

setInterval(() => {
    const midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);
    let timeTillReset = updateCountdown(midnight, "daily");
    if (timeTillReset > lastTimeUntilDailyReset) {
        clearState("daily");
    }
    lastTimeUntilDailyReset = timeTillReset

    const thursReset = new Date();
    thursReset.setUTCDate(thursReset.getUTCDate() + 4 - thursReset.getUTCDay());
    thursReset.setUTCHours(0, 0, 0, 0);
    if (thursReset < Date.now()) {
        let temp = thursReset.getUTCDate();
        thursReset.setUTCDate(temp + 7);
    }
    timeTillReset = updateCountdown(thursReset, "weekly1");
    if (timeTillReset > lastTimeUntilThursReset) {
        clearState("weekly-thurs");
    }
    lastTimeUntilThursReset = timeTillReset
    
    const monReset = new Date();
    monReset.setUTCDate(monReset.getUTCDate() + 1 - monReset.getUTCDay());
    monReset.setUTCHours(0, 0, 0, 0);
    if (monReset < Date.now()) {
        let temp = monReset.getUTCDate();
        monReset.setUTCDate(temp + 7);
    }
    timeTillReset = updateCountdown(monReset, "weekly2");
    if (timeTillReset > lastTimeUntilMonReset) {
        clearState("weekly-mon");
    }
    lastTimeUntilMonReset = timeTillReset

}, 500);

