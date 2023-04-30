async function getData(url) {
    // this function will fetch data from the database
    const fetchData = await fetch(`/${url}`, {});
    const data = await fetchData.json();
    return data;
}

//getting all hosts
getData(`api/host/`)
  .then((data) => console.log(`🗃️ Hosts Data:`, data))
  .catch((err) => console.log(`Something is wrong: `, err));
//getting all hunts
getData(`api/hunts/`)
  .then((data) => console.log(`🗃️ Hunts Data:`, data))
  .catch((err) => console.log(`Something is wrong: `, err));
  //getting all players
getData(`api/player/`)
.then((data) => console.log(`🗃️ Players Data:`, data))
.catch((err) => console.log(`Something is wrong: `, err));
