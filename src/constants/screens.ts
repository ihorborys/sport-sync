export const SCREENS = {
    INTRO: 'Intro',
    AUTH: 'Auth',
    ROLES: 'Roles',
    COACH: 'Coach',
    PLAYER: 'Player',
    PROFILE: 'Profile',
    COACH_TABS: 'CoachTabs',
    PLAYER_TABS: 'PlayerTabs',
    HOME: 'Home',
    GROUPS: 'Groups',
    GROUPS_STACK: 'GroupsStack',
    GROUP_DETAILS: 'GroupDetails',
} as const;

export type ScreenName = keyof typeof SCREENS;