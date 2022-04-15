const dataElement = [
    "char-nickname",
    "char-origin",
    "char-titles",
    "char-ages",
    "char-height",
    "char-width",
    "char-gender",
    "char-species",
    "char-likes",
    "char-dislikes",
    "char-birthday",
    "char-ocnum",
    "char-place",
    "char-affiliate",
    "char-tier",
    "char-ap",
    "char-sf",
    "char-ls",
    "char-ss",
    "char-durability",
    "char-se",
    "char-intelligence",
    "char-weakness"
]

function loadCharData(index) {
    const imgChar = document.getElementById('img-char');
    const imgChar1 = document.getElementById('img-char-1');

    const nameElement = document.querySelectorAll('.char-name');

    const abilityElement = document.getElementById('char-ability');
    const naElement = document.getElementById('char-na');

    const descElement = document.getElementById('char-desc');
    const appElement = document.getElementById('char-appe');
    const faElement = document.getElementById('char-fa');

    imgChar.innerHTML = imgChar1.innerHTML = '<img src="../.'+charData.gambar[index]+'" alt="'+characterData[index].name+'">\n';

    abilityElement.innerHTML = '';
    naElement.innerHTML = '';

    descElement.innerHTML = characterData[index].description;
    appElement.innerHTML = characterData[index].appearance;
    faElement.innerHTML = '';

    for (let i = 0; i < nameElement.length; i++)
    {
        nameElement[i].innerHTML = characterData[index].name;
    }

    for (let i = 0; i < characterData[index].abiility.length; i++) {
        abilityElement.innerHTML += '<li>'+characterData[index].abiility[i]+'</li>\n';
    }

    for (let i = 0; i < characterData[index].notable_atttech.length; i++) {
        naElement.innerHTML += '<li>'+characterData[index].notable_atttech[i]+'</li>\n';
    }

    for (let i = 0; i < characterData[index].first_appear.length; i++) {
        faElement.innerHTML += '<li>'+characterData[index].first_appear[i]+'</li>\n';
    }

    loadElementDat(index);
}

function loadElementDat(index) {
    document.getElementById(dataElement[0]).innerHTML = characterData[index].nickname;
    document.getElementById(dataElement[1]).innerHTML = characterData[index].origin;
    document.getElementById(dataElement[2]).innerHTML = characterData[index].titles;
    document.getElementById(dataElement[3]).innerHTML = characterData[index].ages;
    document.getElementById(dataElement[4]).innerHTML = characterData[index].height;
    document.getElementById(dataElement[5]).innerHTML = characterData[index].weight;
    document.getElementById(dataElement[6]).innerHTML = characterData[index].gender;
    document.getElementById(dataElement[7]).innerHTML = characterData[index].species;
    document.getElementById(dataElement[8]).innerHTML = characterData[index].likes;
    document.getElementById(dataElement[9]).innerHTML = characterData[index].dislikes;
    document.getElementById(dataElement[10]).innerHTML = characterData[index].birthday;
    document.getElementById(dataElement[11]).innerHTML = characterData[index].oc_num;
    document.getElementById(dataElement[12]).innerHTML = characterData[index].place;
    document.getElementById(dataElement[13]).innerHTML = characterData[index].Affiliate;
    document.getElementById(dataElement[14]).innerHTML = characterData[index].tier_level;
    document.getElementById(dataElement[15]).innerHTML = characterData[index].attack_potency;
    document.getElementById(dataElement[16]).innerHTML = characterData[index].speed_full;
    document.getElementById(dataElement[17]).innerHTML = characterData[index].lifting_strength;
    document.getElementById(dataElement[18]).innerHTML = characterData[index].striking_strength;
    document.getElementById(dataElement[19]).innerHTML = characterData[index].durability;
    document.getElementById(dataElement[20]).innerHTML = characterData[index].stamina_equipment;
    document.getElementById(dataElement[21]).innerHTML = characterData[index].intelligence;
    document.getElementById(dataElement[22]).innerHTML = characterData[index].weakness;
}