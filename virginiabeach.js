const first = document.getElementById("first");
const second = document.getElementById("second");

const attractionHeading = document.getElementById("attraction_heading");
const attractionInfo = document.getElementById("attraction_info");
const attractionList = document.getElementById("city_attraction_list");

var infoContent = {
    cityDefault: {
        heading: "About Virginia Beach, VA",
        info: "Virginia Beach, a coastal city in southeastern Virginia, lies where the Chesapeake Bay meets the Atlantic Ocean. A 3-mile boardwalk stretches along its beach-lined oceanfront. The bayside First Landing State Park marks the 1607 arrival of the Jamestown colonists from England. The Virginia Aquarium & Marine Science Center exhibits ocean life including sharks, rays and sea turtles in globally themed habitats."
    },
    first: {
        heading: "Virginia Aquarium & Marine Science Center",
        info: "The Virginia Aquarium and Marine Science Center in Virginia Beach offers an immersive experience into the world of marine life and coastal environments. Featuring over 800,000 gallons of aquariums, the center showcases diverse species from the depths of the ocean to local coastal habitats. Interactive exhibits, a 3D theater, and outdoor nature trails provide educational and engaging experiences for visitors of all ages."
    },
    second: {
        heading: "Virginia Beach Boardwalk",
        info: "Stretching three miles along the Atlantic shoreline, the Virginia Beach Boardwalk is a bustling, picturesque promenade perfect for leisurely strolls and oceanfront activities. This iconic destination features a separate bike path, nautical sculptures, and a variety of beachfront eateries and shops. With its lively ambiance and array of events, from live music to seasonal festivals, the boardwalk is a central spot for both relaxation and entertainment in Virginia Beach."
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