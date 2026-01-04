import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Theme from "@/app/_data/Theme";
import GradientBg from "@/app/_data/GradientBg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface ControllerProps {
    selectedTheme: (value: string) => void;
    selectedBackground: (value: string) => void;
    setSignInEnable: (value: boolean) => void;
}

function Controller({ selectedTheme, selectedBackground, setSignInEnable }: ControllerProps) {
    const [showMore, setShowMore] = useState(6);
    return (
        <div className="text-white">
            {/* Theme Selection Controller */}
            <h2 className="my-1 font-semibold text-lg mb-3">Select Theme</h2>
            <Select onValueChange={(value) => selectedTheme(value)}>
                <SelectTrigger className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 focus:ring-purple-500">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800 text-white">
                    {Theme.map((theme, index) => (
                        <SelectItem value={theme.theme} key={index} className="focus:bg-gray-800 focus:text-white cursor-pointer hover:bg-gray-800">
                            <div className="flex gap-3 items-center">
                                <div className="flex rounded-md overflow-hidden ring-1 ring-white/10">
                                    <div className="h-5 w-5" style={{ backgroundColor: theme.primary }} />
                                    <div className="h-5 w-5" style={{ backgroundColor: theme.secondary }} />
                                    <div className="h-5 w-5" style={{ backgroundColor: theme.accent }} />
                                    <div className="h-5 w-5" style={{ backgroundColor: theme.neutral }} />
                                </div>
                                {theme.theme}
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Background Selection Controller */}
            <h2 className="mt-8 my-1 font-semibold text-lg mb-3">Select Background</h2>
            <div className="grid grid-cols-3 gap-4">
                {GradientBg.map(
                    (bg, index) =>
                        index < showMore && (
                            <div
                                key={index}
                                onClick={() => selectedBackground(bg.gradient)}
                                className="w-full h-[70px] rounded-xl border border-white/10 hover:border-primary hover:scale-105 transition-all cursor-pointer shadow-md items-center justify-center flex font-medium text-sm bg-black/20 backdrop-blur-sm"
                                style={{ background: bg.gradient }}
                            >
                                {index == 0 && "None"}
                            </div>
                        )
                )}
            </div>
            <Button
                variant="ghost"
                className="w-full border border-white/20 mt-4 text-white hover:bg-white/10 hover:text-white"
                size="sm"
                onClick={() => setShowMore(showMore > 6 ? 6 : 20)}
            >
                {showMore > 6 ? "Show Less " : "Show More "}
            </Button>

            <div className="flex gap-3 my-4 items-center mt-10 p-3 bg-white/5 rounded-lg border border-white/10">
                <Checkbox
                    onCheckedChange={(e) => setSignInEnable(e as boolean)}
                    className="border-white/50 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                />
                <h2 className="text-sm font-medium">
                    Enable Social Authentication before submitting the form
                </h2>
            </div>
        </div>
    );
}

export default Controller;
