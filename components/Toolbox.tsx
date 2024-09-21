import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = (
    {
        posArg,
        cardType
    }: {
        posArg: string,
        cardType: string
    }) => {

    
    const cardStyle = "absolute z-[-2] w-[100%] h-[100%] bg-[size:100%_29px] bg-[linear-gradient(var(--red-800),var(--red-800)1px,var(--red-950)1px,var(--red-950)28px)] animate-cardAnim overflow-hidden rounded-lg opacity-[0.5]";

    return (
        <div className={cn("absolute w-[18%] aspect-[10/16] border-red-500 border rounded rounded-lg text-red-400 flex flex-col",posArg)}>
            <div className={cn("",cardStyle)}/>

            <div className="basis-1/2 flex justify-start items-start p-4 gap-x-4">
                {cardType}
                <FontAwesomeIcon icon={cardType=="J"?faDiamond:faHeart}></FontAwesomeIcon>
            </div>
            
            <div className="basis-1/2 flex justify-start items-start p-4 rotate-180 gap-x-4">
                {cardType}
                <FontAwesomeIcon icon={cardType=="J"?faDiamond:faHeart}></FontAwesomeIcon>
            </div>

        </div>
    );
}

export const Toolbox = ({ unfont }: { unfont: string }) => {
    const jace = "text-2xl lg:text-6xl md:text-3xl sm:text-2xl font-bold text-red-800 dark:text-red-500";
    const jacef = cn(jace, unfont);

    return (
        <div className=" h-[40rem] text-center text-xl lg:text-3xl md:text-2xl sm:text-xl items-center flex flex-col justify-center relative p-5">
            
            <div className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 absolute inset-0 z-[-50]" />
            
            
            <div className="flex grow-0 w-full h-[15rem] flex-col sm:flex-col md:flex-col lg:flex-row">

                <div className="flex justify-center items-center lg:justify-end justify-center items-end lg:items-start h-full w-full basis-1/2">
                    <h1 className="">A <span className={jacef}>JACK</span> of all <span className="dark:text-purple-700">[a lot]</span></h1>
                </div>

                <div className="flex justify-center items-center lg:justify-start justify-center items-start lg:items-center h-full w-full basis-1/2">
                    <h1 className="">Aspiring to <span className={jacef}>MASTER</span> some </h1>
                </div>
            </div>
            
            <div className="flex grow-1 h-full w-full lg:flex-row md:flex-row sm:flex-col flex-col">
                
                <div className={cn("basis-2/5 h-full justify-center hidden dark:flex items-center",unfont)}>
                    <Card posArg="-translate-x-10 sm:-translate-x-10 md:-translate-x-24 lg:-translate-x-24 translate-y-10 rotate-[-9deg]" cardType="J" />
                    <Card posArg="translate-x-10 sm:translate-x-10 md:translate-x-16 lg:translate-x-16 -translate-y-6 rotate-[195deg]" cardType="A" />
                </div>
                
                
                <div className="flex basis-3/5 grow h-full justify-center dark:justify-start text-xl pt-5">
                    <h1>Highly versatile skillset with experience in a wide variety of technologies </h1>
                </div>
            </div>
        </div>
    );
}