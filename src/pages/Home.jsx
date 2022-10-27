import React from "react";
// import WelcomeBanner from "../components/WelcomeBanner";
import TabBar from "../components/TabBar";
import Post from "../components/Post";
function Home() {
  return (
    <div className="px-5 py-5">
      {/* <WelcomeBanner /> */}
      <TabBar />
      <Post />
    </div>
  );
}

export default Home;
