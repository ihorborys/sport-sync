export const SCREENS = {
    HOME: 'Home',
    AUTH: 'Auth',
    ROLES: 'Roles',
    COACH: 'Coach',
    ATHLETE: 'Athlete',
    PROFILE: 'Profile',
} as const;

export type ScreenName = keyof typeof SCREENS;