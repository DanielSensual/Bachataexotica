'use client'

import { motion } from 'framer-motion'
import { Users, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-2xl mx-auto px-6"
            >
                <div className="mb-8 flex justify-center">
                    <div className="p-4 rounded-full border border-gold-base/30">
                        <Users size={48} className="text-gold-base" />
                    </div>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl mb-6">
                    <span className="text-gold-gradient">The Community</span>
                </h1>

                <p className="text-white/60 text-lg mb-8">
                    More than a dance—a movement. Connect with passionate dancers
                    who share your dedication to the art. An exclusive community
                    of elegance, expression, and connection.
                </p>

                <div className="flex items-center justify-center gap-2 text-gold-light/80 text-sm">
                    <Sparkles size={16} />
                    <span>Coming Soon</span>
                </div>

                <Link
                    href="/#waitlist"
                    className="inline-block mt-8 btn-gold-outline"
                >
                    Get Notified
                </Link>
            </motion.div>
        </section>
    )
}
