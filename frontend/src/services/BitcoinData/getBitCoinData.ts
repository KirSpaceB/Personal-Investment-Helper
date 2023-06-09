export async function getBitcoinData() {
  const response = await fetch('http://127.0.0.1:5000/bitcoin_historical_data', {
    method:"GET",
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'http://localhost:5000',
      'Accept':'application/json',
    },
  });
  const apiData = await response.json();
  console.log(apiData); 
}