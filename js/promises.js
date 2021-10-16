const myPromise = fetch('https://api.github.com/users/josemmaldonado/events', {headers: {'Authorization': gitHubKey}})

// myPromise.then(response =>{
//  return response.json();
// }).then((eventsData) =>{
//
// }



myPromise.then(function (reggie) {
    return reggie.json();
}).then(commitsData => {
    const lastDateCommit = commitsData[0].created_at;
    console.log (commitsData[0].created_at);
    return lastDateCommit;





    // commitsData.forEach((commitData)=>{console.log(commitData.created_at)});
    // commitsData.results;
})

    // reggie.json().then(() => console.log(reggie));



// then((response) => {
//         return response.json();
//     }).then((starWarsFilmsData) => {
//     console.log(starWarsFilmsData.results.forEach((film)=>{console.log(film.title)}));
//     // starWarsFilmsData.results



//Create a function that accepts a GitHub username, and returns a promise that resolves
// returning just the date
// of the last commit that user made. Reference the github api documentation to achieve this.

//


//     .
// })

