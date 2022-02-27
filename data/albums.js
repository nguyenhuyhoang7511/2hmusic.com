var listAlbum = [{
        name: "THROWBACK",
        image: "./assets/img/albums/album1.jpg"
    },
    {
        name: "XONE (Mini Album)",
        image: "./assets/img/albums/album2.jpg"
    },
    {
        name: "HWASA",
        image: "./assets/img/albums/album3.jpg"
    },
    {
        name: "INDIE HIT (Mini Album)",
        image: "./assets/img/albums/album4.jpg"
    },
    {
        name: "XONE'S PICKS (Mini Album)",
        image: "./assets/img/albums/album5.jpg"
    },
    {
        name: "The Off Season",
        image: "./assets/img/albums/album8.jpg"
    },
    {
        name: "The Album",
        image: "./assets/img/albums/album9.jpg"
    },
    {
        name: "Random Access Memories",
        image: "./assets/img/albums/album10.jpg"
    },

    {
        name: "Meet the Woo 2",
        image: "./assets/img/albums/album14.jpg"
    },
];

const ALBUM_STORAGE_KEY = 'VIK_ALBUM';

localStorage.setItem(ALBUM_STORAGE_KEY, JSON.stringify(listAlbum));