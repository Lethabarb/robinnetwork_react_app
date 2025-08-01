import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 gap-16">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">

      <div className="flex flex-col justify-center items-center w-full py-4">
          <h2 className="text-slate-700 text-5xl mb-5">ABOUT ME</h2>
          <div className="grid grid-cols-[1fr_2fr] h-[35rem] w-full justify-start py-4 bg-slate-700 text-slate-100 p-20">
            <div className="h-full w-full relative">
              <Image
                src="/portrait.jpg"
                objectFit="contain"
                alt="portrait"
                fill
              />
            </div>
            <div>
              Meow
            </div>
          </div>
      </div>

        <div className="flex h-[35rem] w-full justify-start py-4">
          <h1>PROJECTS</h1>
        </div>
      </main>
    </div>
  );
}
