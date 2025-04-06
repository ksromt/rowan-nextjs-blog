import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'

export const metadata: Metadata = genPageMetadata({ title: 'Custom Page' })

export default function Page() {
    return (
        <div className="min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8">Custom Page</h1>
                <div className="prose dark:prose-dark">
                    {/* 您的页面内容 */}
                </div>
            </div>
        </div>
    )
} 