'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface Command {
  input: string
  output: string | React.ReactNode
}

interface CommandMap {
  [key: string]: string | React.ReactNode
}

const commandMap: CommandMap = {
  bio: 'Frontend Engineer & Programming Instructor | Building fast, data-driven web apps',
  skills: 'React • Next.js • TypeScript • Tailwind CSS • Node.js • GraphQL',
  teach: 'Simplifying JavaScript: callbacks, promises, array methods, and beyond',
  experience: 'Razy Soft (Full-stack store with auth & subscriptions) • Various Next.js apps',
  contact: 'your-email@example.com | @front_maa',
  help: (
    <div className="space-y-1 text-sm">
      <p><span className="text-white/40">bio</span> — Professional summary</p>
      <p><span className="text-white/40">skills</span> — Tech stack</p>
      <p><span className="text-white/40">teach</span> — Teaching focus</p>
      <p><span className="text-white/40">experience</span> — Work history</p>
      <p><span className="text-white/40">contact</span> — Get in touch</p>
      <p><span className="text-white/40">clear</span> — Clear terminal</p>
    </div>
  ),
}

const autoRunCommands = [
  { input: 'bio', delay: 600 },
  { input: 'skills', delay: 1200 },
  { input: 'teach', delay: 800 },
]

export default function TerminalBio() {
  const [history, setHistory] = useState<Command[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isAutoRunning, setIsAutoRunning] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  // Auto-run initial commands safely
  useEffect(() => {
    if (!isAutoRunning) return

    const runCommands = async () => {
      setIsTyping(true)

      for (let i = 0; i < autoRunCommands.length; i++) {
        const cmd = autoRunCommands[i]
        await new Promise((resolve) => setTimeout(resolve, cmd.delay))

        // ۱. ابتدا یک خط خالی برای دستور جدید در تاریخچه ایجاد می‌کنیم
        setHistory((prev) => [...prev, { input: '', output: '' }])

        // ۲. حالا کاراکترها را دانه دانه روی همان خط آخر آپدیت می‌کنیم
        const cmdString = cmd.input
        let typed = ''
        for (let j = 0; j < cmdString.length; j++) {
          typed += cmdString[j]
          setHistory((prev) => {
            const newHistory = [...prev]
            if (newHistory.length > 0) {
              newHistory[newHistory.length - 1] = { input: typed, output: '' }
            }
            return newHistory
          })
          await new Promise((resolve) => setTimeout(resolve, 60)) // کمی سرعت تایپ رو طبیعی‌تر کردم
        }

        // ۳. اجرای دستور و نمایش خروجی مربوطه
        await new Promise((resolve) => setTimeout(resolve, 250))
        const output = commandMap[cmd.input] || `Command not found: ${cmd.input}`
        setHistory((prev) => {
          const newHistory = [...prev]
          if (newHistory.length > 0) {
            newHistory[newHistory.length - 1] = { input: cmd.input, output }
          }
          return newHistory
        })
        await new Promise((resolve) => setTimeout(resolve, 200))
      }

      setIsTyping(false)
      setIsAutoRunning(false)
    }

    runCommands()
  }, [isAutoRunning])

  // Auto-scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  // Focus input on click
  const handleContainerClick = () => {
    if (!isTyping && !isAutoRunning) {
      inputRef.current?.focus()
    }
  }

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const output = commandMap[trimmedCmd] || `Command not found: ${trimmedCmd}`
    setHistory((prev) => [...prev, { input: trimmedCmd, output }])
    setInput('')
  }

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() && !isTyping && !isAutoRunning) {
      setIsProcessing(true)
      executeCommand(input.trim())
      setIsProcessing(false)
    }
  }

  // Render output with proper formatting
  const renderOutput = (output: string | React.ReactNode) => {
    if (typeof output === 'string') {
      if (output.includes('•')) {
        return (
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {output.split('•').map((item, i) => (
              <span key={i} className={i === 0 ? '' : 'text-white/70'}>
                {i > 0 && '•'}
                {item.trim()}
              </span>
            ))}
          </div>
        )
      }
      return <span>{output}</span>
    }
    return output
  }

  return (
    <div
      className="w-full border border-white/10 bg-black/40 backdrop-blur-sm p-6 rounded-sm cursor-text min-h-[350px]"
      onClick={handleContainerClick}
    >
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-green-500/40" />
        </div>
        <span className="text-xs font-mono text-white/30 tracking-wider">
          TERMINAL — @front_maa
        </span>
      </div>

      <div className="space-y-3 font-mono text-sm">
        {/* History */}
        <AnimatePresence initial={false}>
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.12 }}
              className="space-y-1"
            >
              {/* Input line */}
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-green-400/50 select-none">$</span>
                <span>{item.input}</span>
              </div>

              {/* Output */}
              {item.output && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="pl-5 text-white/70 leading-relaxed"
                >
                  {renderOutput(item.output)}
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input line */}
        {!isAutoRunning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-2 mt-1"
          >
            <span className="text-green-400/50 select-none">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white/90 font-mono text-sm min-w-0"
              placeholder={isProcessing ? 'processing...' : ''}
              disabled={isProcessing || isTyping}
              autoFocus
            />
            {!input && !isProcessing && (
              <span className="animate-pulse text-white/30 text-xs select-none">▌</span>
            )}
          </motion.div>
        )}

        {/* Welcome helper after auto-run finishes */}
        {history.length > 0 && !isAutoRunning && history[history.length - 1].output !== '' && (
          <div className="text-white/30 text-xs pt-2 border-t border-white/5 animate-fade-in">
            Type <span className="text-white/50 underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for more info.
          </div>
        )}

        {/* Initializing indicator */}
        {isTyping && history.length === 0 && (
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span className="animate-pulse">●</span>
            <span>Initializing session...</span>
          </div>
        )}

        <div ref={endRef} />
      </div>
    </div>
  )
}