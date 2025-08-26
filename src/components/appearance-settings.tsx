import * as React from "react";
import { ModeToggle } from "./mode-toggle";

export const AppearanceSettings: React.FC = () => {
    return (
        <div className="space-y-4">
            <h4 className="text-md font-medium">Base Appearance</h4>
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Theme</span>
                <div className="ml-auto">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};