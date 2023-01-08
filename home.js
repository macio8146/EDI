const testBody = document.querySelector("#tabela"); // returns the first Element within the document that matches the specified selector

function loadData(){
    const request = new XMLHttpRequest();  // creating request
    request.open("GET", "https://my.api.mockaroo.com/Api3.json?key=b3b2fd80", true); // request from api
    request.onload = () =>{ // run once page completly loaded all contents
        try{
            const json = JSON.parse(request.responseText); // text from server converted to js object 
            f(json)
        } catch(e){
            console.warn("error");
        }
    };
    request.send(); // Sends the request to the server (used for GET)
}

function f(json) {
    
    json.forEach((row) => { // for each row from js object 
        console.log(row)
        const tr = document.createElement("tr");

        for (const [key,value] of Object.entries(row)){ //returns an array of a given object's own enumerable string-keyed property key-value pairs.
            console.log(key, value);
            const td = document.createElement('td');
            td.textContent = value; // inserting value to <td>
            tr.appendChild(td); // insertning <td> to <tr>
        }

        testBody.appendChild(tr); // adding <tr> to testBody which is table from home.html
    });
}

loadData(); // running loadData