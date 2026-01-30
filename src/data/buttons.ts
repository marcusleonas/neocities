interface Button {
    src: string;
    href?: string;
    category: "neighbour" | "liked" | "inactive";
}

export const buttons: Button[] = [
    {
        src: "https://file.garden/aXdBx1DU1BidR1It/conehead%20webring%20found%20heaven%2088x31.png",
        href: "https://coneheads.netlify.app",
        category: "neighbour",
    },
    {
        src: "https://file.garden/ZrZSgsrYfQXsO7QH/buttons/lockheartlove_button.png",
        href: "http://lockheart.love",
        category: "neighbour",
    },
    {
        src: "/images/buttons/cozyghosty25.png",
        href: "https://cozyghostly.neocities.org",
        category: "liked",
    },
    {
        src: "/images/buttons/lazerbunny.gif",
        href: "https://lazer-bunny.neocities.org",
        category: "liked",
    },
    {
        src: "https://raw.githubusercontent.com/bechnokid/neocities/refs/heads/master/public/assets/images/button.png",
        href: "https://bechnokid.neocities.org",
        category: "liked",
    },
    {
        src: "https://file.garden/Z38yn5JN2nXAbi-Q/site/ezgif.com-animated-gif-maker.gif",
        href: "https://fishshrine.neocities.org",
        category: "liked",
    },
    {
        src: "/images/buttons/makoenergy.gif",
        href: "https://makoenergy.neocities.org",
        category: "liked",
    },
];
