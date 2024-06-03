export type GithubUser ={
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following:number,
    cheated_at:string

}
export type LocalGithubUser ={
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    public: number,
    followers: number,
    following:number,
    cheated:string

}

export type GithubError ={
    message: string,
    documentation_url: string
}

