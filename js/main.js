import {fetchData} from "./modules/DataMiner.js"
(() => {
    
         function handleDataSet(data) {
            let 
                userSection = document.querySelector('.user-section'),
                userTemplate = document.querySelector('#user-template').content;
                debugger;
    
              for(let user in data){//in/of
                let currentUser=userTemplate.cloneNode(true),
                currentUserText=currentUser.querySelector('.user').children;
                    
                currentUserText[1].src = `images/${data[user].avatar}.jpg`;
                currentUserText[2].textContent = data[user].name;
                currentUserText[3].textContent = data[user].role;
                currentUserText[4].textContent = data[user].nickname;
               
                    userSection.appendChild(currentUser);
              }
              console.log(data);
        }
   
              //if you have different json
              fetchData('./DataSet.json').then(data=>handleDataSet(data)).catch(error=>console.log(error));
    })();
