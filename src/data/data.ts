export interface IContent {
    image: string;
    title: string;
    description: string;
    name: string;
}


export const cards: IContent[] = [
    {
        image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9wY29ybnxlbnwwfHwwfHw%3D&w=1000&q=80',
        title: 'Movies',
        description: '',
        name: 'movies'
    },
    {
        image: 'https://www.tclf.org/sites/default/files/thumbnails/image/Denver_Park_and_Parkway_System2_Barrett_Doherty2014.jpg',
        title: 'Parks',
        description: '',
        name: 'parks'
    },
    {
        image: 'https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.jpg?s=612x612&w=0&k=20&c=9Y0NBylnjNiNl6EkK6XabETzj3tHnHOQWwVk-6iUE_I=',
        title: 'Food and Drinks',
        description: '',
        name: 'food'
    }
]
