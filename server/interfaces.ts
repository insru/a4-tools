interface Player {
    LastName: string,
    FirstName: string,
    PlayerNumber: string
}

interface Team {
    allCurrent: string,
    playerArr: Array<Player>
}

interface Game {
    ArenaName: string,
    CityName: string,
    CompName: string,
    CompStageName: string,
    GameNumber: string,
    LocalDate: string,
    LocalTime: string,
    Referee1Name: string,
    Referee2Name: string,
    RefereeNames: string,
    Venue: string
}

// http://localhost:9000/teama?gameId=3071
// http://localhost:9000/teamb?gameId=3071
// http://localhost:9000/game?gameId=3071


