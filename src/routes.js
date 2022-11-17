import React from 'react';
import Rumi from './Rumi';

const routes = {
    about: {
        link: "/",
        nav: "home",
        //element: <About />
    },
    art: {
        link: "/art",
        nav: "art",
        element: <Rumi />
    },
    music: {
        link: "/music",
        nav: "music",
        element: <Rumi />
    },
    rumi: {
        link: "/rumi",
        nav: "rumi",
        element: <Rumi />
    },
    writing: {
        link: "/writing",
        nav: "writing",
        element: <Rumi />
    },
    teaching: {
        link: "/teaching",
        nav: "teaching",
        element: <Rumi />
    },
    rumi_a: {
        link: "/gallery",
        nav: "gallery",
        element: <Rumi />
    },
    india: {
        link: "/india",
        nav: "india",
        element: <Rumi />
    },
    peru: {
        link: "/peru",
        nav: "peru",
        element: <Rumi />
    },
    maps: {
        link: "/maps",
        nav: "maps",
        element: <Rumi />
    },
    letters: {
        link: "/letters",
        nav: "letters",
        element: <Rumi />
    },
}

export default routes