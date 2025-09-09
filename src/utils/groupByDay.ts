export function groupByDay(list: any[]) {
    const days: Record<string, any[]> = {};

    list.forEach((item) => {
        // item.dt → це UNIX time у секундах, тому множимо на 1000
        const date = new Date(item.dt * 1000).toISOString().split("T")[0]; // YYYY-MM-DD
        if (!days[date]) days[date] = [];
        days[date].push(item);
    });

    // для кожного дня рахуємо середню температуру
    return Object.entries(days).map(([date, items]) => {
        const temps = items.map((i: any) => i.main.temp);
        const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;

        return {
            date,
            avgTemp: Math.round(avgTemp),
            icon: items[0].weather[0].icon, // можна вибрати першу іконку
            description: items[0].weather[0].description,
        };
    });
}
