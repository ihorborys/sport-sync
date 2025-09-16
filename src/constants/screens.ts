export const SCREENS = {
    INTRO: 'Intro',
    AUTH: 'Auth',
    ROLES: 'Roles',
    COACH: 'Coach',
    ATHLETE: 'Athlete',
    PROFILE: 'Profile',
    COACHES_TABS: 'CoachesTabs',
    ATHLETE_TABS: 'AthleteTabs',
    HOME: 'Home',
    GROUPS: 'Groups',
} as const;

export type ScreenName = keyof typeof SCREENS;