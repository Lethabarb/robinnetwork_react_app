import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 gap-16">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
      <Section textColor={"text-slate-50"} bgColor={"bg-slate-700"}>
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
      </Section>

        <div className="flex h-[35rem] w-full justify-start py-4">
          <h1>PROJECTS</h1>
        </div>
      </main>
    </div>
  );
}
