const listThemes = [{
        type: 'Chủ đề',
        themes: [{
                name: 'Giao diện 2HMusic',
                image: './assets/img/modalThemes/modalTheme1/theme1.jpg'

            },
            {
                name: 'Tháp Eiffel',
                image: './assets/img/modalThemes/modalTheme1/theme2.jpg'
            },
        ]
    },
    {
        type: 'Nghệ Sĩ',
        themes: [{
                name: 'Rosé',
                image: './assets/img/modalThemes/modalTheme2/theme1.jpg'
            },
            {
                name: 'IU',
                image: './assets/img/modalThemes/modalTheme2/theme2.jpg'
            },
            {
                name: 'Ji Chang Wook',
                image: './assets/img/modalThemes/modalTheme2/theme3.jpg'
            },
            {
                name: 'Lisa',
                image: './assets/img/modalThemes/modalTheme2/theme4.jpg'
            },
            {
                name: 'Jennie Kim',
                image: './assets/img/modalThemes/modalTheme2/theme5.jpg'
            },
            {
                name: 'Jisoo',
                image: './assets/img/modalThemes/modalTheme2/theme6.jpg'
            },
        ]
    },
    {
        type: 'Giao Diện Màu Tối',
        themes: [{
                name: '',
                image: './assets/img/modalThemes/modalTheme3/theme1.jpg'
            },
            {
                name: '',
                image: './assets/img/modalThemes/modalTheme3/theme2.jpg'
            },
            {
                name: ' ',
                image: './assets/img/modalThemes/modalTheme3/theme3.jpg'
            },
            {
                name: ' ',
                image: './assets/img/modalThemes/modalTheme3/theme4.jpg'
            },
            {
                name: ' ',
                image: './assets/img/modalThemes/modalTheme3/theme5.jpg'
            },
            {
                name: '',
                image: './assets/img/modalThemes/modalTheme3/theme6.jpg'
            },

        ]
    },
    {
        type: 'Giao Diện Màu Sáng',
        themes: [{
                name: '',
                image: './assets/img/modalThemes/modalTheme4/theme1.jpg'
            },
            {
                name: '',
                image: './assets/img/modalThemes/modalTheme4/theme2.jpg'
            },
            {
                name: '',
                image: './assets/img/modalThemes/modalTheme4/theme3.jpg'
            },
            {
                name: '',
                image: './assets/img/modalThemes/modalTheme4/theme4.jpg'
            },
            {
                name: '',
                image: './assets/img/modalThemes/modalTheme4/theme1.jpg'
            },
            {
                name: '',
                image: './assets/img/modalThemes/modalTheme4/theme2.jpg'
            },
        ]
    },
]


const THEME_LIST_STORAGE_KEY = 'VIK_THEME_LIST';

localStorage.setItem(THEME_LIST_STORAGE_KEY, JSON.stringify(listThemes))