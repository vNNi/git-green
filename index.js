const repository = require('./repository');

const prompt = require('prompt-sync')();

const token = prompt('Tell me ur token access: ');
const repoName = prompt('Tell me ur repository name: ');
const descript = prompt('Tell me ur repository description: ');
const private = JSON.parse(prompt('Is it private? true or false '));


repository.create(token,repoName,descript,private).then(()=>{
    
});