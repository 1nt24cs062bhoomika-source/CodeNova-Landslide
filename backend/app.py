from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static"
)


# =========================
# HOME / DASHBOARD
# =========================

@app.route("/")
def home():
    return render_template("dashboard.html")


# =========================
# RISK ANALYSIS
# =========================

@app.route("/risk-analysis")
def risk_analysis():
    return render_template("risk-analysis.html")


@app.route("/alert-center")
def alert_center():
    return render_template("alert-center.html")


# =========================
# RISK MAP
# =========================

@app.route("/risk-map")
def risk_map():
    return render_template("risk-map.html")


# =========================
# ALERT CENTER
# =========================

@app.route("/alerts")
def alerts():
    return render_template("alerts.html")


# =========================
# ANALYTICS
# =========================

@app.route("/analytics")
def analytics():
    return render_template("analytics.html")


# =========================
# FIELD TEAMS
# =========================

@app.route("/field-teams")
def field_teams():
    return render_template("field_teams.html")


# =========================
# SCAN / OTHER PAGES
# =========================

@app.route("/scan")
def scan():
    return render_template("scan.html")


@app.route("/coach")
def coach():
    return render_template("coach.html")


@app.route("/profile")
def profile():
    return render_template("profile.html")


# =========================
# RUN APPLICATION
# =========================

if __name__ == "__main__":
    app.run(debug=True)