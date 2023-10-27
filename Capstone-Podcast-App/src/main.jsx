import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import ErrorPage from "./error-page";
import Show from "./routes/ShowPage";
import HomePage from "./routes/HomePage";
import FavouritesPage from "./routes/FavouritesPage";
import SeasonPage from "./routes/SeasonPage";

const supabase = createClient(
  "https://usoblofyaksrhhooaimp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzb2Jsb2Z5YWtzcmhob29haW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNTEwMTQsImV4cCI6MjAxMzkyNzAxNH0.CzIIgW87jhhC7acvrblPdM3BeSihXUBJK-Cm_H3cdg4"
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage supabase={supabase} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "show/:showId",
    element: <Show />,
  },
  {
    path: "show/:showId/season/:seasonId",
    element: <SeasonPage />,
  },
  {
    path: "favourites/",
    element: <FavouritesPage />,
  },
]);

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);
  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google", "facebook", "twitter"]}
      />
    );
  } else {
    return <RouterProvider router={router} />;
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
