import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainPage({ supabase }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [whatIsPlaying, setWhatIsPlaying] = React.useState({
    title: "",
    description: "",
    episode: 0,
    file: "",
  });

  return (
    <>
      <Header supabase={supabase} />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
