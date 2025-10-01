export interface Article{
    id: string | number,
    title: string,
    img: {
        url: string,
        blurDataURL: string,
        alt: string,
    },
    description: string,
    href: string,
}