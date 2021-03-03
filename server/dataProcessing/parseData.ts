import {getDataFromIas} from "./getDataFromIas";

function parseData(data: string) {
    let parsedData = JSON.parse(data).Data;

    delete parsedData.AllPlays;
    delete parsedData.GoalZones;
    delete parsedData.DelegateIds;
    delete parsedData.TechnicalDelegateName;

    delete parsedData.TeamA.BlockZones;
    delete parsedData.TeamA.Coaches;
    delete parsedData.TeamA.ColorCoaches1;
    delete parsedData.TeamA.ColorCoaches2;
    delete parsedData.TeamA.ColorCoaches3;
    delete parsedData.TeamA.ColorGoalkeepers1;
    delete parsedData.TeamA.ColorGoalkeepers2;
    delete parsedData.TeamA.ColorGoalkeepers3;
    delete parsedData.TeamA.ColorPlayers1;
    delete parsedData.TeamA.ColorPlayers2;
    delete parsedData.TeamA.ColorPlayers3;
    delete parsedData.TeamA.ErrorsInAttacks;
    delete parsedData.TeamA.Goal7Zones;
    delete parsedData.TeamA.GoalZones;
    delete parsedData.TeamA.Goalkeepers;
    delete parsedData.TeamA.GoalpostZones;
    delete parsedData.TeamA.MissedGoalZones;
    delete parsedData.TeamA.OffTargetZones;
    delete parsedData.TeamA.Save7Zones;
    delete parsedData.TeamA.SaveZones;
    delete parsedData.TeamA.SavedGoalZones;
    delete parsedData.TeamA.ShotZones;

    let teamAAllPlayers: Array<any> = [];

    parsedData.TeamA.AllPlayers.forEach((val => {
        teamAAllPlayers.push({
            LastName: val.LastName,
            FirstName: val.FirstName,
            PlayerNumber: val.PlayerNumber
        })
    }))

    parsedData.TeamA.AllPlayers = teamAAllPlayers


    delete parsedData.TeamB.BlockZones;
    delete parsedData.TeamB.Coaches;
    delete parsedData.TeamB.ColorCoaches1;
    delete parsedData.TeamB.ColorCoaches2;
    delete parsedData.TeamB.ColorCoaches3;
    delete parsedData.TeamB.ColorGoalkeepers1;
    delete parsedData.TeamB.ColorGoalkeepers2;
    delete parsedData.TeamB.ColorGoalkeepers3;
    delete parsedData.TeamB.ColorPlayers1;
    delete parsedData.TeamB.ColorPlayers2;
    delete parsedData.TeamB.ColorPlayers3;
    delete parsedData.TeamB.ErrorsInAttacks;
    delete parsedData.TeamB.Goal7Zones;
    delete parsedData.TeamB.GoalZones;
    delete parsedData.TeamB.Goalkeepers;
    delete parsedData.TeamB.GoalpostZones;
    delete parsedData.TeamB.MissedGoalZones;
    delete parsedData.TeamB.OffTargetZones;
    delete parsedData.TeamB.Save7Zones;
    delete parsedData.TeamB.SaveZones;
    delete parsedData.TeamB.SavedGoalZones;
    delete parsedData.TeamB.ShotZones;

    let teamBAllPlayers: Array<any> = [];

    parsedData.TeamB.AllPlayers.forEach((val => {
        teamBAllPlayers.push({
            LastName: val.LastName,
            FirstName: val.FirstName,
            PlayerNumber: val.PlayerNumber
        })
    }))

    parsedData.TeamB.AllPlayers = teamBAllPlayers

    parsedData = `[${JSON.stringify(parsedData)}]`

    return parsedData
}

export function getGame(gameId) {
    return new Promise<string>((resolve, reject) => {
        getDataFromIas(gameId).then(
            data => {
                resolve(parseData(data))
            },
            err => {
                reject(err)
            }
        )
    })
}
