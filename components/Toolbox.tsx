import { cn } from "@/lib/utils";

const jace = "text-2xl lg:text-6xl md:text-3xl sm:text-2xl font-bold text-red-800 dark:text-red-500";

export const Toolbox = ({ unfont }: { unfont: string }) => {
    return (
        <div className=" h-[40rem] text-center text-xl lg:text-3xl md:text-2xl sm:text-xl items-center flex flex-col gap-y-3 justify-center relative py-[5rem]">
            <div className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 absolute inset-0 z-[-50]" />
            <h1 className="">A <span className={cn(jace,unfont)}>JACK</span> of all [a lot]</h1>
            <h1 className="">Aspiring to <span className={cn(jace,unfont)}>MASTER</span> some </h1>
            <div className="flex flex-col grow">
                <div className="flex h-full w-full"></div>
                <div className="flex grow h-full w-full"></div>
            </div>
        </div>
    );
}