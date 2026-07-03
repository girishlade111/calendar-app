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
  Repeat,
  CalendarDays,
  BellRing,
  Clock10,
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
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Date-derived values
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const currentMonth = `${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`
  const currentDate = `${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}`

  // Get the start of the week (Sunday) for the selected date
  const getWeekStart = (date: Date) => {
    const d = new Date(date)
    d.setDate(d.getDate() - d.getDay())
    d.setHours(0, 0, 0, 0)
    return d
  }

  const currentWeekStart = getWeekStart(selectedDate)

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(currentWeekStart)
    d.setDate(d.getDate() + i)
    return d.getDate()
  })

  const weekDatesFull = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(currentWeekStart)
    d.setDate(d.getDate() + i)
    return d
  })

  // Mini calendar
  const miniCalendarYear = selectedDate.getFullYear()
  const miniCalendarMonth = selectedDate.getMonth()
  const daysInMonth = new Date(miniCalendarYear, miniCalendarMonth + 1, 0).getDate()
  const firstDayOffset = new Date(miniCalendarYear, miniCalendarMonth, 1).getDay()
  const miniCalendarDays = Array.from({ length: daysInMonth + firstDayOffset }, (_, i) =>
    i < firstDayOffset ? null : i - firstDayOffset + 1,
  )

  const navigateWeek = (direction: number) => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + direction * 7)
    setSelectedDate(newDate)
  }

  const navigateMonth = (direction: number) => {
    const newDate = new Date(selectedDate)
    newDate.setMonth(newDate.getMonth() + direction)
    setSelectedDate(newDate)
  }

  const goToToday = () => {
    setSelectedDate(new Date())
  }

  const selectMiniCalendarDay = (day: number) => {
    if (day === null) return
    const newDate = new Date(selectedDate)
    newDate.setFullYear(miniCalendarYear, miniCalendarMonth, day)
    setSelectedDate(newDate)
  }

  // Add Event Modal State
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    location: "",
    startTime: "09:00",
    endTime: "10:00",
    date: new Date().toISOString().split("T")[0],
    color: "bg-blue-500",
    attendees: "",
    organizer: "You",
    isAllDay: false,
    repeat: "none",
    reminder: "10",
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

  const timeOptions = Array.from({ length: 48 }, (_, i) => {
    const h = Math.floor(i / 2)
    const m = (i % 2) * 30
    const ampm = h < 12 ? "AM" : "PM"
    const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h
    return {
      value: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
      label: `${displayH}:${String(m).padStart(2, "0")} ${ampm}`,
    }
  })

  const repeatOptions = [
    { value: "none", label: "Does not repeat" },
    { value: "daily", label: "Every day" },
    { value: "weekly", label: "Every week" },
    { value: "biweekly", label: "Every 2 weeks" },
    { value: "monthly", label: "Every month" },
    { value: "yearly", label: "Every year" },
  ]

  const reminderOptions = [
    { value: "0", label: "No reminder" },
    { value: "5", label: "5 minutes before" },
    { value: "10", label: "10 minutes before" },
    { value: "15", label: "15 minutes before" },
    { value: "30", label: "30 minutes before" },
    { value: "60", label: "1 hour before" },
    { value: "1440", label: "1 day before" },
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
      day: new Date(newEvent.date).getDay() + 1,
    }
    setEvents([...events, event])
    resetNewEvent()
    setShowAddEvent(false)
  }

  const resetNewEvent = () => {
    setNewEvent({
      title: "",
      description: "",
      location: "",
      startTime: "09:00",
      endTime: "10:00",
      date: new Date().toISOString().split("T")[0],
      color: "bg-blue-500",
      attendees: "",
      organizer: "You",
      isAllDay: false,
      repeat: "none",
      reminder: "10",
    })
  }
  const weekDayLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const weekDays = weekDayLabels // keep for backward compat
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

  // Sample my calendars
  const myCalendars = [
    { name: "My Calendar", color: "bg-blue-500" },
    { name: "Work", color: "bg-green-500" },
    { name: "Personal", color: "bg-purple-500" },
    { name: "Family", color: "bg-orange-500" },
  ]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Here you would typically also control the actual audio playback
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
        alt="Beautiful mountain landscape"
        fill
        className="object-cover"
        priority
      />

      {/* Navigation */}
      <header
        className={`absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-6 opacity-0 ${isLoaded ? "animate-fade-in" : ""}`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6 text-white" />
          <span className="text-2xl font-semibold text-white drop-shadow-lg">Calendar</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowSearchResults(true)
                setSelectedSearchIndex(-1)
              }}
              onFocus={() => {
                if (searchQuery.trim()) setShowSearchResults(true)
              }}
              onKeyDown={handleSearchKeyDown}
              className="rounded-full bg-white/10 backdrop-blur-sm pl-10 pr-10 py-2 text-white placeholder:text-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 w-64"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("")
                  setShowSearchResults(false)
                  searchInputRef.current?.focus()
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Search Results Dropdown */}
            {showSearchResults && searchQuery.trim() && (
              <div
                ref={searchResultsRef}
                className="absolute top-full mt-2 left-0 w-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
              >
                {searchResults.length > 0 ? (
                  <div className="max-h-80 overflow-y-auto">
                    <div className="px-4 py-2 border-b border-white/10">
                      <span className="text-white/60 text-xs font-medium">
                        {searchResults.length} event{searchResults.length !== 1 ? "s" : ""} found
                      </span>
                    </div>
                    {searchResults.map((event, index) => (
                      <button
                        key={event.id}
                        onClick={() => handleSearchSelect(event)}
                        onMouseEnter={() => setSelectedSearchIndex(index)}
                        className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                          index === selectedSearchIndex
                            ? "bg-white/20"
                            : "hover:bg-white/10"
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${event.color}`} />
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium text-sm truncate">
                            {event.title}
                          </div>
                          <div className="text-white/60 text-xs truncate">
                            {weekDays[event.day - 1]}, {weekDates[event.day - 1]} {currentMonth} · {event.startTime} - {event.endTime}
                          </div>
                        </div>
                        <MapPin className="h-3 w-3 text-white/40 flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <Search className="h-8 w-8 text-white/30 mx-auto mb-2" />
                    <p className="text-white/60 text-sm">No events found for "{searchQuery}"</p>
                    <p className="text-white/40 text-xs mt-1">Try searching by title, location, or attendee</p>
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            data-settings-btn
            onClick={() => setShowSettings(!showSettings)}
            className={`p-2 rounded-full transition-colors ${showSettings ? "bg-white/20" : "hover:bg-white/10"}`}
          >
            <Settings className="h-6 w-6 text-white drop-shadow-md" />
          </button>
          <button
            data-profile-btn
            onClick={() => setShowProfile(!showProfile)}
            className={`relative h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg transition-all hover:scale-105 ${showProfile ? "ring-2 ring-white/50" : ""}`}
          >
            {profile.firstName[0]}{profile.lastName[0]}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-black/20" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative h-screen w-full pt-20 flex">
        {/* Sidebar */}
        <div
          className={`w-64 h-full bg-white/10 backdrop-blur-lg p-4 shadow-xl border-r border-white/20 rounded-tr-3xl opacity-0 ${isLoaded ? "animate-fade-in" : ""} flex flex-col justify-between`}
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            <button
              data-add-event-btn
              onClick={() => setShowAddEvent(!showAddEvent)}
              className="mb-6 flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-3 text-white w-full hover:bg-blue-600 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Create</span>
            </button>

            {/* Mini Calendar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium">{currentMonth}</h3>
                <div className="flex gap-1">
                  <button onClick={() => navigateMonth(-1)} className="p-1 rounded-full hover:bg-white/20">
                    <ChevronLeft className="h-4 w-4 text-white" />
                  </button>
                  <button onClick={() => navigateMonth(1)} className="p-1 rounded-full hover:bg-white/20">
                    <ChevronRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                  <div key={i} className="text-xs text-white/70 font-medium py-1">
                    {day}
                  </div>
                ))}

                {miniCalendarDays.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => selectMiniCalendarDay(day)}
                    disabled={day === null}
                    className={`text-xs rounded-full w-7 h-7 flex items-center justify-center ${
                      day === selectedDate.getDate() && selectedDate.getMonth() === miniCalendarMonth && selectedDate.getFullYear() === miniCalendarYear
                        ? "bg-blue-500 text-white"
                        : "text-white hover:bg-white/20"
                    } ${!day ? "invisible" : ""}`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* My Calendars */}
            <div>
              <h3 className="text-white font-medium mb-3">My calendars</h3>
              <div className="space-y-2">
                {myCalendars.map((cal, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-sm ${cal.color}`}></div>
                    <span className="text-white text-sm">{cal.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New position for the big plus button */}
          <button
            data-add-event-btn
            onClick={() => setShowAddEvent(!showAddEvent)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-blue-500 p-4 text-white w-14 h-14 self-start hover:bg-blue-600 transition-colors hover:scale-105"
          >
            <Plus className="h-6 w-6" />
          </button>
        </div>

        {/* Calendar View */}
        <div
          className={`flex-1 flex flex-col opacity-0 ${isLoaded ? "animate-fade-in" : ""}`}
          style={{ animationDelay: "0.6s" }}
        >
          {/* Calendar Controls */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-4">
              <button onClick={goToToday} className="px-4 py-2 text-white bg-blue-500 rounded-md">Today</button>
              <div className="flex">
                <button onClick={() => navigateWeek(-1)} className="p-2 text-white hover:bg-white/10 rounded-l-md">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => navigateWeek(1)} className="p-2 text-white hover:bg-white/10 rounded-r-md">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <h2 className="text-xl font-semibold text-white">{currentDate}</h2>
            </div>

            <div className="flex items-center gap-2 rounded-md p-1">
              <button
                onClick={() => setCurrentView("day")}
                className={`px-3 py-1 rounded ${currentView === "day" ? "bg-white/20" : ""} text-white text-sm`}
              >
                Day
              </button>
              <button
                onClick={() => setCurrentView("week")}
                className={`px-3 py-1 rounded ${currentView === "week" ? "bg-white/20" : ""} text-white text-sm`}
              >
                Week
              </button>
              <button
                onClick={() => setCurrentView("month")}
                className={`px-3 py-1 rounded ${currentView === "month" ? "bg-white/20" : ""} text-white text-sm`}
              >
                Month
              </button>
            </div>
          </div>

          {/* Calendar Content - Day/Week/Month Views */}
          {currentView === "week" && (
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl h-full">
              {/* Week Header */}
              <div className="grid grid-cols-8 border-b border-white/20">
                <div className="p-2 text-center text-white/50 text-xs"></div>
                {weekDays.map((day, i) => (
                  <div key={i} className="p-2 text-center border-l border-white/20">
                    <div className="text-xs text-white/70 font-medium">{day}</div>
                    <div
                      className={`text-lg font-medium mt-1 text-white ${
                        weekDatesFull[i].getDate() === selectedDate.getDate() &&
                        weekDatesFull[i].getMonth() === selectedDate.getMonth() &&
                        weekDatesFull[i].getFullYear() === selectedDate.getFullYear()
                          ? "bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto"
                          : ""
                      }`}
                    >
                      {weekDates[i]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Time Grid */}
              <div className="grid grid-cols-8">
                {/* Time Labels */}
                <div className="text-white/70">
                  {timeSlots.map((time, i) => (
                    <div key={i} className="h-20 border-b border-white/10 pr-2 text-right text-xs">
                      {time > 12 ? `${time - 12} PM` : `${time} AM`}
                    </div>
                  ))}
                </div>

                {/* Days Columns */}
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="border-l border-white/20 relative">
                    {timeSlots.map((_, timeIndex) => (
                      <div key={timeIndex} className="h-20 border-b border-white/10"></div>
                    ))}

                    {/* Events */}
                    {events
                      .filter((event) => event.day === dayIndex + 1)
                      .map((event, i) => {
                        const eventStyle = calculateEventStyle(event.startTime, event.endTime)
                        return (
                          <div
                            key={i}
                            className={`absolute ${event.color} rounded-md p-2 text-white text-xs shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-lg`}
                            style={{
                              ...eventStyle,
                              left: "4px",
                              right: "4px",
                            }}
                            onClick={() => handleEventClick(event)}
                          >
                            <div className="font-medium">{event.title}</div>
                            <div className="opacity-80 text-[10px] mt-1">{`${event.startTime} - ${event.endTime}`}</div>
                          </div>
                        )
                      })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          )}

          {/* Day View */}
          {currentView === "day" && (
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl h-full">
              <div className="p-4 border-b border-white/20">
                <div className="text-center">
                  <div className="text-sm text-white/70 font-medium">{weekDays[selectedDate.getDay()]}</div>
                  <div className={`text-3xl font-bold text-white mt-1 ${
                    "bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto"
                  }`}>{selectedDate.getDate()}</div>
                </div>
              </div>

              {/* Day Time Grid */}
              <div className="grid grid-cols-[80px_1fr]">
                <div className="text-white/70">
                  {timeSlots.map((time, i) => (
                    <div key={i} className="h-20 border-b border-white/10 pr-2 text-right text-xs">
                      {time > 12 ? `${time - 12} PM` : `${time} AM`}
                    </div>
                  ))}
                </div>
                <div className="border-l border-white/20 relative">
                  {timeSlots.map((_, timeIndex) => (
                    <div key={timeIndex} className="h-20 border-b border-white/10"></div>
                  ))}
                  {events.map((event, i) => {
                    const eventStyle = calculateEventStyle(event.startTime, event.endTime)
                    return (
                      <div
                        key={i}
                        className={`absolute ${event.color} rounded-md p-3 text-white text-sm shadow-md cursor-pointer transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg`}
                        style={{ ...eventStyle, left: "8px", right: "8px" }}
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="font-medium">{event.title}</div>
                        <div className="opacity-80 text-xs mt-1">{`${event.startTime} - ${event.endTime}`}</div>
                        {event.location && <div className="opacity-70 text-xs mt-1 flex items-center gap-1"><MapPin className="h-3 w-3" />{event.location}</div>}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Month View */}
          {currentView === "month" && (
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-white/20 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl h-full">
              {/* Month Header - Day Names */}
              <div className="grid grid-cols-7 border-b border-white/20">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 text-center text-xs text-white/70 font-medium border-r border-white/20 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>

              {/* Month Grid */}
              <div className="grid grid-cols-7">
                {miniCalendarDays.map((day, i) => {
                  const isToday = day === selectedDate.getDate() &&
                    selectedDate.getMonth() === miniCalendarMonth &&
                    selectedDate.getFullYear() === miniCalendarYear
                  const dayEvents = day ? events.filter((e) => e.day === day) : []
                  return (
                    <div
                      key={i}
                      className={`min-h-[80px] p-1 border-r border-b border-white/20 last:border-r-0 ${
                        !day ? "bg-white/5" : "bg-white/10 hover:bg-white/15 cursor-pointer"
                      }`}
                      onClick={() => { if (day) selectMiniCalendarDay(day) }}
                    >
                      {day && (
                        <>
                          <div className={`text-sm font-medium mb-1 ${
                            isToday
                              ? "bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center"
                              : "text-white"
                          }`}>
                            {day}
                          </div>
                          {dayEvents.slice(0, 3).map((event, j) => (
                            <div
                              key={j}
                              className={`${event.color} rounded px-1.5 py-0.5 text-[10px] text-white mb-0.5 truncate cursor-pointer`}
                              onClick={(e) => { e.stopPropagation(); handleEventClick(event) }}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 3 && (
                            <div className="text-[10px] text-white/60 pl-1">+{dayEvents.length - 3} more</div>
                          )}
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          )}
        </div>

        {/* AI Popup */}
        {showAIPopup && (
          <div className="fixed bottom-8 right-8 z-20">
            <div className="w-[450px] relative bg-gradient-to-br from-blue-400/30 via-blue-500/30 to-blue-600/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-blue-300/30 text-white">
              <button
                onClick={() => setShowAIPopup(false)}
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-blue-300" />
                </div>
                <div className="min-h-[80px]">
                  <p className="text-base font-light">{typedText}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={togglePlay}
                  className="flex-1 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm transition-colors font-medium"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowAIPopup(false)}
                  className="flex-1 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm transition-colors font-medium"
                >
                  No
                </button>
              </div>
              {isPlaying && (
                <div className="mt-4 flex items-center justify-between">
                  <button
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-white text-sm hover:bg-white/20 transition-colors"
                    onClick={togglePlay}
                  >
                    <Pause className="h-4 w-4" />
                    <span>Pause Hans Zimmer</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Add Event Modal */}
        {showAddEvent && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div
              ref={addEventRef}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 sticky top-0 bg-white/5 backdrop-blur-xl z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <CalendarDays className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">Create New Event</h2>
                    <p className="text-xs text-white/50">Fill in the details below</p>
                  </div>
                </div>
                <button
                  onClick={() => { setShowAddEvent(false); resetNewEvent() }}
                  className="p-2 rounded-xl hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Title */}
                <div>
                  <label className="text-white/70 text-sm mb-2 block font-medium">Event Title <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="e.g. Team standup, Client meeting"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Date & All Day Toggle */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-400" />
                      Date
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-xs text-white/50">All day</span>
                      <button
                        type="button"
                        onClick={() => setNewEvent({ ...newEvent, isAllDay: !newEvent.isAllDay })}
                        className={`relative w-10 h-5 rounded-full transition-colors ${newEvent.isAllDay ? "bg-blue-500" : "bg-white/20"}`}
                      >
                        <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${newEvent.isAllDay ? "translate-x-5" : ""}`} />
                      </button>
                    </label>
                  </div>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent [color-scheme:dark] transition-all"
                  />
                </div>

                {/* Time Range */}
                {!newEvent.isAllDay && (
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-4">
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-400" />
                      Time
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/50 text-xs mb-1.5 block">Start</label>
                        <select
                          value={newEvent.startTime}
                          onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition-all"
                        >
                          {timeOptions.map((t) => (
                            <option key={t.value} value={t.value} className="bg-gray-800 text-white">
                              {t.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-white/50 text-xs mb-1.5 block">End</label>
                        <select
                          value={newEvent.endTime}
                          onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition-all"
                        >
                          {timeOptions.map((t) => (
                            <option key={t.value} value={t.value} className="bg-gray-800 text-white">
                              {t.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Location */}
                <div>
                  <label className="text-white/70 text-sm mb-2 block font-medium flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    Location
                  </label>
                  <input
                    type="text"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    placeholder="Add location"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="text-white/70 text-sm mb-2 block font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-400" />
                    Description
                  </label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Add a description or agenda"
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  />
                </div>

                {/* Repeat & Reminder Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-sm mb-2 block font-medium flex items-center gap-2">
                      <Repeat className="h-4 w-4 text-blue-400" />
                      Repeat
                    </label>
                    <select
                      value={newEvent.repeat}
                      onChange={(e) => setNewEvent({ ...newEvent, repeat: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition-all"
                    >
                      {repeatOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-gray-800 text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block font-medium flex items-center gap-2">
                      <BellRing className="h-4 w-4 text-blue-400" />
                      Reminder
                    </label>
                    <select
                      value={newEvent.reminder}
                      onChange={(e) => setNewEvent({ ...newEvent, reminder: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition-all"
                    >
                      {reminderOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-gray-800 text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Color */}
                <div>
                  <label className="text-white/70 text-sm mb-3 block font-medium flex items-center gap-2">
                    <Palette className="h-4 w-4 text-blue-400" />
                    Color
                  </label>
                  <div className="flex gap-2.5 flex-wrap">
                    {eventColors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setNewEvent({ ...newEvent, color: color.value })}
                        className={`w-9 h-9 rounded-full ${color.value} transition-all ${
                          newEvent.color === color.value ? "ring-2 ring-white ring-offset-2 ring-offset-transparent scale-110 shadow-lg" : "hover:scale-110 opacity-70 hover:opacity-100"
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Organizer & Attendees */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-sm mb-2 block font-medium flex items-center gap-2">
                      <User className="h-4 w-4 text-blue-400" />
                      Organizer
                    </label>
                    <input
                      type="text"
                      value={newEvent.organizer}
                      onChange={(e) => setNewEvent({ ...newEvent, organizer: e.target.value })}
                      placeholder="Organizer name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block font-medium flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      Attendees
                    </label>
                    <input
                      type="text"
                      value={newEvent.attendees}
                      onChange={(e) => setNewEvent({ ...newEvent, attendees: e.target.value })}
                      placeholder="Comma-separated names"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between sticky bottom-0 bg-white/5 backdrop-blur-xl">
                <button
                  onClick={() => { setShowAddEvent(false); resetNewEvent() }}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddEvent}
                  disabled={!newEvent.title.trim()}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                    newEvent.title.trim()
                      ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                  Create Event
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`${selectedEvent.color} p-6 rounded-lg shadow-xl max-w-md w-full mx-4`}>
              <h3 className="text-2xl font-bold mb-4 text-white">{selectedEvent.title}</h3>
              <div className="space-y-3 text-white">
                <p className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  {`${selectedEvent.startTime} - ${selectedEvent.endTime}`}
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  {selectedEvent.location}
                </p>
                <p className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  {`${weekDays[selectedEvent.day - 1]}, ${weekDates[selectedEvent.day - 1]} ${currentMonth}`}
                </p>
                <p className="flex items-start">
                  <Users className="mr-2 h-5 w-5 mt-1" />
                  <span>
                    <strong>Attendees:</strong>
                    <br />
                    {selectedEvent.attendees.join(", ") || "No attendees"}
                  </span>
                </p>
                <p>
                  <strong>Organizer:</strong> {selectedEvent.organizer}
                </p>
                <p>
                  <strong>Description:</strong> {selectedEvent.description}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Button - Removed */}

        {/* Profile Panel */}
        {showProfile && (
          <div
            ref={profileRef}
            className="fixed top-20 right-8 w-[400px] max-h-[85vh] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Profile Header */}
            <div className="relative px-6 pt-8 pb-6 border-b border-white/10">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              
              <div className="relative flex flex-col items-center">
                {/* Avatar */}
                <div className="relative group">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </div>
                  <button className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white" />
                  </button>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white/20" />
                </div>
                
                {/* Name & Email */}
                <h3 className="text-white text-xl font-bold mt-4">{profile.firstName} {profile.lastName}</h3>
                <p className="text-white/60 text-sm mt-1">{profile.email}</p>
                <p className="text-white/40 text-xs mt-1">{profile.jobTitle} at {profile.company}</p>
                
                {/* Quick Stats */}
                <div className="flex gap-6 mt-4">
                  <div className="text-center">
                    <p className="text-white text-lg font-bold">156</p>
                    <p className="text-white/50 text-xs">Events</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-lg font-bold">42</p>
                    <p className="text-white/50 text-xs">Meetings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-lg font-bold">8</p>
                    <p className="text-white/50 text-xs">Groups</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Tabs */}
            <div className="flex border-b border-white/10 px-4">
              {[
                { id: "account", label: "Account", icon: User },
                { id: "security", label: "Security", icon: Shield },
                { id: "preferences", label: "Preferences", icon: Palette },
                { id: "billing", label: "Billing", icon: CreditCard },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProfileTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-3 text-xs font-medium transition-colors border-b-2 ${
                    profileTab === tab.id
                      ? "border-blue-400 text-white"
                      : "border-transparent text-white/50 hover:text-white/70"
                  }`}
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Profile Content */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              {/* Account Tab */}
              {profileTab === "account" && (
                <div className="space-y-5">
                  {isEditingProfile ? (
                    <>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-white/70 text-xs mb-1.5 block">First Name</label>
                          <input
                            type="text"
                            value={editedProfile.firstName}
                            onChange={(e) => setEditedProfile({ ...editedProfile, firstName: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-white/70 text-xs mb-1.5 block">Last Name</label>
                          <input
                            type="text"
                            value={editedProfile.lastName}
                            onChange={(e) => setEditedProfile({ ...editedProfile, lastName: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/70 text-xs mb-1.5 block">Email</label>
                        <input
                          type="email"
                          value={editedProfile.email}
                          onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-xs mb-1.5 block">Phone</label>
                        <input
                          type="tel"
                          value={editedProfile.phone}
                          onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-xs mb-1.5 block">Bio</label>
                        <textarea
                          value={editedProfile.bio}
                          onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                          rows={2}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-xs mb-1.5 block">Location</label>
                        <input
                          type="text"
                          value={editedProfile.location}
                          onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-white/70 text-xs mb-1.5 block">Company</label>
                          <input
                            type="text"
                            value={editedProfile.company}
                            onChange={(e) => setEditedProfile({ ...editedProfile, company: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-white/70 text-xs mb-1.5 block">Job Title</label>
                          <input
                            type="text"
                            value={editedProfile.jobTitle}
                            onChange={(e) => setEditedProfile({ ...editedProfile, jobTitle: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/70 text-xs mb-1.5 block">Website</label>
                        <input
                          type="url"
                          value={editedProfile.website}
                          onChange={(e) => setEditedProfile({ ...editedProfile, website: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => {
                            setProfile(editedProfile)
                            setIsEditingProfile(false)
                          }}
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          <Save className="h-4 w-4" />
                          Save Changes
                        </button>
                        <button
                          onClick={() => {
                            setEditedProfile(profile)
                            setIsEditingProfile(false)
                          }}
                          className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <h4 className="text-white font-medium">Personal Information</h4>
                        <button
                          onClick={() => setIsEditingProfile(true)}
                          className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                        >
                          <Edit3 className="h-4 w-4" />
                          Edit
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <User className="h-5 w-5 text-white/50" />
                          <div>
                            <p className="text-white/50 text-xs">Full Name</p>
                            <p className="text-white text-sm">{profile.firstName} {profile.lastName}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <Mail className="h-5 w-5 text-white/50" />
                          <div>
                            <p className="text-white/50 text-xs">Email</p>
                            <p className="text-white text-sm">{profile.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <Phone className="h-5 w-5 text-white/50" />
                          <div>
                            <p className="text-white/50 text-xs">Phone</p>
                            <p className="text-white text-sm">{profile.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <Globe className="h-5 w-5 text-white/50" />
                          <div>
                            <p className="text-white/50 text-xs">Location</p>
                            <p className="text-white text-sm">{profile.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <CreditCard className="h-5 w-5 text-white/50" />
                          <div>
                            <p className="text-white/50 text-xs">Company</p>
                            <p className="text-white text-sm">{profile.company} - {profile.jobTitle}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Security Tab */}
              {profileTab === "security" && (
                <div className="space-y-5">
                  <h4 className="text-white font-medium">Security Settings</h4>
                  
                  {/* Password */}
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Key className="h-5 w-5 text-white/50" />
                        <div>
                          <p className="text-white text-sm font-medium">Password</p>
                          <p className="text-white/50 text-xs">Last changed: {profile.security.lastPasswordChange}</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-medium transition-colors">
                        Change
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-white/50" />
                        <div>
                          <p className="text-white text-sm font-medium">Two-Factor Auth</p>
                          <p className="text-white/50 text-xs">{profile.security.twoFactor ? "Enabled" : "Disabled"}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setProfile({ ...profile, security: { ...profile.security, twoFactor: !profile.security.twoFactor } })}
                        className={`w-12 h-6 rounded-full transition-colors relative ${profile.security.twoFactor ? "bg-green-500" : "bg-white/20"}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${profile.security.twoFactor ? "translate-x-6" : "translate-x-0.5"}`} />
                      </button>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Monitor className="h-5 w-5 text-white/50" />
                        <div>
                          <p className="text-white text-sm font-medium">Active Sessions</p>
                          <p className="text-white/50 text-xs">{profile.security.loginSessions} devices logged in</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-xs font-medium transition-colors">
                        Sign Out All
                      </button>
                    </div>
                  </div>

                  {/* Login History */}
                  <div>
                    <h5 className="text-white/70 text-sm font-medium mb-3">Recent Activity</h5>
                    <div className="space-y-2">
                      {[
                        { device: "MacBook Pro", location: "Mumbai, India", time: "2 hours ago", current: true },
                        { device: "iPhone 15", location: "Mumbai, India", time: "1 day ago", current: false },
                        { device: "Chrome on Windows", location: "Mumbai, India", time: "3 days ago", current: false },
                      ].map((session, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Monitor className="h-4 w-4 text-white/40" />
                            <div>
                              <p className="text-white text-xs">{session.device}</p>
                              <p className="text-white/40 text-xs">{session.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white/50 text-xs">{session.time}</p>
                            {session.current && (
                              <span className="text-green-400 text-xs">Current</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences Tab */}
              {profileTab === "preferences" && (
                <div className="space-y-5">
                  <h4 className="text-white font-medium">Notification Preferences</h4>
                  
                  {[
                    { key: "email", label: "Email Notifications", desc: "Receive updates via email", icon: Mail },
                    { key: "push", label: "Push Notifications", desc: "Browser push notifications", icon: Bell },
                    { key: "sms", label: "SMS Notifications", desc: "Text message alerts", icon: Phone },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-white/50" />
                        <div>
                          <p className="text-white text-sm">{item.label}</p>
                          <p className="text-white/50 text-xs">{item.desc}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setProfile({
                          ...profile,
                          notifications: { ...profile.notifications, [item.key]: !profile.notifications[item.key as keyof typeof profile.notifications] }
                        })}
                        className={`w-12 h-6 rounded-full transition-colors relative ${profile.notifications[item.key as keyof typeof profile.notifications] ? "bg-blue-500" : "bg-white/20"}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${profile.notifications[item.key as keyof typeof profile.notifications] ? "translate-x-6" : "translate-x-0.5"}`} />
                      </button>
                    </div>
                  ))}

                  <h4 className="text-white font-medium pt-2">Calendar Preferences</h4>
                  
                  <div className="space-y-2">
                    <button className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <Palette className="h-5 w-5 text-white/50" />
                        <span className="text-white text-sm">Calendar Colors</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/30" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-white/50" />
                        <span className="text-white text-sm">Default Reminder Time</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/30" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-white/50" />
                        <span className="text-white text-sm">Import/Export Calendar</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-white/30" />
                    </button>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {profileTab === "billing" && (
                <div className="space-y-5">
                  {/* Current Plan */}
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">Pro Plan</p>
                        <p className="text-white/60 text-sm mt-1">Unlimited events & storage</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">Active</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Next billing date</span>
                        <span className="text-white">Feb 15, 2026</span>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-white/60">Amount</span>
                        <span className="text-white">$9.99/month</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-white/50" />
                        <div>
                          <p className="text-white text-sm font-medium">Payment Method</p>
                          <p className="text-white/50 text-xs">Visa ending in 4242</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-medium transition-colors">
                        Update
                      </button>
                    </div>
                  </div>

                  {/* Billing History */}
                  <div>
                    <h5 className="text-white/70 text-sm font-medium mb-3">Billing History</h5>
                    <div className="space-y-2">
                      {[
                        { date: "Jan 15, 2026", amount: "$9.99", status: "Paid" },
                        { date: "Dec 15, 2025", amount: "$9.99", status: "Paid" },
                        { date: "Nov 15, 2025", amount: "$9.99", status: "Paid" },
                      ].map((invoice, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <p className="text-white text-sm">{invoice.date}</p>
                            <p className="text-white/50 text-xs">Monthly subscription</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white text-sm">{invoice.amount}</p>
                            <p className="text-green-400 text-xs">{invoice.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Footer */}
            <div className="px-6 py-4 border-t border-white/10">
              <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm font-medium transition-colors">
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        )}

        {/* Settings Panel */}
        {showSettings && (
          <div
            ref={settingsRef}
            className="fixed top-20 right-8 w-[420px] max-h-[80vh] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Settings Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Settings</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Settings Tabs */}
            <div className="flex border-b border-white/10 px-4">
              {[
                { id: "general", label: "General", icon: Globe },
                { id: "appearance", label: "Appearance", icon: Palette },
                { id: "calendar", label: "Calendar", icon: Calendar },
                { id: "notifications", label: "Alerts", icon: Bell },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSettingsTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-3 text-xs font-medium transition-colors border-b-2 ${
                    settingsTab === tab.id
                      ? "border-blue-400 text-white"
                      : "border-transparent text-white/50 hover:text-white/70"
                  }`}
                >
                  <tab.icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Settings Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {/* General Tab */}
              {settingsTab === "general" && (
                <div className="space-y-6">
                  {/* Time Format */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block">Time Format</label>
                    <div className="flex gap-2">
                      {["12h", "24h"].map((format) => (
                        <button
                          key={format}
                          onClick={() => updateSettings("timeFormat", format)}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            settings.timeFormat === format
                              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                              : "bg-white/5 text-white/60 hover:bg-white/10"
                          }`}
                        >
                          {format === "12h" ? "12 Hour" : "24 Hour"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Start of Week */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block">Start of Week</label>
                    <div className="flex gap-2">
                      {["sunday", "monday"].map((day) => (
                        <button
                          key={day}
                          onClick={() => updateSettings("startOfWeek", day)}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
                            settings.startOfWeek === day
                              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                              : "bg-white/5 text-white/60 hover:bg-white/10"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Default View */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block">Default View</label>
                    <div className="flex gap-2">
                      {["day", "week", "month"].map((view) => (
                        <button
                          key={view}
                          onClick={() => updateSettings("defaultView", view)}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
                            settings.defaultView === view
                              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                              : "bg-white/5 text-white/60 hover:bg-white/10"
                          }`}
                        >
                          {view}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timezone */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Timezone
                    </label>
                    <select
                      value={settings.timezone}
                      onChange={(e) => updateSettings("timezone", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                    >
                      {timezones.map((tz) => (
                        <option key={tz} value={tz} className="bg-gray-800 text-white">
                          {tz.replace(/_/g, " ")}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Working Hours */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block flex items-center gap-2">
                      <Clock3 className="h-4 w-4" />
                      Working Hours
                    </label>
                    <div className="flex items-center gap-3">
                      <select
                        value={settings.workingHoursStart}
                        onChange={(e) => updateSettings("workingHoursStart", Number(e.target.value))}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                      >
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i} className="bg-gray-800 text-white">
                            {i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`}
                          </option>
                        ))}
                      </select>
                      <span className="text-white/50 text-sm">to</span>
                      <select
                        value={settings.workingHoursEnd}
                        onChange={(e) => updateSettings("workingHoursEnd", Number(e.target.value))}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                      >
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={i} className="bg-gray-800 text-white">
                            {i === 0 ? "12 AM" : i < 12 ? `${i} AM` : i === 12 ? "12 PM" : `${i - 12} PM`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance Tab */}
              {settingsTab === "appearance" && (
                <div className="space-y-6">
                  {/* Theme */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block">Theme</label>
                    <div className="flex gap-2">
                      {[
                        { id: "light", label: "Light", icon: Sun },
                        { id: "dark", label: "Dark", icon: Moon },
                        { id: "system", label: "System", icon: Monitor },
                      ].map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => updateSettings("theme", theme.id)}
                          className={`flex-1 flex flex-col items-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                            settings.theme === theme.id
                              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                              : "bg-white/5 text-white/60 hover:bg-white/10"
                          }`}
                        >
                          <theme.icon className="h-5 w-5" />
                          {theme.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Event Density */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block">Event Density</label>
                    <div className="flex gap-2">
                      {["compact", "comfortable", "spacious"].map((density) => (
                        <button
                          key={density}
                          onClick={() => updateSettings("eventDensity", density)}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
                            settings.eventDensity === density
                              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                              : "bg-white/5 text-white/60 hover:bg-white/10"
                          }`}
                        >
                          {density}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Show End Times */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">Show End Times</p>
                      <p className="text-white/50 text-xs mt-0.5">Display end time on events</p>
                    </div>
                    <button
                      onClick={() => updateSettings("showEndTimes", !settings.showEndTimes)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        settings.showEndTimes ? "bg-blue-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          settings.showEndTimes ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Show Weekends */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">Show Weekends</p>
                      <p className="text-white/50 text-xs mt-0.5">Include Sat & Sun in week view</p>
                    </div>
                    <button
                      onClick={() => updateSettings("showWeekends", !settings.showWeekends)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        settings.showWeekends ? "bg-blue-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          settings.showWeekends ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Show Declined Events */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">Show Declined Events</p>
                      <p className="text-white/50 text-xs mt-0.5">Display events you declined</p>
                    </div>
                    <button
                      onClick={() => updateSettings("showDeclinedEvents", !settings.showDeclinedEvents)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        settings.showDeclinedEvents ? "bg-blue-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          settings.showDeclinedEvents ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              {/* Calendar Tab */}
              {settingsTab === "calendar" && (
                <div className="space-y-6">
                  {/* AI Assistant */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Sparkles className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">AI Assistant</p>
                        <p className="text-white/50 text-xs mt-0.5">Smart suggestions & tips</p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateSettings("aiAssistant", !settings.aiAssistant)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        settings.aiAssistant ? "bg-blue-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          settings.aiAssistant ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Sound Effects */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        {settings.soundEnabled ? (
                          <Volume2 className="h-5 w-5 text-green-400" />
                        ) : (
                          <VolumeX className="h-5 w-5 text-white/40" />
                        )}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Sound Effects</p>
                        <p className="text-white/50 text-xs mt-0.5">Play sounds for notifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateSettings("soundEnabled", !settings.soundEnabled)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        settings.soundEnabled ? "bg-blue-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          settings.soundEnabled ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block">Quick Actions</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white text-sm transition-colors">
                        <Calendar className="h-4 w-4" />
                        Export Calendar
                      </button>
                      <button className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white text-sm transition-colors">
                        <Globe className="h-4 w-4" />
                        Import Events
                      </button>
                      <button className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white text-sm transition-colors">
                        <Palette className="h-4 w-4" />
                        Customize Colors
                      </button>
                      <button className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white text-sm transition-colors">
                        <Clock3 className="h-4 w-4" />
                        Set Reminders
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {settingsTab === "notifications" && (
                <div className="space-y-6">
                  {/* Notifications */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-500/20 rounded-lg">
                        <Bell className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Push Notifications</p>
                        <p className="text-white/50 text-xs mt-0.5">Get notified about events</p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateSettings("notifications", !settings.notifications)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        settings.notifications ? "bg-blue-500" : "bg-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                          settings.notifications ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Notification Settings */}
                  {settings.notifications && (
                    <div className="space-y-3 pl-14">
                      {[
                        { label: "Event reminders", desc: "15 minutes before", enabled: true },
                        { label: "Daily agenda", desc: "8:00 AM daily", enabled: true },
                        { label: "Event changes", desc: "When events are updated", enabled: false },
                        { label: "Invitations", desc: "New meeting invites", enabled: true },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2">
                          <div>
                            <p className="text-white text-sm">{item.label}</p>
                            <p className="text-white/40 text-xs">{item.desc}</p>
                          </div>
                          <button
                            className={`w-10 h-5 rounded-full transition-colors relative ${
                              item.enabled ? "bg-blue-500" : "bg-white/20"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                                item.enabled ? "translate-x-5" : "translate-x-0.5"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quiet Hours */}
                  <div>
                    <label className="text-white text-sm font-medium mb-3 block flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      Quiet Hours
                    </label>
                    <div className="flex items-center gap-3">
                      <select className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                        {[20, 21, 22, 23].map((h) => (
                          <option key={h} value={h} className="bg-gray-800 text-white">
                            {h > 12 ? `${h - 12} PM` : h === 12 ? "12 PM" : `${h} PM`}
                          </option>
                        ))}
                      </select>
                      <span className="text-white/50 text-sm">to</span>
                      <select className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                        {[6, 7, 8, 9].map((h) => (
                          <option key={h} value={h} className="bg-gray-800 text-white">
                            {h === 0 ? "12 AM" : h < 12 ? `${h} AM` : "12 PM"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Settings Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setSettings({
                    timeFormat: "12h",
                    startOfWeek: "sunday",
                    showWeekends: true,
                    showEndTimes: true,
                    eventDensity: "comfortable",
                    aiAssistant: true,
                    soundEnabled: true,
                    notifications: true,
                    workingHoursStart: 8,
                    workingHoursEnd: 17,
                    timezone: "America/New_York",
                    theme: "dark",
                    showDeclinedEvents: false,
                    defaultView: "week",
                  })
                }}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                Reset to default
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
