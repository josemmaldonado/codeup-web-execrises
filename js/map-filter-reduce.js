//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(function (user ) {
    return user.languages.length >= 3;
});
console.log(threeLanguages)

let userEmail = users.map(function (email){
return email.email
}); console.log(userEmail)

// Use .reduce to get the total years of experience from the list of users.
//     Once you get the total of years you can use the result to calculate the average.
//     Use .reduce to get the longest email from the list of users.
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.



let yrsOfExper = users.reduce(function (total, user){
    return total + user.yearsOfExperience;
},0); console.log(yrsOfExper)

let longestEmail = users.reduce(function(total,user){
    // return email.email.length
    return email

},0);console.log(longestEmail);



let nameList = users.reduce(function(total,firstname){
    return total + firstname.name.split(' ')
},0); console.log(` Instructors ${nameList}, `);