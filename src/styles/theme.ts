import "styled-components";

// Universe types for the multiverse theme
export type UniverseType =
  | "cybertech"
  | "fantasy"
  | "corporate"
  | "cosmic"
  | "steampunk";

// Universe-specific color schemes
export interface UniverseColors {
  cybertech: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    glow: string;
    grid: string;
    neon: string;
    dark: string;
    light: string;
    portal: string;
  };
  fantasy: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    magic: string;
    nature: string;
    ancient: string;
    dark: string;
    light: string;
    portal: string;
  };
  corporate: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    highlight: string;
    subtle: string;
    professional: string;
    dark: string;
    light: string;
    portal: string;
  };
  cosmic: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    nebula: string;
    stars: string;
    void: string;
    dark: string;
    light: string;
    portal: string;
  };
  steampunk: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    brass: string;
    copper: string;
    steam: string;
    dark: string;
    light: string;
    portal: string;
  };
}

export interface Colors {
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  tertiary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  success: {
    main: string;
    light: string;
    dark: string;
  };
  error: {
    main: string;
    light: string;
    dark: string;
  };
  warning: {
    main: string;
    light: string;
    dark: string;
  };
  info: {
    main: string;
    light: string;
    dark: string;
  };
  grey: Record<number, string>;
  common: {
    white: string;
    black: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    default: string;
    paper: string;
    light: string;
    gradient: string;
  };
  divider: string;
  universes: UniverseColors;
}

export interface Typography {
  fontFamily: string;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  caption: TextStyle;
  button: TextStyle;
  universeFonts: {
    cybertech: string;
    fantasy: string;
    corporate: string;
    cosmic: string;
    steampunk: string;
  };
}

export interface TextStyle {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  textTransform?: string;
  letterSpacing?: string;
}

export interface Spacing {
  [key: number]: string;
}

export interface Shadows {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  inner: string;
  outline: string;
  none: string;
  glow: string;
  universes: {
    cybertech: string;
    fantasy: string;
    corporate: string;
    cosmic: string;
    steampunk: string;
  };
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  default: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  full: string;
}

export interface ZIndex {
  mobileStepper: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
  portal: number;
  universe: number;
}

export interface Transitions {
  easing: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    sharp: string;
    bounce: string;
    elastic: string;
    portal: string;
    rift: string;
  };
  duration: {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
    portalOpen: number;
    portalTransition: number;
    universeShift: number;
  };
}

export interface Animation {
  keyframes: {
    fadeIn: string;
    fadeOut: string;
    slideInUp: string;
    slideInDown: string;
    slideInLeft: string;
    slideInRight: string;
    pulse: string;
    bounce: string;
    spin: string;
    shimmer: string;
    glow: string;
    portalOpen: string;
    portalClose: string;
    portalTravel: string;
    cybertechGlitch: string;
    fantasyMagic: string;
    corporateSlide: string;
    cosmicExpand: string;
    steampunkGears: string;
    dimensionalRift: string;
    universeTransition: string;
  };
  variants: {
    fadeIn: AnimationVariant;
    fadeOut: AnimationVariant;
    slideInUp: AnimationVariant;
    slideInDown: AnimationVariant;
    slideInLeft: AnimationVariant;
    slideInRight: AnimationVariant;
    pulse: AnimationVariant;
    bounce: AnimationVariant;
    spin: AnimationVariant;
    shimmer: AnimationVariant;
    glow: AnimationVariant;
    portalOpen: AnimationVariant;
    portalClose: AnimationVariant;
    portalTravel: AnimationVariant;
    cybertechGlitch: AnimationVariant;
    fantasyMagic: AnimationVariant;
    corporateSlide: AnimationVariant;
    cosmicExpand: AnimationVariant;
    steampunkGears: AnimationVariant;
    dimensionalRift: AnimationVariant;
    universeTransition: AnimationVariant;
  };
}

export interface AnimationVariant {
  className: string;
  css: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    typography: Typography;
    spacing: Spacing;
    shadows: Shadows;
    breakpoints: Breakpoints;
    borderRadius: BorderRadius;
    zIndex: ZIndex;
    transitions: Transitions;
    animation: Animation;
  }
}

export const theme = {
  colors: {
    primary: {
      main: "#6d28d9", // Improved purple
      light: "#8b5cf6",
      dark: "#4c1d95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f59e0b", // Warmer orange
      light: "#fbbf24",
      dark: "#d97706",
      contrastText: "#1a1a1a",
    },
    tertiary: {
      main: "#10b981", // Vibrant teal
      light: "#34d399",
      dark: "#059669",
      contrastText: "#1a1a1a",
    },
    success: {
      main: "#10b981", // Consistent with tertiary
      light: "#34d399",
      dark: "#059669",
    },
    error: {
      main: "#ef4444", // Brighter red
      light: "#f87171",
      dark: "#b91c1c",
    },
    warning: {
      main: "#f59e0b", // Consistent with secondary
      light: "#fbbf24",
      dark: "#d97706",
    },
    info: {
      main: "#3b82f6", // Vibrant blue
      light: "#60a5fa",
      dark: "#2563eb",
    },
    grey: {
      50: "#18181b",
      100: "#27272a",
      200: "#3f3f46",
      300: "#52525b",
      400: "#71717a",
      500: "#a1a1aa",
      600: "#d4d4d8",
      700: "#e4e4e7",
      800: "#f4f4f5",
      900: "#fafafa",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    text: {
      primary: "#f4f4f5",
      secondary: "#a1a1aa",
      disabled: "#52525b",
    },
    background: {
      default: "#09090b",
      paper: "#18181b",
      light: "#27272a",
      gradient: "linear-gradient(145deg, #09090b 0%, #18181b 100%)",
    },
    divider: "#3f3f46",
    universes: {
      cybertech: {
        primary: "#00f0ff", // Neon cyan
        secondary: "#ff00e4", // Neon magenta
        accent: "#fffc00", // Neon yellow
        background: "#0a0a1e", // Dark blue-black
        text: "#ffffff",
        glow: "rgba(0, 240, 255, 0.8)",
        grid: "#1a1a3a",
        neon: "#00ff9f",
        dark: "#050510",
        light: "#2a2a4a",
        portal: "radial-gradient(circle, #00f0ff 0%, #0a0a1e 70%)",
      },
      fantasy: {
        primary: "#9f7aea", // Mystical purple
        secondary: "#38b2ac", // Enchanted teal
        accent: "#f6ad55", // Magical amber
        background: "#2d3748", // Deep slate
        text: "#e2e8f0",
        magic: "#f6e05e", // Glowing yellow
        nature: "#68d391", // Forest green
        ancient: "#b7791f", // Aged gold
        dark: "#1a202c",
        light: "#4a5568",
        portal: "radial-gradient(circle, #9f7aea 0%, #2d3748 70%)",
      },
      corporate: {
        primary: "#3182ce", // Professional blue
        secondary: "#718096", // Slate gray
        accent: "#dd6b20", // Accent orange
        background: "#f7fafc", // Clean white
        text: "#1a202c",
        highlight: "#ebf8ff", // Light blue highlight
        subtle: "#e2e8f0", // Subtle gray
        professional: "#2c5282", // Deep blue
        dark: "#2d3748",
        light: "#edf2f7",
        portal: "radial-gradient(circle, #3182ce 0%, #f7fafc 70%)",
      },
      cosmic: {
        primary: "#805ad5", // Cosmic purple
        secondary: "#d53f8c", // Stellar pink
        accent: "#38b2ac", // Nebula teal
        background: "#000000", // Void black
        text: "#e2e8f0",
        nebula: "linear-gradient(to right, #805ad5, #d53f8c, #38b2ac)",
        stars: "#ffffff",
        void: "#0a0514",
        dark: "#0a0514",
        light: "#2d3748",
        portal: "radial-gradient(circle, #805ad5 0%, #000000 70%)",
      },
      steampunk: {
        primary: "#b7791f", // Brass
        secondary: "#c05621", // Copper
        accent: "#2b6cb0", // Blue accent
        background: "#2d2a22", // Aged paper
        text: "#e2e8f0",
        brass: "#d69e2e",
        copper: "#dd6b20",
        steam: "#cbd5e0",
        dark: "#1a1814",
        light: "#4a4538",
        portal: "radial-gradient(circle, #b7791f 0%, #2d2a22 70%)",
      },
    },
  },
  typography: {
    fontFamily:
      "'Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "-0.015em",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.01em",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.02em",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      lineHeight: 1.75,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
    universeFonts: {
      cybertech: "'Orbitron', 'Rajdhani', 'Inter', sans-serif",
      fantasy: "'Cinzel', 'Fondamento', 'Inter', serif",
      corporate: "'Poppins', 'Inter', 'Segoe UI', sans-serif",
      cosmic: "'Exo 2', 'Nova Square', 'Inter', sans-serif",
      steampunk: "'Playfair Display', 'IM Fell English', 'Inter', serif",
    },
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    sm: "0 2px 4px rgba(0, 0, 0, 0.3)",
    md: "0 4px 8px rgba(0, 0, 0, 0.4)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.5)",
    xl: "0 12px 24px rgba(0, 0, 0, 0.6)",
    "2xl": "0 16px 32px rgba(0, 0, 0, 0.7)",
    inner: "inset 0 2px 4px rgba(0, 0, 0, 0.8)",
    outline: "0 0 0 3px rgba(109, 40, 217, 0.4)",
    none: "none",
    glow: "0 0 15px rgba(109, 40, 217, 0.5)",
    universes: {
      cybertech: "0 0 20px rgba(0, 240, 255, 0.7)",
      fantasy: "0 0 15px rgba(159, 122, 234, 0.6)",
      corporate: "0 10px 25px rgba(49, 130, 206, 0.2)",
      cosmic: "0 0 30px rgba(128, 90, 213, 0.8)",
      steampunk: "0 5px 15px rgba(183, 121, 31, 0.5)",
    },
  },
  breakpoints: {
    xs: "0px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    portal: 1600,
    universe: 1700,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      portal: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      rift: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
      portalOpen: 800,
      portalTransition: 1200,
      universeShift: 1500,
    },
  },
  animation: {
    keyframes: {
      fadeIn: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `,
      fadeOut: `
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `,
      slideInUp: `
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `,
      slideInDown: `
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `,
      slideInLeft: `
        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `,
      slideInRight: `
        @keyframes slideInRight {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `,
      pulse: `
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `,
      bounce: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `,
      spin: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
      shimmer: `
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `,
      glow: `
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(109, 40, 217, 0.5); }
          50% { box-shadow: 0 0 20px rgba(109, 40, 217, 0.8); }
          100% { box-shadow: 0 0 5px rgba(109, 40, 217, 0.5); }
        }
      `,
      portalOpen: `
        @keyframes portalOpen {
          0% { 
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.1);
            opacity: 0.9;
          }
          100% { 
            transform: scale(1);
            opacity: 1;
          }
        }
      `,
      portalClose: `
        @keyframes portalClose {
          0% { 
            transform: scale(1);
            opacity: 1;
          }
          100% { 
            transform: scale(0);
            opacity: 0;
          }
        }
      `,
      portalTravel: `
        @keyframes portalTravel {
          0% { 
            transform: scale(1) rotate(0deg);
            filter: hue-rotate(0deg);
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            filter: hue-rotate(180deg) brightness(1.5);
          }
          100% { 
            transform: scale(0) rotate(360deg);
            filter: hue-rotate(360deg);
          }
        }
      `,
      cybertechGlitch: `
        @keyframes cybertechGlitch {
          0% {
            clip-path: inset(40% 0 61% 0);
            transform: skew(0.15deg);
          }
          20% {
            clip-path: inset(75% 0 23% 0);
            transform: skew(0.3deg);
          }
          40% {
            clip-path: inset(9% 0 38% 0);
            transform: skew(-0.1deg);
          }
          60% {
            clip-path: inset(33% 0 97% 0);
            transform: skew(0.4deg);
          }
          80% {
            clip-path: inset(23% 0 56% 0);
            transform: skew(-0.2deg);
          }
          100% {
            clip-path: inset(67% 0 4% 0);
            transform: skew(-0.1deg);
          }
        }
      `,
      fantasyMagic: `
        @keyframes fantasyMagic {
          0% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            background-position: 100% 50%;
            filter: hue-rotate(180deg) brightness(1.3);
          }
          100% {
            background-position: 0% 50%;
            filter: hue-rotate(360deg) brightness(1);
          }
        }
      `,
      corporateSlide: `
        @keyframes corporateSlide {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `,
      cosmicExpand: `
        @keyframes cosmicExpand {
          0% {
            transform: scale(0.8);
            opacity: 0;
            filter: brightness(0.5);
          }
          50% {
            opacity: 0.5;
            filter: brightness(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1);
          }
        }
      `,
      steampunkGears: `
        @keyframes steampunkGears {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `,
      dimensionalRift: `
        @keyframes dimensionalRift {
          0% {
            transform: scale(1) rotate(0deg);
            filter: blur(0px) brightness(1);
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            filter: blur(10px) brightness(1.5);
          }
          100% {
            transform: scale(1) rotate(360deg);
            filter: blur(0px) brightness(1);
          }
        }
      `,
      universeTransition: `
        @keyframes universeTransition {
          0% {
            opacity: 0;
            transform: scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }
      `,
    },
    variants: {
      fadeIn: {
        className: "animate-fadeIn",
        css: "animation: fadeIn 0.5s ease-in-out forwards;",
      },
      fadeOut: {
        className: "animate-fadeOut",
        css: "animation: fadeOut 0.5s ease-in-out forwards;",
      },
      slideInUp: {
        className: "animate-slideInUp",
        css: "animation: slideInUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;",
      },
      slideInDown: {
        className: "animate-slideInDown",
        css: "animation: slideInDown 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;",
      },
      slideInLeft: {
        className: "animate-slideInLeft",
        css: "animation: slideInLeft 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;",
      },
      slideInRight: {
        className: "animate-slideInRight",
        css: "animation: slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;",
      },
      pulse: {
        className: "animate-pulse",
        css: "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      bounce: {
        className: "animate-bounce",
        css: "animation: bounce 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;",
      },
      spin: {
        className: "animate-spin",
        css: "animation: spin 1s linear infinite;",
      },
      shimmer: {
        className: "animate-shimmer",
        css: "animation: shimmer 2s linear infinite; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent); background-size: 200% 100%;",
      },
      glow: {
        className: "animate-glow",
        css: "animation: glow 2s ease-in-out infinite;",
      },
      portalOpen: {
        className: "animate-portalOpen",
        css: "animation: portalOpen 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;",
      },
      portalClose: {
        className: "animate-portalClose",
        css: "animation: portalClose 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;",
      },
      portalTravel: {
        className: "animate-portalTravel",
        css: "animation: portalTravel 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;",
      },
      cybertechGlitch: {
        className: "animate-cybertechGlitch",
        css: "animation: cybertechGlitch 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;",
      },
      fantasyMagic: {
        className: "animate-fantasyMagic",
        css: "animation: fantasyMagic 3s ease infinite; background-size: 200% 200%;",
      },
      corporateSlide: {
        className: "animate-corporateSlide",
        css: "animation: corporateSlide 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;",
      },
      cosmicExpand: {
        className: "animate-cosmicExpand",
        css: "animation: cosmicExpand 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;",
      },
      steampunkGears: {
        className: "animate-steampunkGears",
        css: "animation: steampunkGears 4s linear infinite;",
      },
      dimensionalRift: {
        className: "animate-dimensionalRift",
        css: "animation: dimensionalRift 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;",
      },
      universeTransition: {
        className: "animate-universeTransition",
        css: "animation: universeTransition 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;",
      },
    },
  },
};

export type Theme = typeof theme;
