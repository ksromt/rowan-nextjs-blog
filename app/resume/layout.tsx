export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="mx-auto max-w-4xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            {children}
        </section>
    )
} 