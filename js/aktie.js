async function getUsers() {
    try {
        const response = await fetch("/api/api.php");

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error("Fehler:", error);
    }
}

getUsers();