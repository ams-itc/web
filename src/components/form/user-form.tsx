"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { UserType } from "@/types/users";
import { userService } from "@/lib/services/user";
import { toast } from "sonner";
import { AvatarUploader } from "../avatar-uploader";
import { Switch } from "../ui/switch";

export interface UserFormProps {
  roles: { id: number; name: string }[];
  onClose: () => void;
  onSuccess?: (user: UserType) => void;
}

export default function UserForm({ onClose, onSuccess, roles }: UserFormProps) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [roleId, setRoleId] = React.useState(1);
  const [status, setStatus] = React.useState(true);
  const [avatarFile, setAvatarFile] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [preview, setPreview] = React.useState<string>("");

  React.useEffect(() => {
    if (avatarFile) {
      const url = URL.createObjectURL(avatarFile);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [avatarFile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let newUser: UserType;
      if (avatarFile) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("role_id", roleId.toString());
        formData.append("status", status ? "true" : "false");

        newUser = await userService.create(formData as any);
      } else {
        const dto = {
          name,
          email,
          password,
          role_id: roleId,
          status,
          avatar: "/images/default-avatar.png",
        };
        newUser = await userService.create(dto);
      }

      toast.success("User created", {
        description: `${newUser.name} has been successfully created.`,
      });

      if (onSuccess) onSuccess(newUser);
      onClose();
    } catch (err) {
      console.error("Failed to create user:", err);
      toast.error("Error", {
        description: "Failed to create user. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Avatar preview */}
      <AvatarUploader
        value={preview} // initial URL
        onChange={(file) => setAvatarFile(file)}
        size={96}
      />

      {/* Name, Email, Password */}
      <div className="space-y-1">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" required />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" required />
      </div>

      {/* Role & Status */}
      <div className="flex w-full gap-4">
        <div className="flex-1 space-y-1">
          <Label htmlFor="role">Role</Label>
          <Select aria-label="Role" value={roleId.toString()} onValueChange={(value) => setRoleId(parseInt(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role.id} value={role.id.toString()}>
                  {role.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 space-y-1">
          <Label htmlFor="Status">Status</Label>
          <div className="flex items-center gap-2">
            <Switch
              checked={status}
              onCheckedChange={(checked) => setStatus(checked)}
              aria-label="Status"
            />
            <span>{status ? "Active" : "Inactive"}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onClose} disabled={loading}>Cancel</Button>
        <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save User"}</Button>
      </div>
    </form>
  );
}