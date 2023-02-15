const rewardsData = [
  { customer: 'Alice', date: '2022-02-01', amount: 120 },
  { customer: 'Bob', date: '2022-03-02', amount: 80 },
  { customer: 'Charlie', date: '2022-04-01', amount: 150 },
  { customer: 'Alice', date: '2022-03-02', amount: 50 },
  { customer: 'Bob', date: '2022-04-01', amount: 75 },
  { customer: 'Charlie', date: '2022-02-02', amount: 200 }
];

function simulateApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rewardsData);
    }, 1000); // Simulate a delay of 1 second
  });
}
export default simulateApiCall;