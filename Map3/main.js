const data = [
    {
        city: 'Jeddah City',
        content: 'is a city in the Hejaz region of Saudi Arabia and the country is commercial center. With a population of about 4,697,000 people as of 2021. Jeddah is the largest city in Makkah Province,[3] the second-largest city in Saudi Arabia (after the capital Riyadh), and the eighth-largest in the Middle East. Jeddah Islamic Port, located on the Red Sea, is the thirty-sixth largest seaport in the world[4] and the second-largest and second-busiest seaport in the Middle East (after Dubais Port of Jebel Ali). Jeddah is the principal gateway to Mecca, the holiest city in Islam, located just 65 kilometres (40 mi) to the east, while Medina, the second-holiest city, is located 360 kilometres (220 mi) to the north.',
        location: [11, 50]
    },
    {
        city: 'Mekka',
        content: 'Mekka is a city in the Hejaz region of Saudi Arabia and the country is commercial center. With a population of about 4,697,000 people as of 2021. Jeddah is the largest city in Makkah Province,[3] the second-largest city in Saudi Arabia (after the capital Riyadh), and the eighth-largest in the Middle East. Jeddah Islamic Port, located on the Red Sea, is the thirty-sixth largest seaport in the world[4] and the second-largest and second-busiest seaport in the Middle East (after Dubais Port of Jebel Ali). Jeddah is the principal gateway to Mecca, the holiest city in Islam, located just 65 kilometres (40 mi) to the east, while Medina, the second-holiest city, is located 360 kilometres (220 mi) to the north.',
        location: [30, 40]
    }
]

const container = document.querySelector('.container');
const imageContainer = document.querySelector('.image-container');
const allToolTips = document.querySelector('.all-tooltips');

data.forEach((singleCity, index) => {
    const pin = document.createElement('div')
    const content = document.createElement('div')

    pin.classList.add('pin')
    pin.style.top = `${singleCity.location[1]}%`
    pin.style.left = `${singleCity.location[0]}%`

    content.classList.add('content')
    content.classList.add('content-' + index)
    content.classList.remove('active')
    content.innerHTML = singleCity.content
    pin.addEventListener('click', (event) => {
        document.querySelectorAll('.content').forEach(e => e.classList.remove('active'))
        content.classList.add('active');
    })

    container.appendChild(pin)
    container.appendChild(content)
})
