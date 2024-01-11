let perPage = 3;

const perPageRestrictions = {
    '-1200': 2,
    '-650': 1,
};

for (const [width, elementsOnDisplay] of Object.entries(perPageRestrictions)) {
    if (window.innerWidth <= Number(Math.abs(width))) {
        perPage = elementsOnDisplay;
    }
}

const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    snap: true,
    perPage: perPage,
    autoScroll: {
        speed: 1,
    },
});

splide.mount(window.splide.Extensions);