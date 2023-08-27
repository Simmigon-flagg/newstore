import React, { useEffect } from 'react'

export const RedirectPage = () => {
  useEffect(() => {
    // Define your correct cancel URL here
    const cancelUrl = "/cancel"; // Adjust this as needed
    window.location.href = cancelUrl;
  }, []);

  return <div>Redirecting...</div>;
};
