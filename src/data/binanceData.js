// Data Source https://www.businessofapps.com/data/binance-statistics/
export const binanceData = [
    {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
            {
                label: 'Users (in millions)',
                data: [1.5, 13.3, 16.5, 21.5, 28.6],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: 'rgba(53, 162, 235, 0.4',
            },
        ],
    },
    {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: 'Binance Users'
            }
        }
    }
  ];