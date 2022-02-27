var listBrand = [{
        image: "./assets/img/tabExplore/brands/brand1.jpg"
    },
    {
        image: "./assets/img/tabExplore/brands/brand2.jpg"
    },
    {
        image: "./assets/img/tabExplore/brands/brand3.jpg"
    },
    {
        image: "./assets/img/tabExplore/brands/brand4.jpg"
    },
    {
        image: "./assets/img/tabExplore/brands/brand5.jpg"
    },
    {
        image: "./assets/img/tabExplore/brands/brand6.jpg"
    },
    {
        image: "./assets/img/tabExplore/brands/brand7.jpg"
    },
    {
        image: "./assets/img/tabExplore/brands/brand8.jpg"
    },
];

const BRAND_STORAGE_KEY = 'VIK_BRAND';

localStorage.setItem(BRAND_STORAGE_KEY, JSON.stringify(listBrand));