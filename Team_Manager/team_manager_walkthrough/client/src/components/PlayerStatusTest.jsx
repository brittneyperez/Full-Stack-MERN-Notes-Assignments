import axios from "axios";
import { useEffect, useState } from "react";
import SubNav2 from "./SubNav2";
import "../App.css";

const PlayerStatus = ({ setManagePlayerStatusTabIsActive, gameId }) => {
    
    const [playerData, setPlayerData] = useState([]);
    const [triggerGetAllRequestDummy, setTriggerGetAllRequestDummy] = useState(false);
    
    useEffect(() => {
        setManagePlayerStatusTabIsActive(true);
    }, []);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/player")
            .then((response) => {
                console.log(response.data);
                setPlayerData(response.data);
            })
            .catch((err) => console.log(err.response));
    }, [triggerGetAllRequestDummy]);

    const handleChangeGameStatus = (idFromBelow, newStatus) => {
        let putData = {};
        if (gameId === "1") {
            putData.gameOneStatus = newStatus;
        } else if (gameId === "2") {
            putData.gameTwoStatus = newStatus;
        } else {
            putData.gameThreeStatus = newStatus;
        }
        axios.put(`http://localhost:8000/api/player/${idFromBelow}`, putData)
            .then((response) => {
                console.log(response);
                setTriggerGetAllRequestDummy(!triggerGetAllRequestDummy);
            })
            .catch((err) => console.log(err.response));
    };
    
    
    return (
        <div>
            <SubNav2 gameId={gameId} />
            
            <h2>Player Status - Game {props.gameId}</h2>
            
            <table>
                <thead>
                    <tr>Player Name</tr>
                    <tr>Actions</tr>
                </thead>
                <tbody>
                {/* CONDITION RENDER FOR GAMESTATUS === 1 */}
                {gameId === "1" ? (
                    playerData.map((player, index) => {
                        return (
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>
                                    <button
                                        className={`${
                                            player.gameOneStatus === "Playing"
                                            ? "green-playing-btn"
                                            : ""
                                        }`}
                                        onClick={() =>
                                        handleChangeGameStatus(player._id, "Playing")
                                        }
                                    >
                                        Playing
                                    </button>
                                    <button
                                        className={`${
                                            player.gameOneStatus === "Not Playing"
                                            ? "red-not-playing-btn"
                                            : ""
                                        }`}
                                        onClick={() =>
                                            handleChangeGameStatus(player._id, "Not Playing")
                                        }
                                    >
                                        Not Playing
                                    </button>
                                    <button
                                        className={`${
                                            player.gameOneStatus === "Undecided"
                                            ? "yellow-undecided-btn"
                                            : ""
                                        }`}
                                        onClick={() =>
                                            handleChangeGameStatus(player._id, "Undecided")
                                        }
                                    >
                                        Undecided
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                ) : (
                <></>
            )}
            {/* CONDITION RENDER FOR GAMESTATUS === 2 */}
            {gameId === "2" ? (
                playerData.map((player, index) => {
                return (
                    <tr key={player._id}>
                        <td>{player.name}</td>
                        <td>
                            <button
                            className={`${
                                player.gameTwoStatus === "Playing"
                                ? "green-playing-btn"
                                : ""
                            }`}
                            onClick={() =>
                                handleChangeGameStatus(player._id, "Playing")
                            }
                            >
                            Playing
                            </button>
                            <button
                            className={`${
                                player.gameTwoStatus === "Not Playing"
                                ? "red-not-playing-btn"
                                : ""
                            }`}
                            onClick={() =>
                                handleChangeGameStatus(player._id, "Not Playing")
                            }
                            >
                            Not Playing
                            </button>
                            <button
                            className={`${
                                player.gameTwoStatus === "Undecided"
                                ? "yellow-undecided-btn"
                                : ""
                            }`}
                            onClick={() =>
                                handleChangeGameStatus(player._id, "Undecided")
                            }
                            >
                            Undecided
                            </button>
                        </td>
                    </tr>
                );
                })
            ) : (
                <></>
            )}
            {/* CONDITION RENDER FOR GAMESTATUS === 3 */}
            {gameId === "3" ? (
                playerData.map((player, index) => {
                return (
                    <tr key={player._id}>
                    <td>{player.name}</td>
                    <td>
                        <button
                        className={`${
                            player.gameThreeStatus === "Playing"
                            ? "green-playing-btn"
                            : ""
                        }`}
                        onClick={() =>
                            handleChangeGameStatus(player._id, "Playing")
                        }
                        >
                        Playing
                        </button>
                        <button
                        className={`${
                            player.gameThreeStatus === "Not Playing"
                            ? "red-not-playing-btn"
                            : ""
                        }`}
                        onClick={() =>
                            handleChangeGameStatus(player._id, "Not Playing")
                        }
                        >
                        Not Playing
                        </button>
                        <button
                        className={`${
                            player.gameThreeStatus === "Undecided"
                            ? "yellow-undecided-btn"
                            : ""
                        }`}
                        onClick={() =>
                            handleChangeGameStatus(player._id, "Undecided")
                        }
                        >
                        Undecided
                        </button>
                    </td>
                    </tr>
                        );
                        })
                    ) : (
                        <></>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerStatus;