    // data from https://www.businessofapps.com/data/coinbase-statistics/
export const coinbaseData = [
    {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
        datasets: [
            {
                label: 'Users (in millions)',
                data: [1, 2, 5, 13, 22, 30, 35, 56, 89],
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
                text: 'Coinbase Users'
            }
        }
    }

  ];