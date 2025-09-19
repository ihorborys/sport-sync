export type RootStackParamList = {
    Intro: undefined;
    Auth: undefined;
    Roles: undefined;
    Coach: { coachId: string }; // передаємо id тренера
    Athlete: { athleteId: string; name?: string }; // передаємо id та опціонально ім'я
    Profile: { userId: string }; // передаємо id користувача
    CoachesTabs: { userId: string }; // передаємо id користувача
    AthleteTabs: { userId: string }; // передаємо id користувача
    GroupsStack: { userId: string }; // передаємо id користувача
    Groups: { userId: string }; // передаємо id користувача
    GroupDetails: { groupId: string }; // передаємо id користувача
};