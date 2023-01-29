export const server =
  process.env.NODE_ENV === "production"
    ? "https://trees-analysis-nextjs-chartjs-ca.netlify.app"
    : "http://localhost:3000";
