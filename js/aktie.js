async function getStockData() {
    try {
        const response = await fetch("/api/api.php");
        const data = await response.json();
        
        if (data.success) {
            console.log("Daten von der API:", data.data);
            // Hier später das DOM anpassen (mit Liniendiagramm für Aktienverlauf)
        } else {
            console.error("API-Fehler:", data.error);
        }
    } catch (error) {
        console.error("Fehler:", error);
    }
}
getStockData();