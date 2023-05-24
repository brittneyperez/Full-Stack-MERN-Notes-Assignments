const Player = require("../models/player.model");

module.exports = {
    // CREATE
    createPlayer: (request, response) => {
        Player.create(request.body)
            .then((player) => {
                console.log({ createdPlayer: player });
                // console.log(player); // ? This is what the JSON Request will look like
                response.status(200).json(player);
            })
            .catch((err) => response.status(400).json(err));
    },
    // READ
    findPlayers: (request, response) => {
        Player.find()
            .then((players) => {
                console.log({ players });
                response.status(200).json(players);
            })
            .catch((err) => response.status(400).json(err));
    },
    findOnePlayer: (request, response) => {
        console.log( request.params )
        Player.findOne({ _id: request.params.id })
            .then((onePlayer) => {
                console.log({ onePlayer });
                response.status(200).json(onePlayer);
            })
            .catch((err) => response.status(400).json(err));
    },
    // UPDATE
    updatePlayer: (request, response) => {
        console.log(`Updating Author:`, request.body)
        Player.findOneAndUpdate( {_id:request.params.id}, request.body, {new:true, runValidators:true} )
            .then((updatedAuthor) => {
                console.log({ updatedAuthor });
                response.status(200).json(updatedAuthor);
            })
            .catch((err) => response.status(400).json(err));
    },
    // DELETE
    deletePlayer: (request, response) => {
        Player.deleteOne({ _id:request.params.id })
            .then((deleteConfirmation) => {
                console.log({ deleteConfirmation });
                response.status(200).json(deleteConfirmation);
            })
            .catch((err) => response.status(400).json(err));
    }
}