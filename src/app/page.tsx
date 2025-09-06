// src/app/page.tsx
import connectDB from "../lib/dbconnect";

export default async function Home() {
  await connectDB();

  return (
    <main style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <h1>Welcome to PDF Project</h1>
    </main>
  );
}
