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
];
