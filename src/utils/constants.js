export const HEADER_HEIGHT = 90;
export const FOOTER_HEIGHT = 40;
export const MOBILE_SCREEN_WIDTH = 700;

export const ROUTES = [
    {
        value: '/latest',
        label: 'Latest',
    },
    {
        value: '/posts',
        label: 'Posts',
    },
    {
        value: '/projects',
        label: 'Projects',
    },
    {
        value: '/resume',
        label: 'Resume',
    },
    {
        value: '/contact',
        label: 'Contact',
    },
];

export const COLORS = {
    DARK_ORANGE: '#d25401',
    LIGHT_ORANGE: '#ff9651',
    OFF_WHITE: '#f7f8fa',
    DARK_ORANGE_TEXT: '#5b5242',
    ORANGE: '#ff7400',
    YELLOW: '#ff9900',
    RED: '#ff0000',
    PURPLE: '#212173',
};

export const LIGHT_THEME = {
    colorLowEmphasis: '#7e8c9a',
    colorMidEmphasis: '#21232c',
    colorHighEmphasis: '#ff7400',
    background: '#ffffff',
    offBackground: '#f7f8fa',
    accentBackground: '#ffcfae',
};

export const DARK_THEME = {
    colorLowEmphasis: '#6c7693',
    colorMidEmphasis: '#f2f5f7',
    colorHighEmphasis: '#ff9651',
    background: '#0e141b',
    offBackground: '#182635',
    accentBackground: '#d25401',
};

export const PUG_SEARCH =
    'https://www.google.com/search?biw=1618&bih=916&tbm=isch&sa=1&ei=IgAyXc7oI5HbtAaFpoaoDQ&q=cute+pugs&oq=cute+pugs&gs_l=img.12..0l10.3742.4211..6198...0.0..0.98.467.5......0....1..gws-wiz-img.......0i7i30.RXCuQBPhb7U&ved=0ahUKEwjOgb-Uw8HjAhWRLc0KHQWTAdUQ4dUDCAY';

export const PROJECTS = [
    {
        name: 'Explosion Vent Sizing Tool',
        client: 'Schenck Process',
        location: 'Kansas City, KS',
        type: 'Web Application',
        description: `Internal tool used by engineering and sales teams to appropriately 
                size and report on various explosion vents. Accepts a wide set of
                parameters and performs standards based calculations. Role based
                administrative systems allow lead engineers to handle standards
                updates with code changes`,
        tech: ['React', 'Redux', 'Node.js', 'SQL', 'IIS', 'HTML/CSS'],
        image: 'Vent',
        clientLogo: 'SchenckLogo',
        clientWebsite: 'https://www.schenckprocess.com',
    },
    {
        name: 'Room Scheduler',
        client: 'Federal Aviation Administration',
        location: 'Atlanta, GA',
        type: 'Progressive Web Application ',
        description: `Utilized by Atlanta based air traffic controllers to reserve rooms for
             various events. Administrative roles can manipulate calendar events, with real-time
             updates to other team members. Support for repeat events and dynamic UI for mobile use.`,
        tech: ['React', 'Redux', 'FireBase', 'styled components', 'HTML/CSS'],
        image: 'AirTraffic',
        clientLogo: 'FAALogo',
        clientWebsite: 'https://www.faa.gov',
    },
    {
        name: 'NetSuite Login Chrome Extension',
        client: 'Meridian Business Services',
        location: 'Kansas City, KS',
        type: 'Chrome Extension',
        description: `Facilitate use of shared client NetSuite accounts by implementation 
                engineers by providing and tracking access. Administrative roles can
                assign access to others with abstracted/obfuscated login information.
                Prevents multi-logging of client accounts and the resulting loss of progress.`,
        tech: [
            'React',
            'Redux',
            'Chrome API',
            'Firebase',
            'styled components',
            'HTML/CSS',
        ],
        image: 'ChromeNetSuite',
        clientLogo: 'MeridianLogo',
        clientWebsite: 'https://www.meridianbusiness.com/',
    },
];
