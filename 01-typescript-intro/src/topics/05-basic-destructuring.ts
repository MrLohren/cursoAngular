interface AudioPlayer {
    audioVolume : number,
    songDuration : number,
    song : string,
    details : Details,
}

interface Details {
    author : string,
    year : number,
}

const audioPlayer : AudioPlayer = {
    audioVolume: 0,
    songDuration: 0,
    song: "Magic",
    details: {
        author: "yomismisto sin mi mamita",
        year: 2024
    }
}

const { song:anotherSong, songDuration:duration, details } = audioPlayer
const {author} = details

// console.log(`Song : ${anotherSong}`);
// console.log(`Duration : ${duration}`);
// console.log(`Author : ${author}`);



export {}