import * as React from "react";
import { Bell, Home, Menu, Paintbrush } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { AppearanceSettings } from "./appearance-settings";

const data = {
    nav: [
        { name: "Notifications", icon: Bell },
        { name: "Navigation", icon: Menu },
        { name: "Home", icon: Home },
        { name: "Appearance", icon: Paintbrush },
        // { name: "Messages & media", icon: MessageCircle },
        // { name: "Language & region", icon: Globe },
        // { name: "Accessibility", icon: Keyboard },
        // { name: "Mark as read", icon: Check },
        // { name: "Audio & video", icon: Video },
        // { name: "Connected accounts", icon: Link },
        // { name: "Privacy & visibility", icon: Lock },
        // { name: "Advanced", icon: Settings },
    ],
};

export function SettingsDialog({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [activeSection, setActiveSection] = React.useState(data.nav[0].name);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
                <DialogTitle className="sr-only">Settings</DialogTitle>
                <DialogDescription className="sr-only">
                    Customize your settings here.
                </DialogDescription>
                <SidebarProvider className="items-start">
                    <Sidebar collapsible="none" className="hidden md:flex">
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarMenu>
                                    {data.nav.map((item) => (
                                        <SidebarMenuItem key={item.name}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={item.name === activeSection}
                                                onClick={() => setActiveSection(item.name)}
                                            >
                                                <a href="#">
                                                    <item.icon />
                                                    <span>{item.name}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
                        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <div className="flex items-center">
                                    <h3>Settings</h3>
                                </div>
                            </div>
                        </header>
                        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
                            {activeSection === "Appearance" && <AppearanceSettings />}

                            {activeSection === "Messages & media" && (
                                <div>
                                    <h4 className="text-lg font-medium mb-2">Messages & Media</h4>
                                    <div className="bg-muted/50 aspect-video max-w-3xl rounded-xl p-4">
                                        Customize message and media settings here.
                                    </div>
                                </div>
                            )}
                        </div>
                    </main>
                </SidebarProvider>
            </DialogContent>
        </Dialog>
    );
}
