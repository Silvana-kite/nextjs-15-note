import {notFound} from 'next/navigation'
export default async function ReviewDetail({
    params
}:{
    params: Promise<{productId: stirng, reviewId:string}>
}) {
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;
    if (parseInt(reviewId) > 1000) {
        notFound()
    }
    return <>
        <h1>review {reviewId}</h1>
        <h1>productId {productId}</h1>
    </>
}