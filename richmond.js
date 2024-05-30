const first = document.getElementById("first");
const second = document.getElementById("second");

const attractionHeading = document.getElementById("attraction_heading");
const attractionInfo = document.getElementById("attraction_info");
const attractionList = document.getElementById("city_attraction_list");

var infoContent = {
    cityDefault: {
        heading: "About Richmond, VA",
        info: "Richmond, the capital of Virginia, is among America’s oldest major cities. Patrick Henry, a U.S. Founding Father, famously declared “Give me liberty or give me death” at its St. John's Church in 1775, leading to the Revolutionary War. The White House of the Confederacy, home of Confederate President Jefferson Davis during the Civil War, is now a museum in Court End, a neighborhood known for Federal-style mansions."
    },
    first: {
        heading: "Virginia Museum of Fine Arts",
        info: "The Virginia Museum of Fine Arts (VMFA), located in Richmond, Virginia, is one of the largest comprehensive art museums in the United States. Renowned for its extensive collections, VMFA features over 35,000 artworks spanning 5,000 years, including significant holdings of American, European, and Asian art, as well as African, South Asian, and Islamic art. The museum offers a dynamic array of exhibitions, educational programs, and community events, providing a vibrant cultural hub for art enthusiasts of all ages. With free general admission, VMFA is dedicated to making world-class art accessible to everyone."
    },
    second: {
        heading: "Richmond National Battlefield Park",
        info: "Richmond National Battlefield Park, located in Virginia, preserves the historic sites of multiple key Civil War battles fought around the Confederate capital of Richmond. The park spans over 2,200 acres and includes visitor centers, preserved battlefields, historic buildings, and interpretive trails. It offers a comprehensive look into the strategic military campaigns, with exhibits and guided tours that delve into the stories of soldiers and civilians. This park provides an immersive experience for history enthusiasts, highlighting the significant events that shaped the outcome of the Civil War."
    },
};


first.addEventListener("mouseover", () => {
    updateAttractionInfo("first");
});

first.addEventListener("mouseleave", () => {
    updateAttractionInfo("cityDefault");
});

second.addEventListener("mouseover", () => {
    updateAttractionInfo("second");
});

second.addEventListener("mouseleave", () => {
    updateAttractionInfo("cityDefault");
});



function updateAttractionInfo(location) {
    attractionHeading.textContent = infoContent[location].heading;
    attractionInfo.textContent = infoContent[location].info;
}