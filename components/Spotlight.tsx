import { Aging } from "./ui/aging";
import { StatusText } from "./ui/statustext";

export const Spotlight = () => {
    return (
        <div className="text-center text-xl lg:text-3xl md:text-2xl sm:text-xl items-center h-[40rem] flex flex-col gap-y-3 justify-center">
            <Aging />
            <h1>
                Currently: {"{ "}<StatusText />{" }"}
            </h1>
        </div>
    );
}