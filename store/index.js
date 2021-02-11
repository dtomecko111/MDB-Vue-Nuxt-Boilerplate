import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state: {
            pageList: [
                {
                    name: 'AboutUs',
                    urlslug: 'about-us',
                    hero:
                    {
                        title: 'About Us',
                        imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/about-us-hero-bg.webp',
                        description: 'Clearview Energy is a supplier of 100% Green Energy. We provide you, the consumer, with energy products and services in ways that protect the environment. We believe that you are our greatest asset and we\'re driven to align your environmental values with their everyday needs. Ultimately, we exist to inform and empower your environmental choices through thoughtful offerings, communication, and ethical standards.'

                    },
                    sectionList: [
                        {
                            id: 1,
                            name: 'WhoWeAre',
                            title: 'Who We Are',
                            description: 'To know why we\'re here, you have to know where we come from. Read about our history, how we came to champion the green lifestyle, and what we stand for.',
                            imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/who-we-are-thumb.webp',
                            linkDesc: 'See what drives Clearview Energy',
                            webUrl: '/about-us/who-we-are'
                        },
                        {
                            id: 2,
                            name: 'Why Choose Clearview',
                            title: 'Why Choose Clearview',
                            description: 'There are plenty of electricity suppliers out there, so what makes Clearview Energy so special? Here you\'ll learn what sets us apart and what we\'re doing to make this a better world.',
                            imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/why-choose-clearview-thumb.webp',
                            linkDesc: 'Here\'s why you should choose Clearview',
                            webUrl: '/about-us/why-choose-clearview'

                        },
                        {
                            id: 3,
                            name: 'partnerships',
                            title: 'Partnerships',
                            description: 'Here are just a few of the organizations Clearview Energy works with who promote green initiatives in order to slow the rate of climate change.',
                            imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/partnerships-thumb.webp',
                            linkDesc: 'Meet Our Partners',
                            webUrl: '/about-us/partnerships'
                        }                        
                    ]
                },
                {
                    name: 'CustomerCare',
                    urlslug: 'customer-care',
                    hero:
                    {
                        title: 'Customer Care',
                        imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/customer-care-hero-bg.webp',
                        description: 'Clearview Energy '

                    },
                    sectionList: 
                    [ 
                        {
                            id: 1,
                            name: 'WhoWeAre',
                            title: 'Who We Are',
                            description: 'To know why we\'re here, you have to know where we come from. Read about our history, how we came to champion the green lifestyle, and what we stand for.',
                            imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/who-we-are-thumb.webp',
                            linkDesc: 'See what drives Clearview Energy',
                            webUrl: '/about-us/who-we-are'
                        },
                        {
                            id: 2,
                            name: 'Why Choose Clearview',
                            title: 'Why Choose Clearview',
                            description: 'There are plenty of electricity suppliers out there, so what makes Clearview Energy so special? Here you\'ll learn what sets us apart and what we\'re doing to make this a better world.',
                            imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/why-choose-clearview-thumb.webp',
                            linkDesc: 'Here\'s why you should choose Clearview',
                            webUrl: '/about-us/why-choose-clearview'

                        },
                        {
                            id: 3,
                            name: 'partnerships',
                            title: 'Partnerships',
                            description: 'Here are just a few of the organizations Clearview Energy works with who promote green initiatives in order to slow the rate of climate change.',
                            imgUrl: 'https://cdn.cve.so/img/Themes/DefaultClean/Content/images/partnerships-thumb.webp',
                            linkDesc: 'Meet Our Partners',
                            webUrl: '/about-us/partnerships'
                        }      
                    ]                        
                }
            ]
        }
    })
}
export default createStore

