 async function fetchData(datasource){
     let resource = await fetch(datasource).then(response=>{
         //await: wait bus in bus stop, waiting fetch call success or fail
         //check the error, if exist, return
            if (response.status !==200){//!== is not equal
                throw new error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);
            }
            //return error or data(success)
            return response;
     })
         //if we get success, then we can return back our resourec after we parse it into plain JS
         let dataset = await resource.json();
         return dataset;
        }

  export { fetchData };