import React from "react";
import ContentSection from "../components/ContentSection/ContentSection";
import SignupSection from "../components/SignupSection/SignupSection";

function HomePage() {
  return (
    <div className="flex   h-screen  ">
      <ContentSection />
      <SignupSection />
    </div>
  );
}

export default HomePage;