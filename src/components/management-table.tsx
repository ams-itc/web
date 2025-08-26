"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import type { ColumnDef } from "@tanstack/react-table"

interface ManagementTableProps<TData> {
    title: string
    columns: ColumnDef<TData>[]
    data: TData[]
    FormComponent: React.FC<{ onClose: () => void }>
    loading?: boolean
}

export function ManagementTable<TData>({
    title,
    columns,
    data,
    FormComponent,
    loading = false,
}: ManagementTableProps<TData>) {
    const [isOpen, setIsOpen] = React.useState(false)

    const itemName = title.slice(0, -1) // singular form for "Add" button

    return (
        <div className="space-y-4">
            {/* Header with title and add button */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="default">+ Add {itemName}</Button>
                    </DialogTrigger>
                    <DialogContent aria-describedby="dialog-desc">
                        <DialogHeader>
                            <DialogTitle>Add {itemName}</DialogTitle>
                            <DialogDescription>
                                Fill out the form below to add a new {itemName.toLowerCase()}
                            </DialogDescription>
                        </DialogHeader>
                        <FormComponent onClose={() => setIsOpen(false)} />
                    </DialogContent>
                </Dialog>
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex justify-center py-10">
                    <span className="text-gray-500">Loading {title}...</span>
                </div>
            ) : (
                <DataTable columns={columns} data={data} />
            )}
        </div>
    )
}