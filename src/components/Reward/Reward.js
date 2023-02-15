import React, { useState, useEffect } from "react";

import simulateApiCall from "../../services/rewardService";

const Reward = () => {
  const calculateRewards = (transactions) => {
    const rewardsPerCustomer = {};
    transactions.forEach((transaction) => {
      const { customer, amount, date } = transaction;
      const points =
        amount > 100 ? (amount - 100) * 2 : amount > 50 ? amount - 50 : 0;
      const month = new Date(date).getMonth() + 1;
      rewardsPerCustomer[customer] = {
        ...rewardsPerCustomer[customer],
        total: (rewardsPerCustomer[customer]?.total || 0) + points,
        [month]: (rewardsPerCustomer[customer]?.[month] || 0) + points,
      };
    });
    setRewards(rewardsPerCustomer);
  };
  const [rewards, setRewards] = useState({});
  useEffect(() => {
    simulateApiCall().then((data) => {
      calculateRewards(data);
    });
  }, []);
  return (
    <>
      {Object.keys(rewards).map((customer) => (
        <div key={customer}>
          <h2>Customer {customer}</h2>
          {Object.keys(rewards[customer]).map((key) => (
            <div key={key}>
              {key === "total" ? "Total" : `Month ${key}`}
              {": "}
              {rewards[customer][key]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default Reward;