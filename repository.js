const axios = require('axios');
module.exports={
    create(token="ADASD234",name="Hello-World",description="A random desc",private=false){
        return new Promise((resolve,reject)=>{
            const config = {
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json',
                },
            };
            const data ={
                "name": name,
                "description": description,
                "homepage": "https://github.com",
                "private": private,
                "has_issues": true,
                "has_projects": true,
                "has_wiki": true
              }
            axios.post("https://api.github.com/user/repos",data,config).then((response)=>{
              if(response.status == '201'){
                  resolve('Repository created with success');
              }else{
                  reject(response.statusText);
              }
            });
        })
    }
}