
const ø = Object.create(null);
const audioCtx = new AudioContext();

let deferred;

const soundMap808 = asMap({
  'BD5025': {keys: ['a'], gain: 1},
  'SD1010': {keys: ['s'], gain: .3},
  'RS': {keys: ['d'], gain: .5},
  'CH': {keys: ['f', 't'], gain: .5},
  'OH50': {keys: ['g'], gain: .3},
  'CY2550': {keys: ['h'], gain: .3},
  'CY7525': {keys: ['j'], gain: .3},
  'CP': {keys: ['k'], gain: .3},
  'HC10': {keys: ['l'], gain: .3},
  'LC50': {keys: ['q'], gain: .6},
  'MA': {keys: ['w'], gain: .3},
  'SD1075': {keys: ['e'], gain: .2},
  'MT75': {keys: ['r'], gain: .7},
  'CB': {keys: ['y'], gain: .3},
  'CL': {keys: ['u'], gain: .3},
  'HT50': {keys: ['i'], gain: .3},
  'LT50': {keys: ['o'], gain: .7},
  'MC50': {keys: ['p'], gain: .4},
});

const soundMapRock = asMap({
  'kick': {keys: ['d'], gain: 1},
  'snare': {keys: ['f'], gain: .7},
  'hihat': {keys: ['j', 'k'], gain: .3},
});

const soundMapSongs = asMap({
  // copy a song file into public/sounds, and change the song name
  'SONG_NAME': {keys: [' '], gain: .7}
});


function bootstrap() {
  // loadSoundMap(soundMapRock, 'sounds/rock');
  loadSoundMap(soundMap808, 'sounds/808');
  // loadSoundMap(soundMapSongs);
}

function loadSoundMap(soundMap, path = 'sounds') {
  for (const entry of soundMap) {
    let [name] = entry;
    loadBuffer(`${path}/${name}.wav`,
      manipulateWav.bind(ø,
        decode.bind(ø,
          bindKeys.bind(ø, entry, [playAudio, logSound]))));
  }
}

function loadBuffer(url, done) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = () => done(xhr.response);
  xhr.send();
}

// for reference: http://soundfile.sapp.org/doc/WaveFormat/
function manipulateWav(next, buffer) {
  const LE = isLittleEndian();

  // the composition pattern is often used with buffers,
  // it allows several views of the same buffer to be instantiated
//   const view = new DataView(buffer);

//   const sampleRate = view.getInt32(24, LE);
//   view.setInt32(24, sampleRate >> 1, LE);

  // another way of doing the same thing
  // const arr = new Uint16Array(buffer);
  // arr[12] = arr[12] / 8;

  next(buffer);
}

function decode(next, buffer) {
  audioCtx.decodeAudioData(buffer, next);
}

function bindKeys(entry, listeners, soundBuffer) {
  const [, {keys}] = entry;
  window.addEventListener('keydown', ({keyCode}) => {
    const key = keys.find(hasKeyCode.bind(ø, keyCode));
    if (key) {
      listeners.forEach((l) => l(entry, soundBuffer, key));
    }
  });
}

function playAudio([, {gain}], soundBuffer) {
  const src = audioCtx.createBufferSource();
  src.buffer = soundBuffer;
  const gainNode = audioCtx.createGain();
  gainNode.gain.value = gain;
  src.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  src.start();
}

function logSound([name, {gain}], soundBuffer, key) {
  const speaker = '\u{1f509}', folder = '\u{1f4c1}', keyboard = '\u{2328}';
  console.clear();
  console.dir(`
 ${folder} '${name}'
 ${speaker} ${gain}
 ${keyboard} [${key.toUpperCase()}]`);
  debounce(console.clear, 1500);
}


/* general utils */

function asMap(obj) {
  return new Map(Object.entries(obj));
}

function hasKeyCode(keyCode, key) {
  return key.toUpperCase().codePointAt(0) === keyCode;
}

function debounce(fn, delay) {
  if (deferred) {
    clearTimeout(deferred);
  }
  deferred = setTimeout(fn, delay);
}

function isLittleEndian() {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true);
  return new Int16Array(buffer)[0] === 256;
}


/* go */

bootstrap();
