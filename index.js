const xhr = new XMLHttpRequest();

xhr.onload = function () {

    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const players = data.players;
        const container = document.getElementById("cards");

        players.forEach(player => {
            const card = document.createElement("div");
            card.className = "card"

            let statsHTML = "";
            let teamsHTML = "";
            let awardsHTML = "";

            // the for loop below is looping through an object 
            // the syntax is different when you look through arrays
            for (let stat in player.careerStats) {
                statsHTML += "<li>" + stat + ": " + player.careerStats[stat] + "</li>";
            }

            // teams and awards are both arrays, so these for loops should look the same
            for (let i = 0; i < player.teams.length; i++) {
                teamsHTML += "<li>" + player.teams[i] + "</li>";
            }

            for (let i = 0; i < player.awards.length; i++) {
                awardsHTML += "<li>" + player.awards[i] + "</li>";
            }

            card.innerHTML = `
                <h2>
                "fullName": "Tom Seaver",
                </h2>
                <p><span class="label">Position:</span>
                  "position": "pitcher"
                </p>
                <p><span class="label">Primary Team:</span> 
                "primaryTeam": "New York Mets",
                </p>
                <p><span class="label">Jersey Number:</span> #
                 "jerseyNumber": 41,
                </p>
                <p><span class="label">Born:</span>
                "birthDate": "1944-11-17",
                </p>
                <p><span class="label">Throws:</span>
                  "throws": "right-handed",
                </p>
                <p><span class="label">Hall of Fame:</span>
                "hallOfFameYear": 1992,
                </p>

                <p class="label">Career Stats:</p>
                <ul>
                        "wins": 311,
                        "losses": 205,
                        "era": 2.86,
                        "strikeouts": 3640
                </ul>

                <p class="label">Teams:</p>
                <ul>
                "Milwaukee Braves",
        "Atlanta Braves",
        "Milwaukee Brewers"
                </ul>

                <p class="label">Awards:</p>
                <ul>
                "MVP Award (1957)",
        "World Series champion (1957)",
        "3× Gold Glove Award",
        "25× All-Star"
                </ul>;`

            container.appendChild(Card); //variables go into those spots
        });
    };
};

xhr.open("GET", "player.json"); //make sure your json file is named player.json in VSCode
xhr.send();