"use server";

import { Article } from "@/types/article";
import { getPayload } from "payload";
import config from "@payload-config";

export async function get3Articles():Promise<Article[]> {
    const payload = await getPayload({config});
    const data = (await payload.find({
        collection: "posts",
        where: {
            published: {equals: true},
        },
        sort: "-createdAt",
        limit: 3,
        depth: 5,
    })).docs;
    console.log(data[0].metadata.images[0]);
    if(data && data.length==3) {
        return data.map((v):Article=>{
            return {
                id: v.id,
                title: v.title,
                img: v.metadata.images[0].image,
                description: v.metadata.description,
                href: "/blog/" + v.slug,
            };
        });
    }
    return [
        {
            id: "1",
            title: "Donec interdum neque",
            img: {
                url: "/steak1.jpg",
                blurDataURL: "",
                alt: "fallback1",
            },
            description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis in.",
            href: "/",
        },{
            id: "2",
            title: "Donec in felis",
            img: {
                url: "/restaurant1.jpg",
                blurDataURL: "",
                alt: "fallback2",
            },
            description: "Phasellus auctor eu turpis id feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada.",
            href: "/",
        },{
            id: "3",
            title: "Nulla eu tincidunt",
            img: {
                url: "/steak2.jpg",
                blurDataURL: "",
                alt: "fallback3",
            },
            description: "Phasellus eget ullamcorper sapien. Praesent tempus auctor pharetra. Duis sed finibus felis, a vulputate turpis.",
            href: "/",
        },
    ];
}