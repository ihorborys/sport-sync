export type RootStackParamList = {
    Home: undefined;
    Auth: undefined;
    Roles: undefined;
    Coach: { coachId: string }; // передаємо id тренера
    Athlete: { athleteId: string; name?: string }; // передаємо id та опціонально ім'я
    Profile: { userId: string }; // передаємо id користувача
};