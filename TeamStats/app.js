const team = {
  _players: [
    {
      firstName: "Maxim",
      lastName: "Litvinov",
      age: 33,
    },
    {
      firstName: "Pete",
      lastName: "Wheeler",
      age: 44,
    },
    {
      firstName: "Daniel",
      lastName: "Kreig",
      age: 55,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Yankis",
      teamPoints: 32,
      opponentPoints: 37,
    },
    {
      opponent: "Tormoz",
      teamPoints: 12,
      opponentPoints: 17,
    },
  ],
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
 
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer( 'Bugs', 'Bunny', 76);

console.log(team.players)