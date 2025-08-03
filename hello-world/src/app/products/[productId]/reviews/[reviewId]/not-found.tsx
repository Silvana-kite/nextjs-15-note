"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div>
            <h1>局部-详情没有找到</h1>
            <h1>局部-物品找到了</h1>
        </div>
    )
}