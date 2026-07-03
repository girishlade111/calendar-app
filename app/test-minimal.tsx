"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"

export default function Home() {
  const [settings, setSettings] = useState({
    timeFormat: "12h" as "12h" | "24h",
    dateFormat: "MM/DD/YYYY" as "MM/DD/YYYY" | "DD/MM/YYYY" | "YYYY-MM-DD",
    startWeekOn: "Sunday" as "Sunday" | "Monday",
    language: "en" as "en" | "es" | "fr" | "de",
    autoDetectLocation: true,
    showHolidays: true,
    defaultView: "month" as "month" | "week" | "day",
  })

  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}