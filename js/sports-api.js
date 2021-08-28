const loadSports = () => {
    const searchField = document.getElementById('search-team');
    const searchResult = searchField.value;
    searchField.value = "";
    if(searchResult == ""){
        alert('Please Enter Your FootBall Team Name');
    }
    else{
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchResult}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayTeam(data))
    }
    
}
const displayTeam = teams => {
    const showTeam = teams.teams;
    const teamElement = document.getElementById('sports-team');
    for(const teams of showTeam){
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `<div class="card h-100" >
                    <img src="${teams.strTeamBadge}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${teams.strTeam}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${teams.strCountry}</li>
                        <li class="list-group-item">${teams.strStadiumLocation}</li>
                        <li class="list-group-item">${teams.strWebsite}</li>
                    </ul>
                </div>`;
                teamElement.appendChild(div);
    }


}