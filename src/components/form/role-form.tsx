"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface RoleFormProps {
  onClose: () => void
}

export default function RoleForm({ onClose }: RoleFormProps) {
  const [name, setName] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name }) // TODO: API call
    onClose()
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <Label htmlFor="name">Role Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Admin" required />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit">Save Role</Button>
      </div>
    </form>
  )
}