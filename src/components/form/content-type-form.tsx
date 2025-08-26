"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { contentTypeService, type ContentType } from "@/lib/services/content-type";
import { Textarea } from "../ui/textarea";

export interface ContentTypeFormProps {
    initialData?: Partial<ContentType>;
    onClose: () => void;
    onSuccess?: (contentType: ContentType) => void;
}

export default function ContentTypeForm({
    initialData,
    onClose,
    onSuccess,
}: ContentTypeFormProps) {
    const [form, setForm] = React.useState<Partial<ContentType>>({
        name: initialData?.name || "",
        table_name: initialData?.table_name || "",
        slug: initialData?.slug || "",
        description: initialData?.description || "",
    });
    // const [status, setStatus] = React.useState(true); // optional status field
    const [loading, setLoading] = React.useState(false);

    const handleChange = (field: keyof ContentType, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let saved: ContentType;
            if (initialData?.id) {
                saved = await contentTypeService.update(initialData.id, form);
                toast.success("Updated", { description: `${saved.name} has been updated.` });
            } else {
                saved = await contentTypeService.create(form);
                toast.success("Created", { description: `${saved.name} has been created.` });
            }

            if (onSuccess) onSuccess(saved);
            onClose();
        } catch (err) {
            console.error("Failed to save content type:", err);
            toast.error("Error", {
                description: "Failed to save content type. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    value={form.name || ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Blog, Product, Event..."
                    required
                />
            </div>

            {/* Table Name */}
            <div className="space-y-1">
                <Label htmlFor="table_name">Table Name</Label>
                <Input
                    id="table_name"
                    value={form.table_name || ""}
                    onChange={(e) => handleChange("table_name", e.target.value)}
                    placeholder="articles, products..."
                    required
                />
            </div>

            {/* Slug */}
            <div className="space-y-1">
                <Label htmlFor="slug">Slug</Label>
                <Input
                    id="slug"
                    value={form.slug || ""}
                    onChange={(e) => handleChange("slug", e.target.value)}
                    placeholder="blog, product, event..."
                    required
                />
            </div>

            {/* Description */}
            <div className="space-y-1">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    value={form.description || ""}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Optional description"
                    rows={4}
                />
            </div>

            {/* Optional: Status */}
            {/* <div className="flex items-center gap-2">
                <Switch
                    checked={status}
                    onCheckedChange={(checked) => setStatus(checked)}
                    aria-label="Status"
                />
                <span>{status ? "Active" : "Inactive"}</span>
            </div> */}

            {/* Actions */}
            <div className="flex justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
                    Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : initialData?.id ? "Update" : "Create"}
                </Button>
            </div>
        </form>
    );
}