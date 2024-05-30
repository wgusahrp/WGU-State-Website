const luray = document.getElementById("luray");
const shenandoah = document.getElementById("shenandoah");
const williamsburg = document.getElementById("williamsburg");

const attractionHeading = document.getElementById("attraction_heading");
const attractionInfo = document.getElementById("attraction_info");
const attractionList = document.getElementById("attraction_list");

var infoContent = {
    default: {
        heading: "Virginia Facts",
        info: "Virginia, a southeastern U.S. state, stretches from the Chesapeake Bay to the Appalachian Mountains, with a long Atlantic coastline. It's one of the 13 original colonies, with historic landmarks including Monticello, founding father Thomas Jefferson’s iconic Charlottesville plantation. The Jamestown Settlement and Colonial Williamsburg are living-history museums reenacting Colonial and Revolutionary-era life."
    },
    lurayCaverns: {
        heading: "Luray Caverns",
        info: "Luray Caverns, located in Virginia's Shenandoah Valley, is renowned for its impressive underground formations, including towering stalactites and stalagmites. Discovered in 1878, the caverns feature vast chambers, mirrored pools, and the Great Stalacpipe Organ, which produces music using the cave's natural formations. Visitors can enjoy guided tours of this subterranean wonder, making it a popular attraction for both geology enthusiasts and tourists seeking a unique natural spectacle."
    },
    shenandoahNationalPark: {
        heading: "Shenandoah National Park",
        info: 'Shenandoah National Park, located in the Blue Ridge Mountains of Virginia, offers over 200,000 acres of protected wilderness. The park is renowned for its scenic Skyline Drive, which runs 105 miles along the crest of the mountains, providing stunning vistas and access to numerous hiking trails, including a portion of the Appalachian Trail. Visitors can enjoy diverse wildlife, cascading waterfalls, and serene wooded hollows, making it a popular destination for nature enthusiasts and outdoor adventurers.'
    },
    colonialWilliamsburg: {
        heading: "Colonial Williamsburg",
        info: "Colonial Williamsburg is a living history museum in Williamsburg, Virginia, that recreates 18th-century American colonial life. Spanning over 300 acres, it features meticulously restored buildings, historical reenactments, and interactive exhibits. Visitors can explore historic homes, gardens, and trade shops while engaging with costumed interpreters who bring the colonial era to life, providing an immersive educational experience about America's early history."
    },
};


luray.addEventListener("mouseover", () => {
    updateAttractionInfo("lurayCaverns");
});

luray.addEventListener("mouseleave", () => {
    updateAttractionInfo("default");
});

shenandoah.addEventListener("mouseover", () => {
    updateAttractionInfo("shenandoahNationalPark");
});

shenandoah.addEventListener("mouseleave", () => {
    updateAttractionInfo("default");
});

williamsburg.addEventListener("mouseover", () => {
    updateAttractionInfo("colonialWilliamsburg");
});

williamsburg.addEventListener("mouseleave", () => {
    updateAttractionInfo("default");
});



function updateAttractionInfo(location) {
    attractionHeading.textContent = infoContent[location].heading;
    attractionInfo.textContent = infoContent[location].info;
    if (location != "default") {
        attractionList.style.display = "none";
    } else {
        attractionList.style.display = "flex";
    }
}