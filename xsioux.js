var titles = document.getElementsByClassName('songs-list__col songs-list__col--song');
var artists = document.getElementsByClassName('songs-list__col songs-list__col--secondary');
var albums = document.getElementsByClassName('songs-list__col songs-list__col--tertiary');
var lengths = document.getElementsByClassName('songs-list__col songs-list__col--time');
var playlist_title = document.getElementsByClassName('headings__title')[0].innerText

var playlist = [];

for(i=1;i<titles.length;i++){
    playlist[i] = {};
    playlist[i].title = titles[i].innerText;
    playlist[i].artist = artists[i].innerText;
    playlist[i].album = albums[i].innerText;
    playlist[i].length = lengths[i].innerText;
}

playlist.shift();
var link = document.createElement('a');
link.href = 'data:text/json, ' + encodeURIComponent(JSON.stringify(playlist));

link.click();