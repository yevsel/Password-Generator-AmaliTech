import localFont from "next/dist/compiled/@next/font/dist/local";

const JetFont = localFont(
    {
        src:[
            {
                path:"../assets/fonts/static/JetBrainsMono-Bold.ttf",
                weight:"200",
                style:"normal"
            },
            {
                path:"../assets/fonts/static/JetBrainsMono-Bold.ttf",
                weight:"400",
                style:"normal"
            },
            {
                path:"../assets/fonts/static/JetBrainsMono-Bold.ttf",
                weight:"600",
                style:"normal"
            },
            {
                path:"../assets/fonts/static/JetBrainsMono-Bold.ttf",
                weight:"800",
                style:"normal"
            },
        ],
        variable:"--font-jet"
    }
)

export {JetFont}