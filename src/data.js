import oldWebsite from "./images/old_website.png"
import roomFinder from "./images/room_finder.png"
import thisWebsite from "./images/this_website.png"
import testing from "./images/testing.png"
import squirrelCatcher from "./images/squirrel_catcher.png"
import fate from "./images/fate.png"
import bliss from "./images/bliss.png"
import roto from "./images/roto.png"

export default {

    projects: [
        {
            title: "This Website!!", 
            date: "2024",
            para:
                "I made this new portfolio site using Gatsby - a React based framework.", 
            imageSrc:
                thisWebsite,
            alt: "home page of this website", 
            url: "https://github.com/emilybliu/emily-s-website",
        },
        {
            title: "RoomFinder",
            date: "2023",
            para:
                "Book rooms across UVA grounds! Created using Django.", 
            imageSrc:
                roomFinder,
            alt: "home page of RoomFinder", 
            url: "https://github.com/emilybliu/RoomFinder",
        },
        {
            title: "RapidTables Testing Showcase",
            date: "2023",
            para:
                "50+ JUnit and Selenium tests using input space partition testing with multiple base choice coverage criteria.", 
            imageSrc:
                testing,
            alt: "screenshot of some tests", 
            url: "https://github.com/FishNumber7/Rapid-Tables-Test",
        },
        {
            title: "Old Website", 
            date: "2022",
            para:
                "My first personal portfolio website.",
            imageSrc:
                oldWebsite,
            alt: "home page of my old website", 
            url: "https://github.com/emilybliu/emilybliu.github.io",
        },
        {
            title: "Squirrel Catcher", 
            date: "2021",
            para:
                "Fun game written in python, using pygame and UVA's gamebox.", 
            imageSrc:
                squirrelCatcher,
            alt: "a frame of the game", 
            url: "https://github.com/emilybliu/squirrel-catcher/",
        }

    ],

    art: [
        {
            title: "fate",
            date: "2023",
            para:
                "Short animation depicting fate.",
            imageSrc: fate,
            alt: "fate", 
            url: "https://vimeo.com/899082290?share=copy" ,
        
        },

        {
            title: "untitled rotoscope",
            date: "2023",
            para:
                "Juxtaposing various archival footage with rotoscoping, exploring a shared history",
            imageSrc: roto,
            alt: "untitled rotoscope", 
            url: "https://vimeo.com/901341831?share=copy" ,
        
        },

        {
            title: "creepy bliss",
            date: "2023",
            para:
                "Created using Adobe After Effects' 3D camera. Inspired by classic Windows background.",
            imageSrc: bliss,
            alt: "bliss", 
            url: "https://vimeo.com/901342234?share=copy" ,
        
        }
    ]



}