const alphaBtn = document.getElementById("alpha-btn");
const listChar = document.getElementById("list-cerita");

const searchInput = document.getElementById("search-form");
const searchButton = document.getElementById("search-btn");

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const nullImg = "./assets/images/main-page/stories/no-preview.png";

const namDat = charData;

let charImg;
let charList;

function objDat(data) {
    let datObj = []

    for (let i = 0; i < data.nama.length; i++) {
        datObj.push({
            nama : data.nama[i],
            gambar : data.gambar[i],
            link : data.link[i]
        });
    }

    return datObj;
}

let verdata = objDat(charData);

function alphaList() {
    let preAlpha = '<a href="#"><button>#</button></a>\n';
    
    for (let i = 0; i < alphabet.length; i++) {
        preAlpha += '<a href="#alpha-'+alphabet[i].toLowerCase()+'"><button>'+alphabet[i]+'</button></a>\n';
    }
    alphaBtn.innerHTML = preAlpha;
}


function listingDat(data) {
    charList = "";
    let searchImg;

    for (let i = 0; i < data.length; i++) {
        if (data[i].gambar == false) { searchImg = nullImg }
        else { searchImg = data[i].gambar; }

        let row = 
        '<li>'+
        '<a href=".'+data[i].link+'">\n'+
        '<button><img src=".'+searchImg+'" alt="'+data[i].nama+'"/>\n'+
        '<div>'+data[i].nama+'</div>\n'+
        '</button>\n'+
        '</a>\n'+
        '</li>\n';

        charList += row;
        listChar.innerHTML = charList;
    }
}

function searchList() {
    let val = searchInput.value;
    let data = findData(val, verdata);

    if (data.length > 0) {
        listingDat(data, verdata);
        $("#no-result").children("h2").html('');
    }
    else {
        listChar.innerHTML = "";
        $("#no-result").children("h2").html('no result for "'+val+'"');
    }
}

function findData(value, data) {
    var filter = [];

    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase();
        var nama = data[i].nama.toLowerCase();

        if (nama.includes(value)) {
            filter.push(data[i]);
        }
    }

    return filter;
}

window.onload = function() {
    listingDat(verdata);
    alphaList();
}

searchInput.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        searchButton.click();
    }
});
