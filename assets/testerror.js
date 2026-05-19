// 1. Unused variable (Ghost Code)
const unusedDataFetchingUrl = "https://api.example.com/v1/data";

// 2. Unhandled Promise Rejection (Error)
async function fetchUserData() {
    const response = await fetch('https://api.github.com/users/octocat');
    const data = await response.json();
    // Missing try/catch block!
    return data;
}

// 3. Orphaned Function (Ghost Code)
function calculateUselessMetrics(a, b) {
    let result = a + b * 2;
    return result;
}

fetchUserData();
