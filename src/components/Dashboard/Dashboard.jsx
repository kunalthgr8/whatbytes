import React from "react";
import Welcome from "../../assets/welcome.svg";

const Dashboard = () => {
  const userName = "Kunal Singla"; // You can also fetch this from the store or API

  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-center p-10 rounded-lg">
        <img src={Welcome} alt="Welcome" className="w-64 mx-auto" />
        <h1 className="text-3xl font-bold m-4">Welcome to the Dashboard!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
