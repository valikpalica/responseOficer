let button = document.getElementById("button");
button.addEventListener('click',getall);


function obj(){
    return{}
}

function getall(){
   let first =  getFirstPunkt();
   let last = lastPosition();
   console.log(first,last);
}

function getFirstPunkt(){
    let responseOficer = document.getElementsByName("response");
    console.log(responseOficer.length);
    let oficer = obj();
    for(let i = 0;i<responseOficer.length;i++){
        // console.log(responseOficer[i].value , responseOficer[i].id);
        oficer[responseOficer[i].id] = responseOficer[i].value;
    }
    console.log(oficer);
    return oficer;
}
function lastPosition(){
    let divResponse = document.getElementsByName("divResponse");
    let response = obj();
    for(let i=0;i<divResponse.length;i++){
        response[divResponse[i].id] = divResponse[i].value;
    }
    console.log(response);
    return response;
}