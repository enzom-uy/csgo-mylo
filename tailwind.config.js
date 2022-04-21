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
                'text-color': '#406E8E'
            },
            boxShadow: {
                custom: '0px 20px 17px rgba(0, 0, 0, 0.10)'
            },
            dropShadow: {
                heading: '0px 4px 17px rgba(0, 0, 0, 0.43)',
                cardInset: 'inset 255px 4px 4px rgba(0, 0, 0, 0.46)'
            }
        }
    },
    plugins: []
}
