// An example asynchronous function that simulates fetching data from an API
async function fetchData() {
    try {
      // Simulating fetching data from an API after a delay of 2 seconds
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: 'Some data fetched from API' });
        }, 2000);
      });
      
      // Once data is fetched, perform actions with the data
      console.log('Data fetched:', response.data);
      
      // Return the fetched data or perform other operations
      return response.data;
    } catch (error) {
      // Handle errors if any occur during fetching data
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it elsewhere
    }
  }


  // Calling the asynchronous function
fetchData()
.then((data) => {
  console.log('Received data in then():', data);
  // Perform further operations with the received data
})
.catch((error) => {
  console.error('Error in then():', error);
  // Handle errors if any occurred during fetchData()
});

// Or using async/await
async function handleData() {
try {
  const data = await fetchData();
  console.log('Received data with await:', data);
  // Perform further operations with the received data
} catch (error) {
  console.error('Error with await:', error);
  // Handle errors if any occurred during fetchData()
}
}

handleData();