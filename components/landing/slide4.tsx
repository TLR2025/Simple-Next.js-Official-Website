import { cn } from "@/lib/utils";
// import { Article } from "@/types/article";
import ArticleCard from "./article-card";
import Slide4BG from "../grid-bg";
import { get3Articles } from "@/actions/get-3-articles";

export default async function Slide4(){
    const articles = await get3Articles();
    return (
        <div className={cn(
            "w-full h-full m-0 p-0",
            "relative"
        )}>
            <Slide4BG />

            <div className={cn(
                "w-full h-auto md:h-screen",
                "flex flex-col md:flex-row",
                "md:px-8 md:space-x-6"
            )}>
                {articles.map((value, index)=>{return (
                    <ArticleCard article={value} className="w-full h-auto" key={index} />
                )})}
            </div>
        </div>

    );
}