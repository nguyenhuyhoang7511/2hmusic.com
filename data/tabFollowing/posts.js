var listPost = [
    [{
            name: "Seachains",
            time: "26 tháng 2 lúc 11:07",
            content: "Anh gặp em lần đầu tiên",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist1.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist1.jpg "
        },
        {
            name: "Sơn Tùng M-TP",
            time: "14 tháng 10 lúc 00:33",
            content: "Sky ơi !!. ❤️",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist7.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist7.jpg"
        },
        {
            name: "Bích Phương",
            time: "14 tháng 10 lúc 14:35",
            content: "Tối nay lại liu riu 1 tí nhé 😘",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist10.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist10.jpg"
        },
        {
            name: "Bảo Thy",
            time: "25 tháng 02 lúc 13:38",
            content: "Nhìn vậy mà đã là Mẹ 1 con và sắp 34 nồi bánh chưng đó có tức hông cơ chứ",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist4.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist4.jpg "
        },
        {
            name: "Hạnh Sino",
            time: "25 tháng 2 lúc 21:26",
            content: "Những điều xuất phát từ trái tim bạn sẽ làm rung động trái tim người khác",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist5.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist5.jpg "
        },
    ],
    [{
            name: "Tăng Phúc",
            time: "25 tháng 2 lúc 20:47",
            content: "Tình cờ gặp nhau ở ngôi nhà trong rừng",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist3.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist3.jpg "
        },

        {
            name: "TITI",
            time: "26 tháng 2 lúc 08:40",
            content: "Valentine không 1 ai - Valentine người yêu mình là ai ?",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist2.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist2.jpg "
        },
        {
            name: "Ninh Dương Lan Ngọc",
            time: "14 tháng 10 lúc 14:36",
            content: "Ở nhà có photo Rio chụp dì sửa mệt nghỉ luôn 🤣🤣🤣 chỉnh qài ko đẹp được luôn. Xin nhờ 500 anh em chỉnh dùm Ngọc tấm hình này sao mà coa thể đẹp đươc nhỉ",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist9.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist9.jpg"
        },

    ]
];

const POST_STORAGE_KEY = 'VIK_POST';

localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(listPost));