import Vuex from 'vuex'
const createStore = () => {
    return new Vuex.Store({
        state: {
            pageList: [
                {
                    name: 'AboutUs',
                    urlslug: 'about-us',
                    sectionList: [
                        {
                            name: 'Who We Are',
                            title: 'Who We Are',
                            description: 'To know why we\'re here, you have to know where we come from. Read about our history, how we came to champion the green lifestyle, and what we stand for.',
                            imgUrl: '',
                            webUrl: ''
                        },
                        {
                            name: '',
                            title: '',
                            description: '',
                            imgUrl: '',
                            webUrl: ''

                        },
                        {
                            name: '',
                            title: '',
                            description: '',
                            imgUrl: '',
                            webUrl: ''
                        }
                    ]
                },
                {
                    name: 'CustomerCare',
                    urlslug: 'customer-care',
                    sectionList: 
                    [ 
                        {
                            name: '',
                            title: '',
                            description: '',
                            imgUrl: '',
                            webUrl: ''

                        },
                        {
                            name: '',
                            title: '',
                            description: '',
                            imgUrl: '',
                            webUrl: ''

                        },
                        {
                            name: '',
                            title: '',
                            description: '',
                            imgUrl: '',
                            webUrl: ''
                        }
                    ]                        
                }
            ]
        }
    })
}
export default createStore

