export const SCREENS = {
    HOME: 'Home',
    AUTHORISATION: 'Authorisation',
    ROLES: 'Roles',
} as const;

export type ScreenName = keyof typeof SCREENS;