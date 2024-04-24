// Question # 40 : Album: Create objects for music albums.

function make_album(artist: string, title: string, tracks?: number) {

    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    }
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Joy', 'Contentment');
console.log(album1);

const album2 = make_album('Harry', 'Eternity');
console.log(album2);

const album3 = make_album('Alex', 'Dark Moon', 12);
console.log(album3);


// Question # 41 : Magicians: Display magician names from an array.

let magicianNames: string[] = ["Shin Lim", "Harry Houdini", "Criss Angel", "David Copperfield"];

console.log("Magician names:");

function show_magicians(magicians: string[]) {

    magicians.forEach(magician => {
        console.log(magician);

    });
}
show_magicians(magicianNames);


// Question # 42 : Great Magicians: Add "the Great" to magician names.

function make_great(magicians: string[]) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = 'the great ' + magicianNames[i]
    }
}
function show_magicians(magicians: string[]) {

    magicians.forEach(magician => {
        console.log(magician);

    });
}
make_great(magicianNames);
show_magicians(magicianNames);