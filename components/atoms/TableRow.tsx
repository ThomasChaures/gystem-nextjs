'use client';

import { ReactNode } from "react";

export default function TableRow({
    children, 
    onClick,
    className = "",
}: {
    children: ReactNode,
    onClick?: () => void;
    className?: string;
}) {
    return (
        <tr 
        onClick={onClick}
        className={` bg-white w-full py-10 transition ${className} ${onClick ? "cursor-pointer" : ""} `}>
            {children}
        </tr>
    )
}