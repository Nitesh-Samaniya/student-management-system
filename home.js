const form = document.querySelector('form');

let studentData = JSON.parse(localStorage.getItem("studentData")) || [];

form.addEventListener("submit",function(){
    event.preventDefault();

    let obj = {
        name : document.getElementById("name").value,

        course : document.getElementById("course").value,

        unit : document.getElementById("unit").value,

        image : document.getElementById("image").value,

        batch : document.querySelector("select").value,

    }

    studentData.push(obj);

    localStorage.setItem("studentData",JSON.stringify(studentData));
    
    form.reset();

    let calculate = {};
    for(let i=0 ; i<studentData.length ; i++){
        if(calculate[studentData[i].batch] == undefined){
            calculate[studentData[i].batch] = 1;
        }
        else{
            calculate[studentData[i].batch]++;
        }
    }
    for(let k in calculate){
        if(k == "FT_WEB 18"){
            document.querySelector('#web18').innerText = calculate[k];
        }
        else if(k == "FT_WEB 19"){
            document.querySelector('#web19').innerText = calculate[k];
        }
        else if(k == "FT_WEB 20"){
            document.querySelector('#web20').innerText = calculate[k];
        }
    }
})

let a = 0;
document.querySelector('#web18').innerText=a;
let b = 0;
document.querySelector('#web19').innerText=b;
let c = 0;
document.querySelector('#web20').innerText=c;

let calculate = {};
for(let i=0 ; i<studentData.length ; i++){
    if(calculate[studentData[i].batch] == undefined){
        calculate[studentData[i].batch] = 1;
    }
    else{
        calculate[studentData[i].batch]++;
    }
}
for(let k in calculate){
    if(k == "FT_WEB 18"){
        document.querySelector('#web18').innerText = calculate[k];
    }
    else if(k == "FT_WEB 19"){
        document.querySelector('#web19').innerText = calculate[k];
    }
    else if(k == "FT_WEB 20"){
        document.querySelector('#web20').innerText = calculate[k];
    }
}