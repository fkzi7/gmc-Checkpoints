async function iterateWithAsyncAwait(array) {
    for (const value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

async function awaitCall() {
    // Simulate an API call with a delay
    const response = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "API response data" });
        }, 2000); // Simulate a 2-second delay for the API call
    });

    console.log(response.data); // Log the data from the API response
}

// Example usage:
awaitCall();


async function awaitCall() {
    try {
        // Simulate an API call with a delay
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5; // Simulate random success/failure
                if (success) {
                    resolve({ data: "API response data" });
                } else {
                    reject(new Error("Failed to fetch data from the API"));
                }
            }, 2000); // Simulate a 2-second delay for the API call
        });

        console.log(response.data); // Log the data from the API response
    } catch (error) {
        console.error("An error occurred:", error.message); // Log a user-friendly error message
    }
}

// Example usage:
awaitCall();