import React from "react";
import ContentSection from "../components/ContentSection/ContentSection";
import SignupSection from "../components/SignupSection/SignupSection";

function HomePage() {
  return (
    <div className="flex  ">
      <ContentSection />
      <SignupSection />
    </div>
  );
}

export default HomePage;
