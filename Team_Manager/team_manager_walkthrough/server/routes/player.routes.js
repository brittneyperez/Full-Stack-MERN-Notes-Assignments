const PlayerController = require("../controllers/player.controller");

module.exports = app => {
    app.get("/api/players", PlayerController.findPlayers);
    app.post("/api/players/create", PlayerController.createPlayer);
    app.get("/api/player/:id", PlayerController.findOnePlayer);
    app.patch("/api/player/:id/update", PlayerController.updatePlayer);
    app.delete("/api/player/:id/delete", PlayerController.deletePlayer);
}