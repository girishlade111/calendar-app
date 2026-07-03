"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Settings,
  Menu,
  Clock,
  MapPin,
  Users,
  Calendar,
  Pause,
  Sparkles,
  X,
  Bell,
  Globe,
  Palette,
  Clock3,
  Eye,
  EyeOff,
  Monitor,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Check,
  User,
  Mail,
  Phone,
  Shield,
  Key,
  LogOut,
  Camera,
  Edit3,
  Save,
  CreditCard,
  HelpCircle,
  MessageSquare,
} from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showAIPopup, setShowAIPopup] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(-1)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchResultsRef = useRef<HTMLDivElement>(null)

  // Profile state
  const [showProfile, setShowProfile] = useState(false)
  const [profileTab, setProfileTab] = useState("account" as "account" | "security" | "preferences" | "billing")
  const [profile, setProfile] = useState({
    firstName: "Girish",
    lastName: "Lade",
    email: "girishlade111@gmail.com",
    phone: "+91 98765 43210",
    avatar: "",
    bio: "Software Developer & Tech Enthusiast",
    location: "Mumbai, India",
    company: "Lovy-tech",
    jobTitle: "Full Stack Developer",
    website: "https://girishlade.com",
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    security: {
      twoFactor: false,
      lastPasswordChange: "2025-01-15",
      loginSessions: 3,
    },
  })
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [editedProfile, setEditedProfile] = useState(profile)
  const profileRef = useRef<HTMLDivElement>(null)

  // Settings state
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState({
    timeFormat: "12h" as "12h" | "24h",
    startOfWeek: "sunday" as "sunday" | "monday",
    showWeekends: true,
    showEndTimes: true,
    eventDensity: "comfortable" as "compact" | "comfortable" | "spacious",
    aiAssistant: true,
    soundEnabled: true,
    notifications: true,
    workingHoursStart: 8,
    workingHoursEnd: 17,
    timezone: "America/New_York",
    theme: "dark" as "light" | "dark" | "system",
    showDeclinedEvents: false,
    defaultView: "week" as "day" | "week" | "month",
  })
  const [settingsTab, setSettingsTab] = useState("general" as "general" | "appearance" | "calendar" | "notifications")
  const settingsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Show AI popup after 3 seconds
    const popupTimer = setTimeout(() => {
      setShowAIPopup(true)
    }, 3000)

    return () => clearTimeout(popupTimer)
  }, [])

  useEffect(() => {
    if (showAIPopup) {
      const text =
        "LLooks like you don't have that many meetings today. Shall I play some Hans Zimmer essentials to help you get into your Flow State?"
      let i = 0
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setTypedText((prev) => prev + text.charAt(i))
          i++
        } else {
          clearInterval(typingInterval)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    }
  }, [showAIPopup])

  const [currentView, setCurrentView] = useState("week")
  const [currentMonth, setCurrentMonth] = useState("March 2025")
  const [currentDate, setCurrentDate] = useState("March 5")
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Add Event Modal State
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    location: "",
    startTime: "09:00",
    endTime: "10:00",
    day: 1,
    color: "bg-blue-500",
    attendees: "",
    organizer: "You",
  })
  const addEventRef = useRef<HTMLDivElement>(null)

  const eventColors = [
    { name: "Blue", value: "bg-blue-500" },
    { name: "Green", value: "bg-green-500" },
    { name: "Purple", value: "bg-purple-500" },
    { name: "Yellow", value: "bg-yellow-500" },
    { name: "Indigo", value: "bg-indigo-500" },
    { name: "Pink", value: "bg-pink-500" },
    { name: "Teal", value: "bg-teal-500" },
    { name: "Cyan", value: "bg-cyan-500" },
    { name: "Red", value: "bg-red-400" },
    { name: "Orange", value: "bg-orange-400" },
  ]

  // Updated sample calendar events with all events before 4 PM
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Team Meeting",
      startTime: "09:00",
      endTime: "10:00",
      color: "bg-blue-500",
      day: 1,
      description: "Weekly team sync-up",
      location: "Conference Room A",
      attendees: ["John Doe", "Jane Smith", "Bob Johnson"],
      organizer: "Alice Brown",
    },
    {
      id: 2,
      title: "Lunch with Sarah",
      startTime: "12:30",
      endTime: "13:30",
      color: "bg-green-500",
      day: 1,
      description: "Discuss project timeline",
      location: "Cafe Nero",
      attendees: ["Sarah Lee"],
      organizer: "You",
    },
    {
      id: 3,
      title: "Project Review",
      startTime: "14:00",
      endTime: "15:30",
      color: "bg-purple-500",
      day: 3,
      description: "Q2 project progress review",
      location: "Meeting Room 3",
      attendees: ["Team Alpha", "Stakeholders"],
      organizer: "Project Manager",
    },
    {
      id: 4,
      title: "Client Call",
      startTime: "10:00",
      endTime: "11:00",
      color: "bg-yellow-500",
      day: 2,
      description: "Quarterly review with major client",
      location: "Zoom Meeting",
      attendees: ["Client Team", "Sales Team"],
      organizer: "Account Manager",
    },
    {
      id: 5,
      title: "Team Brainstorm",
      startTime: "13:00",
      endTime: "14:30",
      color: "bg-indigo-500",
      day: 4,
      description: "Ideation session for new product features",
      location: "Creative Space",
      attendees: ["Product Team", "Design Team"],
      organizer: "Product Owner",
    },
    {
      id: 6,
      title: "Product Demo",
      startTime: "11:00",
      endTime: "12:00",
      color: "bg-pink-500",
      day: 5,
      description: "Showcase new features to stakeholders",
      location: "Demo Room",
      attendees: ["Stakeholders", "Dev Team"],
      organizer: "Tech Lead",
    },
    {
      id: 7,
      title: "Marketing Meeting",
      startTime: "13:00",
      endTime: "14:00",
      color: "bg-teal-500",
      day: 6,
      description: "Discuss Q3 marketing strategy",
      location: "Marketing Office",
      attendees: ["Marketing Team"],
      organizer: "Marketing Director",
    },
    {
      id: 8,
      title: "Code Review",
      startTime: "15:00",
      endTime: "16:00",
      color: "bg-cyan-500",
      day: 7,
      description: "Review pull requests for new feature",
      location: "Dev Area",
      attendees: ["Dev Team"],
      organizer: "Senior Developer",
    },
    {
      id: 9,
      title: "Morning Standup",
      startTime: "08:30",
      endTime: "09:30",
      color: "bg-blue-400",
      day: 2,
      description: "Daily team standup",
      location: "Slack Huddle",
      attendees: ["Development Team"],
      organizer: "Scrum Master",
    },
    {
      id: 10,
      title: "Design Review",
      startTime: "14:30",
      endTime: "15:45",
      color: "bg-purple-400",
      day: 5,
      description: "Review new UI designs",
      location: "Design Lab",
      attendees: ["UX Team", "Product Manager"],
      organizer: "Lead Designer",
    },
    {
      id: 11,
      title: "Investor Meeting",
      startTime: "10:30",
      endTime: "12:00",
      color: "bg-red-400",
      day: 7,
      description: "Quarterly investor update",
      location: "Board Room",
      attendees: ["Executive Team", "Investors"],
      organizer: "CEO",
    },
    {
      id: 12,
      title: "Team Training",
      startTime: "09:30",
      endTime: "11:30",
      color: "bg-green-400",
      day: 4,
      description: "New tool onboarding session",
      location: "Training Room",
      attendees: ["All Departments"],
      organizer: "HR",
    },
    {
      id: 13,
      title: "Budget Review",
      startTime: "13:30",
      endTime: "15:00",
      color: "bg-yellow-400",
      day: 3,
      description: "Quarterly budget analysis",
      location: "Finance Office",
      attendees: ["Finance Team", "Department Heads"],
      organizer: "CFO",
    },
    {
      id: 14,
      title: "Client Presentation",
      startTime: "11:00",
      endTime: "12:30",
      color: "bg-orange-400",
      day: 6,
      description: "Present new project proposal",
      location: "Client Office",
      attendees: ["Sales Team", "Client Representatives"],
      organizer: "Account Executive",
    },
    {
      id: 15,
      title: "Product Planning",
      startTime: "14:00",
      endTime: "15:30",
      color: "bg-pink-400",
      day: 1,
      description: "Roadmap discussion for Q3",
      location: "Strategy Room",
      attendees: ["Product Team", "Engineering Leads"],
      organizer: "Product Manager",
    },
  ])

  const handleEventClick = (event) => {
    setSelectedEvent(event)
  }

  const handleAddEvent = () => {
    if (!newEvent.title.trim()) return
    const event = {
      ...newEvent,
      id: events.length + 1,
      attendees: newEvent.attendees ? newEvent.attendees.split(",").map((a) => a.trim()) : [],
    }
    setEvents([...events, event])
    setNewEvent({
      title: "",
      description: "",
      location: "",
      startTime: "09:00",
      endTime: "10:00",
      day: 1,
      color: "bg-blue-500",
      attendees: "",
      organizer: "You",
    })
    setShowAddEvent(false)
  }

  const resetNewEvent = () => {
    setNewEvent({
      title: "",
      description: "",
      location: "",
      startTime: "09:00",
      endTime: "10:00",
      day: 1,
      color: "bg-blue-500",
      attendees: "",
      organizer: "You",
    })
  }
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const weekDates = [3, 4, 5, 6, 7, 8, 9]
  const timeSlots = Array.from({ length: 9 }, (_, i) => i + 8) // 8 AM to 4 PM

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query) ||
        event.attendees.some((a) => a.toLowerCase().includes(query))
    )
  }, [searchQuery, events])

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(e.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target as Node)
      ) {
        setShowSearchResults(false)
      }
      if (
        settingsRef.current &&
        !settingsRef.current.contains(e.target as Node) &&
        !(e.target as Element)?.closest('[data-settings-btn]')
      ) {
        setShowSettings(false)
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node) &&
        !(e.target as Element)?.closest('[data-profile-btn]')
      ) {
        setShowProfile(false)
        setIsEditingProfile(false)
      }
      if (
        addEventRef.current &&
        !addEventRef.current.contains(e.target as Node) &&
        !(e.target as Element)?.closest('[data-add-event-btn]')
      ) {
        setShowAddEvent(false)
        resetNewEvent()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const updateSettings = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const timezones = [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Asia/Tokyo",
    "Asia/Shanghai",
    "Asia/Kolkata",
    "Australia/Sydney",
    "Pacific/Auckland",
  ]

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowSearchResults(false)
      searchInputRef.current?.blur()
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedSearchIndex((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : 0
      )
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedSearchIndex((prev) =>
        prev > 0 ? prev - 1 : searchResults.length - 1
      )
    } else if (e.key === "Enter" && selectedSearchIndex >= 0) {
      e.preventDefault()
      handleEventClick(searchResults[selectedSearchIndex])
      setShowSearchResults(false)
      setSearchQuery("")
    }
  }

  const handleSearchSelect = (event: (typeof events)[0]) => {
    handleEventClick(event)
    setShowSearchResults(false)
    setSearchQuery("")
  }

  // Helper function to calculate event position and height
  const calculateEventStyle = (startTime, endTime) => {
    const start = Number.parseInt(startTime.split(":")[0]) + Number.parseInt(startTime.split(":")[1]) / 60
    const end = Number.parseInt(endTime.split(":")[0]) + Number.parseInt(endTime.split(":")[1]) / 60
    const top = (start - 8) * 80 // 80px per hour
    const height = (end - start) * 80
    return { top: `${top}px`, height: `${height}px` }
  }

  // Sample calendar for mini calendar
  const daysInMonth = 31
  const firstDayOffset = 5 // Friday is the first day of the month in this example
  const miniCalendarDays = Array.from({ length: daysInMonth + firstDayOffset }, (_, i) =>
    i < firstDayOffset ? null : i - firstDayOffset + 1,
  )

  // Sample my calendars
  const myCalendars = [
    { name: "My Calendar", color: "bg-blue-500" },
    { name: "Work", color: "bg-green-500" },
    { name: "Personal", color: "bg-purple-500" },
    { name: "Family", color: "bg-orange-500" },
  ]

  const togglePlay = () => {
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <h1>Test</h1>
    </div>
  )
}