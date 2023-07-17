"use client";
import { useEffect, useState } from "react";

const useIsLoggedIn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    setTimeout(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return "loading";
  }

  return isLoggedIn;
};

export default useIsLoggedIn;
