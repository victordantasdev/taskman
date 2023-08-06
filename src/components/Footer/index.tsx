'use client'

import { GithubLogo } from "@phosphor-icons/react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mt-16">
      <p>Created by</p>

      <Link className="flex" href="https://github.com/victordantasdev" target="_blank">
        <GithubLogo size={24} />
        <p>/victordantasdev</p>
      </Link>
    </footer>
  )
}
