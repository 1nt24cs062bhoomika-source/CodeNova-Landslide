// ==========================================
// CodeNova Landslide Monitoring Dashboard
// Prototype JavaScript
// ==========================================


// ---------- LAST UPDATED TIME ----------

function updateTime() {
    const timeElement = document.getElementById("lastUpdated");

    if (timeElement) {
        const now = new Date();

        timeElement.textContent = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    }
}

updateTime();


// ---------- ZONE SELECTION ----------

function showZone(name, risk, level, rainfall, soil, slope) {

    document.getElementById("zoneName").textContent = name;
    document.getElementById("zoneRisk").textContent = risk;
    document.getElementById("zoneLevel").textContent = level;

    document.getElementById("rainfall").textContent =
        rainfall + " mm";

    document.getElementById("soil").textContent =
        soil + "%";

    document.getElementById("slope").textContent =
        slope + "°";


    // Change badge appearance according to risk level

    const badge = document.getElementById("zoneLevel");

    badge.classList.remove(
        "critical-badge",
        "high-badge",
        "medium-badge"
    );


    if (level === "CRITICAL") {
        badge.classList.add("critical-badge");
    }
    else if (level === "HIGH") {
        badge.classList.add("high-badge");
    }
    else {
        badge.classList.add("medium-badge");
    }


    // Update risk circle

    const circle = document.querySelector(".score-circle");

    if (circle) {

        let riskColor = "#42d392";

        if (risk >= 75) {
            riskColor = "#ff4d5a";
        }
        else if (risk >= 55) {
            riskColor = "#ff9f43";
        }
        else if (risk >= 35) {
            riskColor = "#ffd166";
        }

        circle.style.background =
            `radial-gradient(circle, #0d1b2d 59%, transparent 60%),
             conic-gradient(${riskColor} ${risk}%, #243347 0)`;
    }

}


// ---------- GENERATE ALERT ----------

function generateAlert() {

    const zone =
        document.getElementById("zoneName").textContent;

    const risk =
        document.getElementById("zoneRisk").textContent;


    // Create alert message

    const message =
        `🚨 ALERT GENERATED\n\n` +
        `Zone: ${zone}\n` +
        `Risk Level: ${risk}% CRITICAL\n\n` +
        `Recommended actions:\n` +
        `• Issue local warning\n` +
        `• Prioritize field inspection\n` +
        `• Monitor rainfall continuously\n` +
        `• Alert disaster management authority`;


    alert(message);


    // Update active alert count

    const alertCount =
        document.querySelector(".alert-count");

    if (alertCount) {
        alertCount.textContent = "04 ACTIVE";
    }

}


// ---------- NAVIGATION ----------

const navItems =
    document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        navItems.forEach(nav =>
            nav.classList.remove("active")
        );

        this.classList.add("active");

    });

});


// ---------- SIMULATED LIVE UPDATE ----------

// Updates the timestamp every 30 seconds

setInterval(updateTime, 30000);


console.log(
    "CodeNova Landslide Monitoring Dashboard loaded successfully."
);