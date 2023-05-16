const fs = require("fs");
const process = require('process');
const axios = require("axios");

function ifOut(text, out){
    if(out){
        fs.writeFile(out, text, 'utf8', function(err){
            if (err){
                console.error(err);
                process.exit(1);
            } 
        });
    } 
    else{
        console.log(data);
        }  
    }


function cat(path){
    fs.readFile(path, "utf8", function(err, data){
        if (err){
            console.error(err);
            process.exit(1);
        }
        else{
            ifOut(data, out);
        }
    })
}

async function webCat(url){
    try{
        let resp = await axios.get(url);
        ifOut(resp.data, out);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

let path;
let out;

if(process.argv[2] === "--out"){
    out = process.argv[3]
    path = process.argv[4]
}
else{
    path = process.argv[2]
}

if (path.slice(0,4) === 'http'){
    webCat(path)
}
else{
    cat(path)
}



