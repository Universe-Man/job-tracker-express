// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("LOOK HEREE!!!", process.env.DATABASE_URL)
  return (
    <div className="home-page-container font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Job Tracker Express</h1>
      <h2>Welcome to Job Tracker Express</h2>
      <h3>Login or Create an Account to Start Easily Saving Your Jobs</h3>
      <span><Link href="/login"><button >Login</button></Link><button>Create Account</button></span>
    </div>
  );
}
