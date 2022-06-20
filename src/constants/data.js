import images from './images'

const icons = [
    {
        imgUrl: images.icon1,
        attribute: 'Agility',
        rate: 'Built for speed with a 5.2 liter v10 engine'
    },
    {
        imgUrl: images.icon2,
        attribute: 'Performance',
        rate: 'Accelerating from zero to 60 mph in 3.2s'
    },
    {
        imgUrl: images.icon3,
        attribute: 'Cutting Edge',
        rate: 'Sharing half of its parts with the R8 LMS racecar'
    }
]

const techspecs =[
    {
        spec_attribute: 'Engine displacement',
        rate: '5204'
    },
    {
        spec_attribute: 'Maximum Power',
        rate: '601.4 bhp @ 8250 rpm'
    },
    {
        spec_attribute: 'Maximum torque',
        rate: '560 Nm @ 6500 rpm'
    },
    {
        spec_attribute: 'Turning radius',
        rate: '5.9m'
    },
    {
        spec_attribute: 'No. of cylinders',
        rate: '10'
    },
    {
        spec_attribute: 'Drive Type',
        rate: 'AWD'
    },
    {
        spec_attribute: 'Turbo Charger',
        rate: 'No'
    },
    {
        spec_attribute: 'Super Charger',
        rate: 'Yes'
    },
    {
        spec_attribute: 'Fuel Supply',
        rate: 'Direct Injection'
    }
]

export default {icons, techspecs};