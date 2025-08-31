export const SCREENS = {
    HOME: 'Home',
    ROLES: 'Roles',
} as const;

export type ScreenName = keyof typeof SCREENS;