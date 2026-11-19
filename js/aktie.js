google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(loadAndDraw);

async function loadAndDraw() {
    try {
        const response = await fetch("/api/api.php");
        const data = await response.json();
        
        if (data.success) {
            drawChart(data.data);
        } else {
            console.error("API-Fehler:", data.error);
        }
    } catch (error) {
        console.error("Fehler:", error);
    }
}

function drawChart(dataFromApi) {
   const data = new google.visualization.DataTable();
	data.addColumn('date', 'Datum');
	data.addColumn('number', 'Preis');
	data.addRows(dataFromApi.map(item => [new Date(item.datum), item.kurs != null ? Number(item.kurs) : null
]));
    
    
    const options = {
        title: 'Aktienkursverlauf für Credit Suisse',
        hAxis: { title: 'Datum' },
        vAxis: { title: 'Preis' },
        legend: 'none'
    };
    
    const chart = new google.visualization.LineChart(document.getElementById('stockChart'));
    chart.draw(data, options);
}