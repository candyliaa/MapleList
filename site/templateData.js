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

function addContent(content, idNode) {
    for (attribute of content) {
        const categoryNode = categoryTemplate.content.cloneNode(true);
        const titleNode = categoryNode.querySelector(".collapse-title");
        const formControlNode = categoryNode.querySelector(".form-control");

        titleNode.textContent = attribute.title
        for (const entry of attribute.subContent) {
            const entryNode = entryTemplate.content.cloneNode(true);
            const spanNode = entryNode.querySelector("span");
            spanNode.textContent = entry;
    
            formControlNode.appendChild(entryNode);
        }

        idNode.appendChild(categoryNode);
    }
}

addContent(dailies, dailiesNode);
addContent(weeklies, weekliesNode);

const currentTime = new Date();
const resetTime = new Date(0, 0, 0, 0, 0)
const timeUntilReset = resetTime.getSeconds() - currentTime.getSeconds()
if (timeUntilReset <= 0) {
    
}
