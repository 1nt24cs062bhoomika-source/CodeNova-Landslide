from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static"
)


@app.route("/")
def home():
    return render_template("dashboard.html")


@app.route("/risk-analysis")
def risk_analysis():
    return render_template("risk-analysis.html")


@app.route("/alert-center")
def alert_center():
    return render_template("alert-center.html")


if __name__ == "__main__":
    app.run(debug=True)