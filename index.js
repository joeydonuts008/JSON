const xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status >= 200) {
                const data = JSON.parse(xhr.responseText);
                const players = data.players;
                const container = document.getElementById("cards");
                const card = document.createElement("div");
                 

        let statsHTML = ""
        let teamsHTML = ""
        let awardsHTML = ""

        for(teams<; players.teams.length ; team++;)
            

        }
    };

        xhr.open("GET", "player.JSON");
        xhr.send();

       