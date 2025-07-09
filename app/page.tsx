import Typewriter from "@/components/Typewriter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Well Soon ❤️</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Satisfy&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Top Title */}
        <div className="absolute top-10 w-full flex justify-center z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-red-500 message-animate font-dancing">
            Get Well Soon <span className="inline-block animate-heart">❤️</span>
          </h1>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center gap-6 z-10">
          {/* Typewriter Message */}
          <Typewriter text="Just wanted to send you good health and roses. Hope you feel better soon." />

          {/* Roses just below the message */}
        </div>
        <div className="relative w-full max-w-md h-[100px] pointer-events-none overflow-visible">
          {Array.from({ length: 50 }).map((_, i) => {
            const delay = i * 0.05;
            const scale = 0.6 + Math.random() * 0.6;
            const leftOffset = Math.random() * 100;
            const swayDuration = 2 + Math.random() * 3;
            const swayDelay = Math.random() * 2;

            return (
              <div
                key={i}
                style={{
                  animation: `growIn 1s ease-out ${delay}s forwards`,
                  opacity: 0,
                  transform: `scale(${scale})`,
                  left: `${leftOffset}%`,
                }}
                className="absolute bottom-0"
              >
                <img
                  src="/rose.svg"
                  alt="Rose"
                  style={{
                    width: `${scale * 40}px`,
                    height: "auto",
                    animation: `sway ${swayDuration}s ease-in-out ${swayDelay}s infinite`,
                    transformOrigin: "bottom center",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Falling Petals */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => {
            const left = Math.random() * 100;
            const duration = 6 + Math.random() * 6;
            const delay = Math.random() * 4;

            return (
              <div
                key={i}
                className="absolute top-[-10%] animate-petal-fall"
                style={{
                  left: `${left}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  opacity: 0.7,
                }}
              >
                <img
                  src="/rose-petal.svg"
                  className="w-5 sm:w-6 opacity-80"
                  alt="petal"
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
