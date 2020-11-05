import {fetchData} from "./modules/TheDataMiner.js"
(() => {
    
         function handleDataSet(data) {
            let 
                userSection = document.querySelector('.user-section'),
                userTemplate = document.querySelector('#user-template').content;
                debugger;
    
              for(let user in data){//in/of
                let currentUser=userTemplate.cloneNode(true),
                currentUserText=currentUser.querySelector('.user').children;
                    
                currentUserText[1].src = `images/${data[user].avatar}`;
                currentUserText[2].textContent = data[user].name;
                currentUserText[3].textContent = data[user].role;
                currentUserText[4].textContent = data[user].nickname;
               
                    userSection.appendChild(currentUser);
              }
              //console.log(data);
        }

             function retrieveProjectInfo(){
                   debugger;
                   console.log(this.id);
                   //get different results
                   fetchData(`./includes/index.php?id=${this.id}`).then(data=>console.log(data)).catch(error=>console.log(error));
             }
                
            function renderPortfolioThumbnails(thumbs){
                  let 
                  userSection = document.querySelector('.user-section'),
                  userTemplate = document.querySelector('#user-template').content;
            
                for(let user in thumbs){//in/of
                  let currentUser=userTemplate.cloneNode(true),
                  currentUserText=currentUser.querySelector('.user').children;    
                  
                  currentUserText[1].src = `images/${thumbs[user].avatar}`;
                  currentUserText[1].id = thumbs[user].id;

                  currentUser.addEventListener("click",retrieveProjectInfo);//lick image
                  userSection.appendChild(currentUser);
                }
              }
  
              //if you have different json,many fetchData()...
              fetchData("./includes/index.php").then(data=>renderPortfolioThumbnails(data)).catch(error=>console.log(error));

              

    })();
