const categoryTemplate = documnet.querySelector("#category-template");
const entryTemplate = document.querySelector("#entry-template");

const dailiesNode = document.querySelector("#dailies");

const dailies = [
    {
        title: "Arcane River Dailies",
        subDailies: ["Vanishing Journey", "Chu-Chu Island", "Lachelein", "Arcana", "Morass", "Esfera", "Moonbridge"]
    },
];

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

