module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'navbar-logo': "url('/src/assets/mylo_navbarpng.png')",
                'card-dust2': "url('/src/assets/card_dust2.png')",
                'card-inferno': "url('/src/assets/card_inferno.png')",
                'card-mirage': "url('/src/assets/card_mirage.png')",
                'card-nuke': "url('/src/assets/card_nuke.png')",
                'card-overpass': "url('/src/assets/card_overpass.png')"
            },
            colors: {
                'background-start': '#161925',
                'background-end': '#191C2E',
                'mobile-text': '#406E8E'
            }
        }
    },
    plugins: []
}
