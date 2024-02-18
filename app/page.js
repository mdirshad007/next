"use client";
import LatestNews from "@/components/LatestNews/LatestNews";
import Mycounter from "@/components/Mycounter/Mycounter";

 // This is a client component
export default function Home() {
    return (
    <>
    <div className="main pt-[70px]">
    <LatestNews/>
    {/* <Mycounter/> */}
    </div>
    </>
  );
}
