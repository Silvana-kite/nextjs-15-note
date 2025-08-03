export default async function Docs({
    params,
}:{
    params: Promise<{slug: string}>
}) {
    const {slug} = await params;
    if(slug?.length === 2) {
        return <h1>1111 view Docs for {slug[0]} and 1111 {slug[1]}</h1>
    } else if (slug?.length === 1) {
        return <h1>2222 view Docs {slug[0]}</h1>
    }
    return <h1>333333</h1>
}