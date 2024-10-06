// 圖表數據
const ctx = document.getElementById('personalityChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['內向', '幽默', '冷靜', '自律', '柔軟'],
        datasets: [
            {
                label: '小林由依',
                data: [5, 4, 3, 5, 4],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: '渡邉理佐',
                data: [4, 5, 4, 3, 5],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// 搜索與過濾功能
function filterData() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#data-table tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let match = false;
        
        cells.forEach(cell => {
            if (cell.innerText.toLowerCase().includes(searchValue)) {
                match = true;
            }
        });

        if (match) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
