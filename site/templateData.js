const categoryTemplate = document.querySelector("#category-template");
const entryTemplate = document.querySelector("#entry-template");

const dailiesNode = document.querySelector("#dailies");

const dailies = [
    {
        title: "Arcane River Dailies",
        subDailies: ["Vanishing Journey", "Chu-Chu Island", "Lachelein", "Arcana", "Morass", "Esfera", "Tenebris"]
    },

    {
        title: "Grandis Dailies",
        subDailies: ["Cernium", "Arcus", "Odium", "Shangri-La", "Arteria", "Carcion", "Erda's Request"]
    },

    {
        title: "Bosses",
        subDailies: ["Zakum", "Magnus", "Hilla", "Papulatus", "Pierre", "Von Bon", "Crimson Queen", "Vellum", "Von Leon", "Horntail", "Arkarium", "Pink Bean", "Gollux"]
    },

    {
        title: "Misc.",
        subDailies: ["Monster Park", "Maple Tour", "Ursus", "Legion", "Commerci", "Event Coin Cap", "Profession Stamina", "Threads of Fate", "Monster Collection", "Maple Home", "Fairy Bros Daily Gift", "Fairy Bros Golden Giveaway"]
    }
        
];

const weeklies = [
    {
        title: "Arcane River Weeklies",
        subWeeklies: ["Vanishing Journey", "Chu-Chu Island", "Lachelein", "Arcana", "Morass", "Esfera"]
    },

    {
        title: "Bosses",
        subWeeklies: ["C. Zakum", "HMagnus", "HHilla", "HPapulatus", "C. Pierre", "C. Von Bon", "C. Crimson Queen", "C. Pink Bean", "Cygnus", "Lotus", "Damien", "Guardian Angel Slime", "Lucid", "Will", "Gloom", "VHilla", "PNo", "Akechi"]
    },

    {
        title: "Misc.",
        subWeeklies: ["Scrapyard Weeklies", "Dark World Tree Weeklies", "Culvert", "Event Weeklies"]
    }
]

for (daily of dailies) {
    const categoryNode = categoryTemplate.content.cloneNode(true);
    const titleNode = categoryNode.querySelector(".collapse-title");
    const formControlNode = categoryNode.querySelector(".form-control");

    titleNode.textContent = daily.title
    for (const subDaily of daily.subDailies) {
        const entryNode = entryTemplate.content.cloneNode(true);
        const spanNode = entryNode.querySelector("span");
        spanNode.textContent = subDaily;

        formControlNode.appendChild(entryNode);
    }

    dailiesNode.appendChild(categoryNode);
}

