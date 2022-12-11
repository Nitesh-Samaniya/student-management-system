let a = 0;
document.querySelector('#web18').innerText=a;
let b = 0;
document.querySelector('#web19').innerText=b;
let c = 0;
document.querySelector('#web20').innerText=c;

let studentData = JSON.parse(localStorage.getItem("studentData")) || [];

// function showData(studentData){
    studentData.forEach(function(el,index){
        let tr = document.createElement("tr");
    
        let td1 = document.createElement("td");
        td1.innerText=el.name;
    
        let td2 = document.createElement("td");
        td2.innerText=el.course;
    
        let td3 = document.createElement("td");
        td3.innerText=el.unit;
    
        let td4 = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute("src",el.image);
        td4.append(image);
    
        let td5 = document.createElement("td");
        td5.innerText=el.batch;
        
        if(td5.innerHTML == "FT_WEB 18"){
            a++;
            document.querySelector('#web18').innerText=a;
        }
        if(td5.innerHTML == "FT_WEB 19"){
            b++;
            document.querySelector('#web19').innerText=b;
        }
        if(td5.innerHTML == "FT_WEB 20"){
            c++;
            document.querySelector('#web20').innerText=c;
        }
    
        let td6 = document.createElement("td");
        td6.innerText="Delete";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
           event.target.parentNode.remove();
    
           let trash = JSON.parse(localStorage.getItem("trash")) || [];
           studentData.splice(index,1)
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
    
           localStorage.setItem("studentData",JSON.stringify(studentData));

           
        })
    
        tr.append(td1,td2,td3,td4,td5,td6);
    
        document.querySelector("tbody").append(tr);
    
        
    });
    
// }

// showData(studentData);

// let filterDAta = document.getElementById("filterDAta");

// filterDAta.addEventListener("change",function(){
//     if(filterDAta.value == 'none'){
//         showData(studentData);
//     }
//     else{
//         var filterDAta = studentData.filter(function(el){
//             return el.batch == filterDAta.value;
//         })
//         showData(filterDAta);
//     }
// })
