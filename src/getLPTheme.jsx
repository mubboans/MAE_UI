import { alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const brand = {
    50: '#fff7d1',
    100: '#ffe866',
    200: '#ffd500',
    300: '#ffbd00',
    400: '#ff8a00',
    500: '#f05a28',
    600: '#d93b1f',
    700: '#9f2419',
    800: '#5e1712',
    900: '#230b08',
};

export const secondary = {
    50: '#e7fff4',
    100: '#b6f5da',
    200: '#58e0af',
    300: '#00c47a',
    400: '#00a365',
    500: '#04724d',
    600: '#07543c',
    700: '#063b2d',
    800: '#03281f',
    900: '#011812',
};

export const gray = {
    50: '#fffdf2',
    100: '#f2eee0',
    200: '#d8d1bf',
    300: '#b5ac98',
    400: '#8c8473',
    500: '#625c51',
    600: '#4b463d',
    700: '#322f29',
    800: '#1f1d19',
    900: '#0b0b0a',
};

export const green = {
    50: '#F6FEF6',
    100: '#E3FBE3',
    200: '#C7F7C7',
    300: '#A1E8A1',
    400: '#51BC51',
    500: '#1F7A1F',
    600: '#136C13',
    700: '#0A470A',
    800: '#042F04',
    900: '#021D02',
};

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            light: brand[200],
            main: brand[500],
            dark: brand[800],
            contrastText: '#111111',
            ...(mode === 'dark' && {
                contrastText: '#111111',
                light: brand[100],
                main: brand[200],
                dark: brand[500],
            }),
        },
        secondary: {
            light: secondary[300],
            main: secondary[500],
            dark: secondary[800],
            ...(mode === 'dark' && {
                light: secondary[400],
                main: secondary[500],
                dark: secondary[900],
            }),
        },
        warning: {
            main: '#F7B538',
            dark: '#F79F00',
            ...(mode === 'dark' && { main: '#F7B538', dark: '#F79F00' }),
        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700],
            ...(mode === 'dark' && { light: '#D32F2F', main: '#D32F2F', dark: '#B22A2A' }),
        },
        success: {
            light: green[300],
            main: green[400],
            dark: green[800],
            ...(mode === 'dark' && {
                light: green[400],
                main: green[500],
                dark: green[700],
            }),
        },
        grey: {
            50: gray[50],
            100: gray[100],
            200: gray[200],
            300: gray[300],
            400: gray[400],
            500: gray[500],
            600: gray[600],
            700: gray[700],
            800: gray[800],
            900: gray[900],
        },
        divider: mode === 'dark' ? '#fffdf2' : '#111111',
        background: {
            default: '#fffdf2',
            paper: '#ffffff',
            ...(mode === 'dark' && { default: '#111111', paper: '#1f1d19' }),
        },
        text: {
            primary: '#111111',
            secondary: '#322f29',
            ...(mode === 'dark' && { primary: '#fffdf2', secondary: '#f2eee0' }),
        },
        action: {
            selected: brand[100],
            ...(mode === 'dark' && {
                selected: brand[500],
            }),
        },
    },
    typography: {
        fontFamily: ['"Arial Black"', '"Inter"', 'Impact', 'system-ui', 'sans-serif'].join(','),
        h1: {
            fontSize: 64,
            fontWeight: 900,
            lineHeight: 0.96,
            letterSpacing: 0,
            textTransform: 'uppercase',
        },
        h2: {
            fontSize: 48,
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: 0,
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: 42,
            fontWeight: 900,
            lineHeight: 1.05,
            textTransform: 'uppercase',
        },
        h4: {
            fontSize: 36,
            fontWeight: 900,
            lineHeight: 1.1,
            textTransform: 'uppercase',
        },
        h5: {
            fontSize: 20,
            fontWeight: 900,
            textTransform: 'uppercase',
        },
        h6: {
            fontSize: 18,
            fontWeight: 900,
            textTransform: 'uppercase',
        },
        subtitle1: {
            fontSize: 18,
        },
        subtitle2: {
            fontSize: 16,
        },
        body1: {
            fontWeight: 400,
            fontSize: 15,
        },
        body2: {
            fontWeight: 400,
            fontSize: 14,
        },
        caption: {
            fontWeight: 400,
            fontSize: 12,
        },
    },
});

export default function getLPTheme(mode) {
    return {
        ...getDesignTokens(mode),
        components: {
            MuiAccordion: {
                defaultProps: {
                    elevation: 0,
                    disableGutters: true,
                },
                styleOverrides: {
                    root: ({ theme }) => ({
                        padding: 8,
                        overflow: 'clip',
                        backgroundColor: theme.palette.background.paper,
                        border: '3px solid',
                        borderColor: theme.palette.text.primary,
                        borderRadius: '0 !important',
                        boxShadow: `6px 6px 0 ${theme.palette.text.primary}`,
                        ':before': {
                            backgroundColor: 'transparent',
                        },
                        '& + &': { mt: 2 },
                        ...(theme.palette.mode === 'dark' && {
                            backgroundColor: gray[900],
                            borderColor: gray[50],
                            boxShadow: `6px 6px 0 ${brand[200]}`,
                        }),
                    }),
                },
            },
            MuiAccordionSummary: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        border: 'none',
                        borderRadius: 0,
                        '&:hover': { backgroundColor: brand[100] },
                        ...(theme.palette.mode === 'dark' && {
                            '&:hover': { backgroundColor: brand[500] },
                        }),
                    }),
                },
            },
            MuiAccordionDetails: {
                styleOverrides: {
                    root: { mb: 20, border: 'none' },
                },
            },
            MuiToggleButtonGroup: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderRadius: 0,
                        boxShadow: `4px 4px 0 ${theme.palette.text.primary}`,
                        '& .Mui-selected': {
                            color: brand[500],
                        },
                        ...(theme.palette.mode === 'dark' && {
                            '& .Mui-selected': {
                                color: '#fff',
                            },
                            boxShadow: `4px 4px 0 ${brand[200]}`,
                        }),
                    }),
                },
            },
            MuiToggleButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        padding: '12px 16px',
                        textTransform: 'uppercase',
                        borderRadius: 0,
                        fontWeight: 900,
                        ...(theme.palette.mode === 'dark' && {
                            color: gray[400],
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                            '&.Mui-selected': { color: brand[300] },
                        }),
                    }),
                },
            },
            MuiButtonBase: {
                defaultProps: {
                    disableTouchRipple: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        boxSizing: 'border-box',
                        transition: 'transform 100ms ease-in, box-shadow 100ms ease-in, background-color 100ms ease-in',
                        '&:focus-visible': {
                            outline: `3px solid ${brand[200]}`,
                            outlineOffset: '2px',
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: ({ theme, ownerState }) => ({
                        boxSizing: 'border-box',
                        boxShadow: `4px 4px 0 ${theme.palette.text.primary}`,
                        borderRadius: 0,
                        border: `3px solid ${theme.palette.text.primary}`,
                        textTransform: 'uppercase',
                        fontWeight: 900,
                        '&:active': {
                            transform: 'translate(3px, 3px)',
                            boxShadow: `1px 1px 0 ${theme.palette.text.primary}`,
                        },
                        ...(ownerState.size === 'small' && {
                            maxHeight: '32px',
                        }),
                        ...(ownerState.size === 'medium' && {
                            height: '40px',
                        }),
                        ...(ownerState.variant === 'contained' &&
                            ownerState.color === 'primary' && {
                            color: '#111111',
                            background: brand[200],
                            backgroundImage: 'none',
                            outline: 'none',
                            '&:hover': {
                                background: secondary[200],
                                backgroundImage: 'none',
                            },
                        }),
                        ...(ownerState.variant === 'outlined' && {
                            backgroundColor: theme.palette.background.paper,
                            borderColor: theme.palette.text.primary,
                            color: theme.palette.text.primary,
                            '&:hover': {
                                backgroundColor: brand[100],
                                borderColor: theme.palette.text.primary,
                            },
                        }),
                        ...(ownerState.variant === 'text' && {
                            color: theme.palette.text.primary,
                            borderColor: 'transparent',
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: brand[100],
                            },
                        }),
                        ...(theme.palette.mode === 'dark' && {
                            ...(ownerState.variant === 'outlined' && {
                                backgroundColor: gray[800],
                                borderColor: gray[50],
                                color: gray[50],
                                '&:hover': {
                                    backgroundColor: brand[500],
                                    borderColor: gray[50],
                                },
                            }),
                            ...(ownerState.variant === 'text' && {
                                color: gray[50],
                                '&:hover': {
                                    backgroundColor: brand[500],
                                    borderColor: gray[50],
                                },
                            }),
                        }),
                    }),
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: ({ theme, ownerState }) => ({
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 0,
                        border: `3px solid ${theme.palette.text.primary}`,
                        boxShadow: `8px 8px 0 ${theme.palette.text.primary}`,
                        transition: 'background-color, border, 80ms ease',
                        ...(ownerState.variant === 'outlined' && {
                            background: theme.palette.background.paper,
                            '&:hover': {
                                borderColor: theme.palette.text.primary,
                                boxShadow: `10px 10px 0 ${brand[200]}`,
                            },
                        }),
                        ...(theme.palette.mode === 'dark' && {
                            backgroundColor: gray[800],
                            border: `3px solid ${gray[50]}`,
                            boxShadow: `8px 8px 0 ${brand[200]}`,
                            ...(ownerState.variant === 'outlined' && {
                                background: gray[800],
                                '&:hover': {
                                    borderColor: gray[50],
                                    boxShadow: `10px 10px 0 ${brand[200]}`,
                                },
                            }),
                        }),
                    }),
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        alignSelf: 'center',
                        py: 1.5,
                        px: 0.5,
                        background: brand[100],
                        border: '2px solid',
                        borderColor: theme.palette.text.primary,
                        borderRadius: 0,
                        fontWeight: '900',
                        '&:hover': {
                            backgroundColor: brand[500],
                        },
                        '&:focus-visible': {
                            borderColor: brand[800],
                            backgroundColor: brand[200],
                        },
                        '& .MuiChip-label': {
                            color: brand[500],
                        },
                        '& .MuiChip-icon': {
                            color: brand[500],
                        },
                        ...(theme.palette.mode === 'dark' && {
                            background: brand[500],
                            borderColor: gray[50],
                            '&:hover': {
                                backgroundColor: brand[600],
                            },
                            '&:focus-visible': {
                                borderColor: brand[200],
                                backgroundColor: brand[600],
                            },
                            '& .MuiChip-label': {
                                color: brand[200],
                            },
                            '& .MuiChip-icon': {
                                color: brand[200],
                            },
                        }),
                    }),
                },
            },
            MuiDivider: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderColor: theme.palette.text.primary,
                        borderBottomWidth: 3,
                        ...(theme.palette.mode === 'dark' && {
                            borderColor: gray[50],
                        }),
                    }),
                },
            },
            MuiLink: {
                defaultProps: {
                    underline: 'none',
                },
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: brand[600],
                        fontWeight: 900,
                        position: 'relative',
                        textDecoration: 'none',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: 0,
                            height: '1px',
                            bottom: 0,
                            left: 0,
                            backgroundColor: brand[200],
                            opacity: 0.7,
                            transition: 'width 0.3s ease, opacity 0.3s ease',
                        },
                        '&:hover::before': {
                            width: '100%',
                            opacity: 1,
                        },
                        ...(theme.palette.mode === 'dark' && {
                            color: brand[200],
                        }),
                    }),
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderRadius: 0,
                        color: gray[900],
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        ...(theme.palette.mode === 'dark' && {
                            color: gray[300],
                        }),
                    }),
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        backgroundImage: 'none',
                        backgroundColor: theme.palette.background.paper,
                        ...(theme.palette.mode === 'dark' && {
                            backgroundColor: gray[800],
                        }),
                    }),
                },
            },
            MuiSwitch: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        boxSizing: 'border-box',
                        width: 36,
                        height: 24,
                        padding: 0,
                        transition: 'background-color 100ms ease-in',
                        '&:hover': {
                            '& .MuiSwitch-track': {
                                backgroundColor: brand[600],
                            },
                        },
                        '& .MuiSwitch-switchBase': {
                            '&.Mui-checked': {
                                transform: 'translateX(13px)',
                            },
                        },
                        '& .MuiSwitch-track': {
                            borderRadius: 50,
                        },
                        '& .MuiSwitch-thumb': {
                            boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
                            backgroundColor: '#FFF',
                            width: 16,
                            height: 16,
                            margin: 2,
                        },
                        ...(theme.palette.mode === 'dark' && {
                            width: 36,
                            height: 24,
                            padding: 0,
                            transition: 'background-color 100ms ease-in',
                            '&:hover': {
                                '& .MuiSwitch-track': {
                                    backgroundColor: brand[600],
                                },
                            },
                            '& .MuiSwitch-switchBase': {
                                '&.Mui-checked': {
                                    transform: 'translateX(13px)',
                                },
                            },
                            '& .MuiSwitch-thumb': {
                                boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
                                backgroundColor: '#FFF',
                                width: 16,
                                height: 16,
                                margin: 2,
                            },
                        }),
                    }),
                    switchBase: {
                        height: 24,
                        width: 24,
                        padding: 0,
                        color: '#fff',
                        '&.Mui-checked + .MuiSwitch-track': {
                            opacity: 1,
                        },
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        '& label .Mui-focused': {
                            color: 'white',
                        },
                        '& .MuiInputLabel-root': {
                            backgroundColor: theme.palette.background.paper,
                            px: 0.5,
                            fontFamily: '"Inter", system-ui, sans-serif',
                            fontWeight: 800,
                        },
                        '& .MuiInputBase-input': {
                            boxSizing: 'border-box',
                            '&::placeholder': {
                                opacity: 0.7,
                            },
                        },
                        '& .MuiOutlinedInput-root': {
                            boxSizing: 'border-box',
                            minWidth: 280,
                            minHeight: 40,
                            height: '100%',
                            borderRadius: 0,
                            border: '3px solid',
                            borderColor: theme.palette.text.primary,
                            transition: 'border-color 120ms ease-in',
                            '& fieldset': {
                                border: 'none',
                                boxShadow: 'none',
                                background: 'transparent',
                            },
                            '&:hover': {
                                borderColor: theme.palette.text.primary,
                            },
                            '&.Mui-focused': {
                                borderColor: brand[400],
                                outline: '4px solid',
                                outlineColor: brand[100],
                            },
                        },
                        ...(theme.palette.mode === 'dark' && {
                            '& .MuiOutlinedInput-root': {
                                boxSizing: 'border-box',
                                minWidth: 280,
                                minHeight: 40,
                                height: '100%',
                                borderRadius: 0,
                                border: '3px solid',
                                borderColor: gray[50],
                                transition: 'border-color 120ms ease-in',
                                '& fieldset': {
                                    border: 'none',
                                    boxShadow: 'none',
                                    background: 'transparent',
                                },
                                '&:hover': {
                                    borderColor: brand[300],
                                },
                                '&.Mui-focused': {
                                    borderColor: brand[400],
                                    outline: '4px solid',
                                    outlineColor: alpha(brand[500], 0.5),
                                },
                            },
                        }),
                    }),
                },
            },
        },
    };
}
