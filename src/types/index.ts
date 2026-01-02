export interface Projects {
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    image: string,
    category: "Mobile" | "Web",

}

export interface Blogs{
    title: string,
    excerpt: string,
    date: string,
    readTime: string,
    slug: string
}
