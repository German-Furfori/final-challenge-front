const baseUrl = `http://localhost:8080/api/bcra`;

export async function getInflationInfo() {
    let response = await fetch(`${baseUrl}/getInflationInfo`, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    });

    return await response.json();
}