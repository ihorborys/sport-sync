export const SCREENS = {
    HOME: 'Home',
    AUTH: 'Auth',
    ROLES: 'Roles',
} as const;

export type ScreenName = keyof typeof SCREENS;