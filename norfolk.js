const first = document.getElementById("first");
const second = document.getElementById("second");

const attractionHeading = document.getElementById("attraction_heading");
const attractionInfo = document.getElementById("attraction_info");
const attractionList = document.getElementById("city_attraction_list");

var infoContent = {
    cityDefault: {
        heading: "About Norfolk, VA",
        info: "Norfolk is a waterfront city in southeastern Virginia. It’s home to Naval Station Norfolk, a massive naval base on Chesapeake Bay. Nauticus is a maritime museum that features the Battleship Wisconsin, a huge WWII warship. The Chrysler Museum of Art showcases a vast collection of glass art, plus European and American paintings and sculpture. The riverside Virginia Zoo is home to bears, birds, lions and farm animals."
    },
    first: {
        heading: "Wells Theatre",
        info: "The Wells Theatre, located in Norfolk, Virginia, is a historic performing arts venue that first opened its doors in 1913. Known for its stunning Beaux-Arts architecture, the theater features an ornate interior with grand chandeliers, intricate moldings, and a beautifully decorated auditorium. Today, the Wells Theatre is home to the Virginia Stage Company, hosting a variety of theatrical productions and cultural events throughout the year. This landmark serves as a vibrant cultural hub, celebrating the performing arts and the rich history of Norfolk."
    },
    second: {
        heading: "PIXELS Pints & Bytes",
        info: "PIXELS Pints & Bytes, located in Norfolk, Virginia, is a unique venue that combines a retro arcade experience with a modern bar and restaurant. Offering a wide selection of classic arcade games, pinball machines, and console games, it provides a nostalgic gaming atmosphere for patrons of all ages. The menu features a variety of craft beers, cocktails, and casual bites, making it an ideal spot for both gaming enthusiasts and food lovers. With its lively ambiance and diverse entertainment options, PIXELS Pints & Bytes is a popular destination for a fun and engaging night out."
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