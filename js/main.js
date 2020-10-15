// import your packages here
//import Team from "./modules/DataModule.js";
//import NavSystem from "./modules/TheNavSystem.js";

(() => {
    //create an instance/copy of the AJAX object
    //order coffee
     let myReq=new XMLHttpRequest;

     // // add an event handler so that we can track the stages of the request and respond accordingly
     //college,package,do they have ice cream,match broken?
     myReq.addEventListener('readystatechange', handleRequest);

     //get the request ready to go / configure it with method and resource request
     //where is data now,between server and brower
     //give me combone1
     myReq.open('GET','../DataSet.json');
     
     //sent the request off to the server
     //tell server i want combone1
     myReq.send();



     //This is a passive listener function - it gets invoked for every stage of the AJAX request.
     // When the request is done and the data payload is returned from the server it passes that data to the handleDataSet function

     //listen status to kitchen
     function handleRequest() {
         //like request coffee
         debugger;
        if (myReq.readyState === XMLHttpRequest.DONE) {
            // check status here and proceed
            debugger;
            if (myReq.status === 200) {
                //200 mean yes, everything ok
                // 200 means done and dusted, ready to go with the dataset!
                //debugger;
                handleDataSet(myReq.responseText);

                 //if not, request not work, drop the coffee
            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            debugger;
            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }

  
    //select our user elements and load the content

    function handleDataSet(data) {
        let myData = JSON.parse(data),
            userSection = document.querySelector('.user-section'),
             //get template content, content specific for template,gain access to <template>
              //contect mean everything in the <template>
            userTemplate = document.querySelector('#user-template').content;
            debugger;
        //copy,make clone of template container and stores into current user variable
          for(let user in myData){
              //debugger;
              //make a copy of our template here and them
              //populates the children(text elements) with
              //the static data from theTeam object
              //true mean go into that node(<div class="user">) and grab everything 
            let currentUser=userTemplate.cloneNode(true),
            //currentUser is fresh copy of div
            //get all the childern from "user"
            currentUserText=currentUser.querySelector('.user').children;
            //them h1 h2 p are inside of currentUserText

            //get a copy of template of each elements inside of data
                currentUserText[1].textContent=myData[user].name;
                currentUserText[2].textContent=myData[user].role;
                currentUserText[3].textContent=myData[user].nickname;
           //get the template, get the children,populate the children content, then put it back on the webpage,so
                userSection.appendChild(currentUser);
          }
          console.log(data);
    }
    //call function handleDataSet
    //handleDataSet(Team);
     
 
})();
