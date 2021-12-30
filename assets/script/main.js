// including story data (./assets/data/story-data.js)
// including char data (./assets/data/char-data.js)

const listCerita = document.getElementById("list-cerita");
const listKar = document.getElementById("list-kar");

const searchInput = document.getElementById("search-input");
const searchOutput = document.getElementById("output-row");
const searchButton = document.getElementById("search-btn");

const closeTableBtn = document.getElementById("close-table-btn");

const nullImg = "./assets/images/main-page/stories/no-preview.png";
const closeTab = '<div class="close-tab"><button id="close-table-btn" title="close tab"><img src="./assets/images/main-page/close-btn.png" alt="close-btn"></button></div>\n';

let storyImg;
let charImg;

let storyList = "";
let charList = "";
let searchList = "";


function listingSearchDat(nameOfDat) {
    searchList = closeTab;
    let searchImg;

    for (let i = 0; i < nameOfDat.length; i++) {
        if (nameOfDat[i].gambar == false) {
            searchImg = nullImg;
        } else {
            searchImg = nameOfDat[i].gambar;
        }

        let krow = 
        '<div class="output-table">\n'+
        '    <a href="'+nameOfDat[i].link+'"><button>\n'+
        '        <img src="'+searchImg+'" alt="'+nameOfDat[i].nama+'">\n'+
        '        <div class="type-text-search">\n'+
        '            <div id="title-sc">'+nameOfDat[i].nama+'</div>\n'+
        '            <div id="type-sc">'+nameOfDat[i].tipe+'</div>\n'+
        '        </div>\n'+
        '    </button></a>\n'+
        '</div>';

        searchList += krow;
        searchOutput.innerHTML = searchList;
    }
    $("#close-table-btn").on("click", function() {
        $("#output-row").css("display", "none");
        $("#search-input").val("");
    });
}

searchInput.addEventListener("keyup", function() {
    searchOutput.style.display = "block";
    showtable = false;
})

function searchData() {
    var value = $("#search-input").val();
    var data = searchTableDat(value, protoTypeDat);
    console.log(data);
    
    listingSearchDat(data);
}

function searchTableDat(value, data) {
    var filterDat = [];

    for (var i = 0; i < data.length; i++) {
        value = value.toLowerCase();
        var nameDatt = data[i].nama.toLowerCase();
        
        if (nameDatt.includes(value)) {
            filterDat.push(data[i]);
        }
    }

    return filterDat;
}


searchButton.addEventListener("click", function() {
    searchOutput.style.display = "block";
    if ($("#search-input").val().length > 0) { searchData(); }

    closeTableBtn.addEventListener("click", function () {
        searchOutput.style.display = "none";
        $("#search-input").val("");
    });

});

closeTableBtn.addEventListener("click", function () {
    searchOutput.style.display = "none";
    $("#search-input").val("");
});

function listingWork(artwork) {
    switch (artwork) {
        case "story":
            for (let i = 0; i < storyData.judul.length; i++) {
                if (storyData.gambar[i] == false) {
                    storyImg = nullImg;
                } else {
                    storyImg = storyData.gambar[i];
                }

                let row = 
                '<li><a href="'+storyData.link[i]+'">\n'+
                '    <button><img src="'+storyImg+'" alt="'+storyData.judul[i]+'" id="story-img"><span>'+storyData.judul[i]+'</span></button>\n'+
                '</a></li>\n';
                storyList += row;
            }
            break;
        case "char":
            for (let i = 0; i < charData.nama.length; i++) {
                if (charData.gambar[i] == false) {
                    charImg = nullImg;
                } else {
                    charImg = charData.gambar[i];
                }
        
                let row =  
                '<li><a href="'+charData.link[i]+'">\n'+
                '    <button><img src="'+charImg+'" alt="'+charData.nama[i]+'" id="story-img"><span>'+charData.nama[i]+'</span></button>\n'+
                '</a></li>\n';
                charList += row
                ;
            }
            break;
        default:
            console.log("sepertinya salah param");
            break;
    }
}

window.onload = function() {
    listingWork("story");
    listingWork("char");
    
    listCerita.innerHTML = storyList;
    listKar.innerHTML = charList;
}