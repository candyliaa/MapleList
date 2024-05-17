const categoryTemplate = document.querySelector("#category-template");
const entryTemplate = document.querySelector("#entry-template");

const dailiesNode = document.querySelector("#dailies");
const weekliesThursNode = document.querySelector("#weeklies-thurs");
const weekliesMonNode = document.querySelector("#weeklies-mon");
const othersNode = document.querySelector("#others");
const checkboxes = {
    "daily": [],
    "weekly-thurs": [],
    "weekly-mon": [],
    "others": [],
};

const dailies = [
    {
        title: {name: "Arcane River Dailies", image: "https://maplestory.io/api/GMS/250/npc/3006390/icon/"},
        subContent: [{name: "Vanishing Journey", image: "https://maplestory.io/api/GMS/250/npc/3003104/icon/"}, {name: "Chu-Chu Island", image: "https://maplestory.io/api/GMS/250/npc/3003152/icon/"}, {name: "Lachelein", image: "https://maplestory.io/api/GMS/250/npc/3003209/icon/"}, {name: "Arcana", image: "https://maplestory.io/api/GMS/250/npc/3003309/icon/"}, {name: "Morass", image: "https://maplestory.io/api/GMS/250/npc/3003406/icon/"}, {name: "Esfera", image: "https://maplestory.io/api/GMS/250/npc/3003500/icon/"}, {name: "Tenebris", image: "https://maplestory.io/api/GMS/250/npc/3003810/icon/"}],
    },

    {
        title: {name: "Grandis Dailies", image: "https://maplestory.io/api/GMS/250/item/1713000/icon?resize=4"},
        subContent: [{name: "Cernium", image: "https://maplestory.io/api/GMS/250/npc/3004419/icon/"}, {name: "Arcus", image: "https://maplestory.io/api/GMS/250/npc/3005016/icon/"}, {name: "Odium", image: "https://maplestory.io/api/GMS/250/npc/3005532/icon/"}, {name: "Shangri-La", image: "https://maplestory.io/api/GMS/250/npc/3005134/icon/"}, {name: "Arteria", image: "https://maplestory.io/api/GMS/250/npc/1013425/icon/"}, {name: "Carcion", image: "https://maplestory.io/api/GMS/250/npc/3006516/icon/"}, {name: "Erda's Request", image: "https://maplestory.io/api/GMS/250/npc/1540940/icon/"}],
    },

    {
        title: {name: "Bosses", image: "https://maplestory.io/api/GMS/250/item/4001886/icon?resize=4"},
        subContent: [{name: "Zakum", image: "https://maplestory.io/api/GMS/250/mob/8800000/render/stand"}, {name: "Magnus", image: "https://maplestory.io/api/GMS/250/npc/2159355/icon/"}, {name: "Hilla", image: "https://maplestory.io/api/GMS/250/npc/1540529/icon/"}, {name: "Papulatus", image: "https://maplestory.io/api/GMS/250/npc/2043000/icon/"}, {name: "Pierre", image: "https://maplestory.io/api/GMS/250/mob/8900101/render/stand"}, {name: "Von Bon", image: "https://maplestory.io/api/GMS/250/npc/9000204/icon/"}, {name: "Crimson Queen", image: "https://maplestory.io/api/GMS/250/npc/1064030/icon/"}, {name: "Vellum", image: "https://maplestory.io/api/GMS/250/npc/1064017/icon/"}, {name: "Von Leon", image: "https://maplestory.io/api/GMS/250/npc/2159310/icon/"}, {name: "Horntail", image: "https://maplestory.io/api/GMS/250/npc/9000325/icon/"}, {name: "Arkarium", image: "https://maplestory.io/api/GMS/250/npc/1540528/icon/"}, {name: "Pink Bean", image: "https://maplestory.io/api/GMS/250/npc/9000410/icon/"}, {name: "Gollux", image: "https://maplestory.io/api/GMS/250/npc/9390121/icon/"}],
    },

    {
        title: {name: "Misc.", image: "https://maplestory.io/api/GMS/250/item/4310018/icon?resize=4"},
        subContent: [{name: "Monster Park", image: "https://maplestory.io/api/GMS/250/npc/9071003/icon/"}, {name: "Maple Tour", image: "https://maplestory.io/api/GMS/250/npc/9401143/icon/"}, {name: "Ursus", image: "https://maplestory.io/api/GMS/250/npc/9001087/icon/"}, {name: "Legion", image: "https://maplestory.io/api/GMS/250/npc/9010106/icon/"}, {name: "Commerci", image: "https://maplestory.io/api/GMS/250/npc/9390220/icon/"}, {name: "Event Coin Cap", image: "https://maplestory.io/api/GMS/250/item/4310253/icon?resize=4"}, "Profession Stamina", {name: "Threads of Fate", image: "https://maplestory.io/api/GMS/250/npc/9111001/icon/"}, {name: "Monster Collection", image: "https://maplestory.io/api/GMS/250/mob/100000/render/stand"}, {name: "Maple Home", image: "https://maplestory.io/api/GMS/250/npc/9400930/icon/"}, {name: "Fairy Bros Daily Gift", image: "https://maplestory.io/api/GMS/250/npc/2013000/icon/"}, {name: "Golden Giveaway", image: "https://maplestory.io/api/GMS/250/npc/2013000/icon/"}],
    },
        
];

const weekliesThurs = [
    {
        title: {name: "Bosses", image: "https://maplestory.io/api/GMS/250/item/4001886/icon?resize=4"},
        subContent: [{name: "C. Zakum", image: "https://maplestory.io/api/GMS/250/mob/8800000/render/stand"}, {name: "H. Magnus", image: "https://maplestory.io/api/GMS/250/npc/2159355/icon/"}, {name: "H. Hilla", image: "https://maplestory.io/api/GMS/250/npc/1540529/icon/"}, {name: "H. Papulatus", image: "https://maplestory.io/api/GMS/250/npc/2043000/icon/"}, {name: "C. Pierre", image: "https://maplestory.io/api/GMS/250/mob/8900101/render/stand"}, {name: "C. Von Bon", image: "https://maplestory.io/api/GMS/250/npc/9000204/icon/"}, {name: "C. Crimson Queen", image: "https://maplestory.io/api/GMS/250/npc/1064030/icon/"}, {name: "C. Vellum", image: "https://maplestory.io/api/GMS/250/npc/1064017/icon/"}, {name: "C. Pink Bean", image: "https://maplestory.io/api/GMS/250/npc/9000410/icon/"}, {name: "Cygnus", image: "https://maplestory.io/api/GMS/250/npc/1540450/icon/"}, {name: "Lotus", image: "https://maplestory.io/api/GMS/250/npc/9075000/icon/"}, {name: "Damien", image: "https://maplestory.io/api/GMS/250/npc/1540809/icon/"}, {name: "Guardian Angel Slime", image: "https://maplestory.io/api/GMS/250/npc/1013615/icon/"}, {name: "Lucid", image: "https://maplestory.io/api/GMS/250/npc/3003250/icon/"}, {name: "Will", image: "https://maplestory.io/api/GMS/250/npc/3003519/icon/"}, {name: "Gloom", image: ""}, {name: "Verus Hilla", image: "https://maplestory.io/api/GMS/250/npc/3003771/icon/"}, {name: "Princess No", image: "https://maplestory.io/api/GMS/250/npc/9000435/icon/"}, {name: "Akechi Mitsuhide", image: "https://maplestory.io/api/GMS/250/npc/9000445/icon/"}],
    },
];

const weekliesMon = [
    {
        title: {name: "Arcane River Weeklies", image: "https://maplestory.io/api/GMS/250/npc/3006390/icon/"},
        subContent: [{name: "Erda Spectrum", image: "https://maplestory.io/api/GMS/250/npc/3003145/icon/"}, {name: "Hungry Muto", image: "https://maplestory.io/api/GMS/250/npc/3003151/icon/"}, {name: "Midnight Chaser", image: "https://maplestory.io/api/GMS/250/npc/9010100/icon/"}, {name: "Spirit Savior", image: "https://maplestory.io/api/GMS/250/npc/3003314/icon/"}, {name: "Ranheim Defense", image: "https://maplestory.io/api/GMS/250/npc/3003490/icon/"}, {name: "Esfera Guardian", image: "https://maplestory.io/api/GMS/250/npc/3003502/icon/"}]
    },

    {
        title: {name: "Misc.", image: "https://maplestory.io/api/GMS/250/item/4310199/icon?resize=4"},
        subContent: [{name: "Scrapyard", image: "https://maplestory.io/api/GMS/250/item/4001842/icon?resize=4"}, {name: "Dark World Tree", image: "https://maplestory.io/api/GMS/250/item/4001868/icon?resize=4"}, {name: "Culvert", image: "https://maplestory.io/api/GMS/250/npc/2012038/icon/"}, {name: "Flag Race", image: "https://maplestory.io/api/GMS/250/npc/9000233/icon/"}, {name: "Mu Lung Dojo", image: "https://maplestory.io/api/GMS/250/npc/2091005/icon/"}]
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
        const titleNode = categoryNode.querySelector(".category-title");
        const formControlNode = categoryNode.querySelector(".form-control");
        const categoryCheckboxNode = categoryNode.querySelector(".category-checkbox");
        categoryCheckboxNode.addEventListener("change", (event) => {
            updateEntryState(type, attribute.title.name, event.target.checked);
        });

        categoryCheckboxNode.checked = getEntryState(type, attribute.title.name);
        const categoryImageNode = categoryNode.querySelector("img");
        categoryImageNode.src = attribute.title.image;

        if (type === "others") {
            categoryImageNode.remove();
        }

        titleNode.textContent = attribute.title.name;

        for (const entry of attribute.subContent) {
            const entryNode = entryTemplate.content.cloneNode(true);
            const checkboxNode = entryNode.querySelector("input[type='checkbox']")
            checkboxes[type].push(checkboxNode);

            checkboxNode.addEventListener("change", (event) => {
                updateEntryState(type, entry.name, event.target.checked);
            });

            checkboxNode.checked = getEntryState(type, entry.name);

            const spanNode = entryNode.querySelector("span");
            spanNode.textContent = entry.name;

            const entryImageNode = entryNode.querySelector("img");
            entryImageNode.src = entry.image;
    
            formControlNode.appendChild(entryNode);
        }

        idNode.appendChild(categoryNode);
    }
}

addContent(dailies, dailiesNode, "daily");
addContent(weekliesThurs, weekliesThursNode, "weekly-thurs");
addContent(weekliesMon, weekliesMonNode, "weekly-mon");

let others = JSON.parse(localStorage.getItem("userCategories"));
if (others === null) {
    localStorage.setItem("userCategories", JSON.stringify([]));
};

addedCategoryNode = document.querySelector("#add-category");
inputCategoryNode = document.querySelector("#category-input");
addedCategoryNode.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(addedCategoryNode);
    const categoryName = formData.get("category-name");
    inputCategoryNode.value = "";
    addOthersCategory(categoryName);
});

function addOthersCategory(categoryName) {
    const categoryNode = categoryTemplate.content.cloneNode(true);
    const titleNode = categoryNode.querySelector(".category-title");
    titleNode.textContent = categoryName;
    const img = categoryNode.querySelector("img");
    img.remove();
    othersNode.appendChild(categoryNode);
    const categories = JSON.parse(localStorage.getItem("userCategories"));
    categories.push({title: {name: categoryName, image: ""}, subContent: []});
    localStorage.setItem("userCategories", JSON.stringify(categories));
};

const categories = JSON.parse(localStorage.getItem("userCategories"));
addContent(categories, othersNode, "others");

function updateCountdown(resetTime, type) {
    const daysNode = document.querySelector(`#${type}-days`);
    const hoursNode = document.querySelector(`#${type}-hours`);
    const minutesNode = document.querySelector(`#${type}-minutes`);

    const now = new Date();
    let timeUntilReset = Math.floor((resetTime - now) / 1000);
    if (resetTime < now) {
        timeUntilReset = 0;
    }
    let minutes = Math.ceil((timeUntilReset / 60) % 60);
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

