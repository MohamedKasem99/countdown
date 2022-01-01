
const start = new Date("2021-10-23").getTime();
const official_start = new Date("2021-12-01").getTime();
const ramdan = new Date("2022-04-02").getTime();
const _1_9 = new Date("2022-09-01").getTime();
const end = new Date("2022-12-01").getTime();
const now = new Date().getTime();
const days_factor = (1000 * 3600 * 24);
const tdreb_in_days = Math.floor((official_start - start) / days_factor);
const elapsed_in_days = Math.floor((now - official_start) / days_factor);

const common_config = {
    label: 'Remaining Days',
    backgroundColor: [
        'rgba(255, 205, 86, 0.9)',
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)'
    ],
    borderColor: [
        'rgba(255, 205, 86, 0.9)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
    ],
    borderWidth: 1
};
const charts = ['ramdan_chart', '1_9_chart', 'end_chart'];
const data = [
    [tdreb_in_days, elapsed_in_days, Math.floor((ramdan - now) / days_factor)],
    [tdreb_in_days, elapsed_in_days, Math.floor((_1_9 - now) / days_factor)],
    [tdreb_in_days, elapsed_in_days, Math.floor((end - now) / days_factor)]
]
charts.forEach((chart, index) => {
    const ctx = document.getElementById(chart).getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                data: data[index],
                ...common_config
            }]
        }
    });
})
