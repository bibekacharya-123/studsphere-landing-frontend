import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "StudSphere Resources",
    description: "Access your study materials, courses, and dashboard",
};

export default function ResourcesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}