// including story data (./assets/data/story-data.js)
// including char data (./assets/data/char-data.js)

let showtable = false;

let preTipeDat = new Array(storyData.judul.length + charData.nama.length);
let pratoDat = [];

let preIndex = 0;
while (preIndex < preTipeDat.length) {
    if (preIndex < storyData.judul.length) {
        preTipeDat[preIndex] = storyData.type;
    }
    else if (preIndex < storyData.judul.length + charData.nama.length) {
        preTipeDat[preIndex] = charData.type;
    }
    preIndex++;
}

const tipeData = preTipeDat;
const namaData = storyData.judul.concat(charData.nama);
const gambarData = storyData.gambar.concat(charData.gambar);
const linkData = storyData.link.concat(charData.link);

for (let i = 0; i < namaData.length; i++) {
    pratoDat.push({
        nama : namaData[i],
        tipe : tipeData[i],
        link : linkData[i],
        gambar : gambarData[i]
    });
}

const protoTypeDat = pratoDat;