// src/components/dashboard/Dashboard.tsx
"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import UserPreferences from "./UserPreferences";
import FoodCategories from "./FoodCategories";
import AutomationSection from "./AutomationSection";
import NewChatButton from "./NewChatButton";

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState("Josephine");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-10">
      <Header userName={userName} />
      <UserPreferences />
      <FoodCategories />
      <AutomationSection />
      <NewChatButton />
    </div>
  );
};

export default Dashboard;
