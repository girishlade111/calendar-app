"use client"

import { useState, useEffect, useRef, useMemo } from "react"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="test">
      <h1>Hello</h1>
    </div>
  )
}