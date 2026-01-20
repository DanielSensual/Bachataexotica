'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // TODO: Integrate with email service
      setIsSubmitted(true)
      setEmail('')
    }
  }

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gold radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Decorative lines */}
        <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-gold-base/20 to-transparent" />
        <div className="absolute bottom-20 right-10 w-px h-32 bg-gradient-to-b from-transparent via-gold-base/20 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-headline badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-base/30 text-xs uppercase tracking-[0.2em] text-gold-light/80">
            <Sparkles size={14} className="text-gold-base" />
            Coming Soon
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight mb-8"
        >
          <span className="text-gold-gradient glow-gold">
            The Evolution
          </span>
          <br />
          <span className="text-white">of Bachata.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Experience the elegance of connection. Exclusive events and
          masterclasses arriving soon to redefine your dance journey.
        </motion.p>

        {/* Email Signup Form */}
        <motion.div variants={itemVariants} id="waitlist">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
            >
              <div className="relative flex-1 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="input-elegant w-full text-center sm:text-left"
                />
              </div>
              <button
                type="submit"
                className="btn-gold-filled flex items-center gap-2 group whitespace-nowrap"
              >
                Notify Me
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-gold-light"
            >
              <Sparkles size={20} />
              <span className="text-lg">You're on the list. We'll be in touch.</span>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicator */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-xs text-white/30 tracking-wider uppercase"
        >
          Join 500+ dancers already on the waitlist
        </motion.p>
      </motion.div>

      {/* Decorative animated elements */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-base/30 to-transparent"
      />
    </section>
  )
}