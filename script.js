// Funzione per restituire a console i titoli degli album
function leggiTitoliAlbum(json) {
    let songs = json.data;
    console.log(songs[0].artist.name + ":");
    for (let i = 0; i < songs.length; i++) {
        let song = songs[i];
        console.log(`${i+1} ${song.album.title}`);
    }
}


fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((Response) => Response.json())
    .then(leggiTitoliAlbum)
    .catch((err) => console.log("Request failed", err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((Response) => Response.json())
    .then(leggiTitoliAlbum)
    .catch((err) => console.log("Request failed", err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then((Response) => Response.json())
    .then(leggiTitoliAlbum)
    .catch((err) => console.log("Request failed", err));