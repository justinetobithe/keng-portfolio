"use client"

import * as React from "react"
import { motion, type Variants } from "motion/react"

type Direction = "up" | "down" | "left" | "right" | "none"

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance }
    case "down":
      return { y: -distance }
    case "left":
      return { x: distance }
    case "right":
      return { x: -distance }
    default:
      return {}
  }
}

const ease = [0.22, 1, 0.36, 1] as const

type AppRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  distance?: number
  scale?: boolean
}

export function AppReveal({
  children,
  className,
  delay = 0,
  duration = 0.9,
  direction = "up",
  distance = 32,
  scale = false,
}: AppRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(6px)", scale: scale ? 0.96 : 1, ...offset(direction, distance) }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

const staggerContainer: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  }),
}

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
}

export function AppStagger({
  children,
  className,
  stagger = 0.12,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  )
}

export function AppStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}
