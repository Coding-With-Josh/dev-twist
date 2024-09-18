"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

type Props = {
  title: string
  content?: string
  linkText: string
  linkUrl: string
}


export default function AddSomething({title, content, linkText, linkUrl}: Props) {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-balance max-w-lg leading-relaxed">
          {content}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={linkUrl}>
        <Button>{linkText}</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
