var listEvent = [{
        name: "Sinh Nhật Sao x Hiền Hồ",
        time: "SẮP DIỄN RA",
        fans: [
            // "./assets/img/tabExplore/events/fans/singer1/fan1.jpg",
            // "./assets/img/tabExplore/events/fans/singer1/fan2.jpg",
            // "./assets/img/tabExplore/events/fans/singer1/fan3.jpg",
            // "./assets/img/tabExplore/events/fans/singer1/fan4.jpg",
            // "./assets/img/tabExplore/events/fans/singer1/fan5.jpg",
        ],
        fanAmount: "103K Lượt Tham Gia",
        image: "./assets/img/tabExplore/events/event1.jpg",
        action: "Tham Gia Ngay"
    },
    {
        name: "Sinh Nhật Sao x Tiên Cookie",
        time: "SẮP DIỄN RA",
        fans: [
            // "./assets/img/tabExplore/events/fans/singer2/fan1.jpg",
            // "./assets/img/tabExplore/events/fans/singer2/fan2.jpg",
            // "./assets/img/tabExplore/events/fans/singer2/fan3.jpg",
            // "./assets/img/tabExplore/events/fans/singer2/fan4.jpg",
            // "./assets/img/tabExplore/events/fans/singer2/fan5.jpg",
        ],
        fanAmount: "97K Lượt Tham Gia",
        image: "./assets/img/tabExplore/events/event2.jpg",
        action: "Tham Gia Ngay"
    },
    {
        name: "MV Vẫn Còn Zai Tốt - Minh Vương M4U",
        time: "SẮP DIỄN RA",
        fans: [
            // "./assets/img/tabExplore/events/fans/singer3/fan1.jpg",
            // "./assets/img/tabExplore/events/fans/singer3/fan2.jpg",
            // "./assets/img/tabExplore/events/fans/singer3/fan3.jpg",
            // "./assets/img/tabExplore/events/fans/singer3/fan4.jpg",
            // "./assets/img/tabExplore/events/fans/singer3/fan5.jpg",
            // "./assets/img/tabExplore/events/fans/singer3/fan6.jpg",
        ],
        fanAmount: "208K Lượt Tham Gia",
        image: "./assets/img/tabExplore/events/event3.jpg",
        action: "Tham Gia Ngay"
    },
];

const EVENT_STORAGE_KEY = 'VIK_EVENT';

localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(listEvent));