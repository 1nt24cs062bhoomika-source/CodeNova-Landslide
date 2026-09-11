document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".filter");

    const alerts = document.querySelectorAll(".alert-card");

    const refreshButton =
        document.getElementById("refreshAlerts");

    const alertCount =
        document.getElementById("alertCount");

    const activeAlerts =
        document.getElementById("activeAlerts");

    const lastUpdated =
        document.getElementById("lastUpdated");


    /* =========================
       FILTER ALERTS
    ========================= */

    filters.forEach(function (button) {

        button.addEventListener("click", function () {

            filters.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.getAttribute("data-filter");

            let visibleCount = 0;


            alerts.forEach(function (alert) {

                const level =
                    alert.getAttribute("data-level");

                if (
                    filter === "all" ||
                    level === filter
                ) {

                    alert.style.display = "block";

                    visibleCount++;

                } else {

                    alert.style.display = "none";

                }

            });

            alertCount.textContent =
                visibleCount;

        });

    });


    /* =========================
       REFRESH ALERTS
    ========================= */

    refreshButton.addEventListener(
        "click",
        function () {

            refreshButton.textContent =
                "↻ REFRESHING...";

            setTimeout(function () {

                const now = new Date();

                const hours =
                    String(now.getHours())
                    .padStart(2, "0");

                const minutes =
                    String(now.getMinutes())
                    .padStart(2, "0");

                lastUpdated.textContent =
                    hours + ":" + minutes;

                refreshButton.textContent =
                    "↻ REFRESH ALERTS";

            }, 800);

        }
    );


    /* =========================
       ACKNOWLEDGE
    ========================= */

    const acknowledgeButtons =
        document.querySelectorAll(".ack");


    acknowledgeButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    button.closest(".alert-card");

                card.style.opacity = "0.5";

                button.textContent =
                    "ACKNOWLEDGED";

                button.disabled = true;

                let current =
                    parseInt(activeAlerts.textContent);

                if (current > 0) {

                    current--;

                    activeAlerts.textContent =
                        String(current).padStart(2, "0");

                    alertCount.textContent =
                        current;

                }

            }
        );

    });


    /* =========================
       VIEW DETAILS
    ========================= */

    const viewButtons =
        document.querySelectorAll(".view");


    viewButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    button.closest(".alert-card");

                const location =
                    card.querySelector(
                        ".alert-title p"
                    ).textContent;

                document.getElementById(
                    "selectedLocation"
                ).textContent = location;

            }
        );

    });

});