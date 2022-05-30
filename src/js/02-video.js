import throttle from "lodash.throttle"

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time') || 0;
    
// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

const onPlay = function(data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds)
    };
player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(currentTime);