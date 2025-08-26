"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { permissionService } from "@/lib/services/permission"
import { toast } from "sonner"

export interface PermissionFormProps {
  onClose: () => void
  onCreated?: () => void // optional callback to refresh list
}

export default function PermissionForm({ onClose, onCreated }: PermissionFormProps) {
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await permissionService.create({ name, description })
      toast.success("Permission created successfully")
      if (onCreated) onCreated()
      onClose()
    } catch (err: any) {
      toast.error(err.message || "Failed to create permission")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <Label htmlFor="name">Permission Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="View Dashboard" required disabled={loading} />
      </div>

      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Allows user to view dashboard" disabled={loading} />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onClose} disabled={loading}>Cancel</Button>
        <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save Permission"}</Button>
      </div>
    </form>
  )
}