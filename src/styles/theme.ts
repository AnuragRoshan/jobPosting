import "styled-components";

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
}

export interface Transitions {
  easing: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    sharp: string;
    bounce: string;
    elastic: string;
  };
  duration: {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
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
      main: "#6d28d5", // Improved purple
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
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
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
    },
  },
};

export type Theme = typeof theme;
