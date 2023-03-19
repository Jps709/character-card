
export default async function handler(request, res) {

const design = [
    {
        "description": "Details",
        "name": "Some Nerd",
        "title":  "Hello There",
        "top": " Meme",
        "bottom":  "Goes Here",
        "characterImg":  "https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg"   
    },
    {
        "description": "Details",
        "name": "Some Nerd",
        "title":  "Hello There",
        "top": " Meme",
        "bottom":  "Goes Here",
        "characterImg":  "https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg"
    },
    {
        "description": "Details",
        "name": "Some Nerd",
        "title":  "Hello There",
        "top": " Meme",
        "bottom":  "Goes Here",
        "characterImg":  "https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg"   
    },
    {
        "description": "Details",
        "name": "Some Nerd",
        "title":  "Hello There",
        "top": " Meme",
        "bottom":  "Goes Here",
        "characterImg":  "https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg"   
    },
    {
        "description": "Details",
        "name": "Some Nerd",
        "title":  "Hello There",
        "top": " Meme",
        "bottom":  "Goes Here",
        "characterImg":  "https://i.kym-cdn.com/entries/icons/original/000/029/079/hellothere.jpg"   
    },
];

res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
res.json(design);

}