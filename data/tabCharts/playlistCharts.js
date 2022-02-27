var listSongCharts = [{
        name: "Hơn Cả Yêu",
        rank: "1",
        singers: ["Đức Phúc"],
        time: "03:11",
        path: "./assets/music/listSong1/song1.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song1.jpg"
    },
    {
        name: "có hẹn với thanh xuân",
        rank: "2",
        singers: ["MONSTAR"],
        time: "03:38",
        path: "./assets/music/listSong1/song27.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song27.jpg"
    },
    {
        name: "Chạy Về Khóc Với Anh",
        rank: "3",
        singers: ["ERIK"],
        time: "04:59",
        path: "./assets/music/listSong1/song2.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song2.jpg"
    },
    {
        name: "Cô người tinh",
        rank: "4",
        singers: ["Nguyễn Hoàng"],
        time: "03:08",
        path: "./assets/music/listSong1/song3.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song3.jpg"
    },
    {
        name: "Chạy Về Nơi Phía Anh",
        rank: "5",
        singers: ["Khắc Việt"],
        time: "05:26",
        path: "./assets/music/listSong1/song4.flac",
        image: "./assets/img/tabCharts/chartSongRanks/song4.jpg"
    },
    {
        name: "Lạ Lùng",
        rank: "6",
        singers: ["Vũ"],
        time: "03:53",
        path: "./assets/music/listSong1/song5.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song5.jpg"
    },
    {
        name: "Nhắn Tới Khoảng Trời Em",
        rank: "7",
        singers: ["Quân A.P"],
        time: "03:55",
        path: "./assets/music/listSong1/song29.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song29.jpg"
    },
    {
        name: "Phố Không Em",
        rank: "8",
        singers: ["Thái Đinh"],
        time: "05:36",
        path: "./assets/music/listSong1/song6.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song6.jpg"
    },


    {
        name: "Chờ Anh Nhé",
        rank: "9",
        singers: ["Hoàng Dũng"],
        time: "05:02",
        path: "./assets/music/listSong1/song9.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song9.jpg"
    },

    {
        name: "Vậy Là Ta Mất Nhau",
        rank: "10",
        singers: ["Khải Đăng"],
        time: "04:15",
        path: "./assets/music/listSong1/song16.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song16.jpg"
    },
    {
        name: "Cô Đơn Dành Cho Ai",
        rank: "11",
        singers: ["Lee Ken", "Nal"],
        time: "03:51",
        path: "./assets/music/listSong1/song19.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song19.jpg"
    },
    {
        name: "Nhắn Rằng Anh Nhớ Em",
        rank: "12",
        singers: ["Đình Dũng", "ACV"],
        time: "05:12",
        path: "./assets/music/listSong1/song13.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song13.jpg"
    },
    {
        name: "3107",
        rank: "13",
        singers: ["Duongg"],
        time: "03:38",
        path: "./assets/music/listSong1/song8.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song8.jpg"
    },
    {
        name: "Thương Nhau Tới Bến",
        rank: "14",
        singers: ["Nal"],
        time: "04:55",
        path: "./assets/music/listSong1/song11.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song11.jpg"
    },
    {
        name: "Dịu Dàng Em Đến",
        rank: "15",
        singers: ["ERIK", "NinjaZ"],
        time: "03:05",
        path: "./assets/music/listSong1/song14.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song14.jpg"
    },
    {
        name: "Nàng Thơ",
        rank: "16",
        singers: ["Hoàng Dũng"],
        time: "06:51",
        path: "./assets/music/listSong1/song10.flac",
        image: "./assets/img/tabCharts/chartSongRanks/song10.jpg"
    },
    {
        name: "Sai Cách Yêu",
        rank: "17",
        singers: ["Lê Bảo Bình"],
        time: "05:42",
        path: "./assets/music/listSong1/song26.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song26.jpg"
    },
    {
        name: "Suýt Nữa Thì",
        rank: "18",
        singers: ["Andiez"],
        time: "05:17",
        path: "./assets/music/listSong1/song7.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song7.jpg"
    },
    {
        name: "vâng anh đi đi (liu riu version)",
        rank: "19",
        singers: ["Bích Phương"],
        time: "03:39",
        path: "./assets/music/listSong1/song17.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song17.jpg"
    },
    {
        name: "Ngày EM Rời Xa",
        rank: "20",
        singers: ["ERIK", "NinjaZ"],
        time: "05:24",
        path: "./assets/music/listSong1/song14.mp3",
        image: "./assets/img/tabCharts/chartSongRanks/song14.jpg"
    },

];

const SONG_CHARTS_STORAGE_KEY = 'VIK_SONG_CHARTS';

localStorage.setItem(SONG_CHARTS_STORAGE_KEY, JSON.stringify(listSongCharts));