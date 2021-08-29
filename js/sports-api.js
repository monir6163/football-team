document.getElementById('not-found').style.display = 'none';
const loadSports = async () => {
    const searchField = document.getElementById('search-team');
    const searchResult = searchField.value;
    searchField.value = "";
    document.getElementById('not-found').style.display = 'none';
    if(searchResult == ""){
        const message = document.getElementById('erorr-message');
        message.innerHTML = `<div class=" w-100 mx-auto alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Hello 3rd Person!</strong> Please Enter Your FuckUp Name.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    }
    else{
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchResult}`;
        // fetch(url)
        // .then(res => res.json())
        // .then(data => displayTeam(data))
        // .catch(error => displayerror(error));
        try{
            const res = await fetch(url);
            const data = await res.json();
            displayTeam(data);
        }
        catch{
            document.getElementById('not-found').style.display = 'block';
            const message = document.getElementById('not-found');
            message.innerHTML = `<div class=" w-100 mx-auto alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Hello 3rd Person!</strong> Search Result Team Not Found.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        }
    }
    
}
// const displayerror = error => {
//     document.getElementById('not-found').style.display = 'block';
//     const message = document.getElementById('not-found');
//        message.innerHTML = `<div class=" w-100 mx-auto alert alert-danger alert-dismissible fade show" role="alert">
//   <strong>Hello 3rd Person!</strong> Search Result Product Not Found.
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>`;
// }
const displayTeam = teams => {
    const showTeam = teams.teams;
    const teamElement = document.getElementById('sports-team');
    teamElement.textContent = "";
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