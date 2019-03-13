const repository = require('./repository');

const prompt = require('prompt-sync')();

//github access token, its can be taken from the settings on github.
const token = prompt('Tell me ur token access: ');
const repoName = prompt('Tell me ur repository name: ');
const descript = prompt('Tell me ur repository description: ');
const private = JSON.parse(prompt('Is it private? true or false '));


repository.create(token,repoName,descript,private).then((response)=>{
    console.log('\x1b[32m', response); // green color log
}).catch((error)=>{
    console.log('\x1b[31m', error); // red color log
});