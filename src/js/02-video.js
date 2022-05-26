const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

player.on('timeupdate', function(data) {
    // data is an object containing properties specific to that event
});

function onPlay({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));