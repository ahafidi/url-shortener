"use client"

import React from "react"

export default function Home() {
  const [shortenedValue, setShortenedValue] = React.useState('false')
  const [value, setValue] = React.useState('')

  const shorten = () => {
    if (value === '')
      return

    setShortenedValue('shortened url')
    setValue('shortened url')
  }

  const copy = () => {
    navigator.clipboard.writeText(value)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="m-10 text-5xl font-extrabold">
        <span className="text-transparent bg-gradient-to-r from-zinc-100 via-violet-200 to-sky-700 bg-clip-text">
          Shorten Your Loooooong Links ✨
        </span>
      </div>

      <div className="container flex items-center justify-center group/main">
        <div className="relative">

          <div className="absolute top-4 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 group-focus-within/main:text-black"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>

          <input
            type="text"
            className="sm:w-[600px] md:w-[700px] lg:w-[850px] text-gray-400 group-focus-within/main:text-black h-14 pl-10 pr-36 rounded-lg group-focus-within/main:shadow group-focus-within/main:outline-none"
            placeholder="Enter the URL here"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <div className="absolute top-1.5 right-1.5">
            {shortenedValue === value
              ? (
                <button
                  className="relative group/shorten"
                  onClick={copy}
                >
                  <div className="absolute duration-1000 rounded-lg transitiona-all opacity-70 -inset-px bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 blur-lg group-hover/shorten:opacity-100 group-hover/shorten:-inset-1 group-hover/shorten:duration-200" />
                  <div className="relative inline-flex items-center justify-center p-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 active:bg-gray-600 gap-x-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Copy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24" fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-copy"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </div>
                </button>
              )
              : (
                <button
                  className="relative group/shorten"
                  onClick={shorten}
                >
                  <div className="absolute duration-1000 rounded-lg transitiona-all opacity-70 -inset-px bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 blur-lg group-hover/shorten:opacity-100 group-hover/shorten:-inset-1 group-hover/shorten:duration-200" />
                  <div className="relative inline-flex items-center justify-center p-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 active:bg-gray-600 gap-x-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Shorten Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                </button>
              )}
          </div>
        </div>
      </div>
    </main >
  )
}
