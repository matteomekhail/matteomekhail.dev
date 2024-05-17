"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";


export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function changeTheme(theme: string = 'system') {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        // Per il tema del sistema, controlla le preferenze del sistema operativo dell'utente
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', 'system');
    }
}

changeTheme();

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#" onClick={(event: any) => event.preventDefault()}>Web Development</HoveredLink>
                        <HoveredLink href="#" onClick={(event: any) => event.preventDefault()}>Mobile App Development</HoveredLink>
                        <HoveredLink href="#" onClick={(event: any) => event.preventDefault()}>Ecommerce Development</HoveredLink>
                        <HoveredLink href="#" onClick={(event: any) => event.preventDefault()}>SaaS Development</HoveredLink>
                        <HoveredLink href="#" onClick={(event: any) => event.preventDefault()}>Technical assistance and consulting</HoveredLink>
                        <HoveredLink href="#" onClick={(event: any) => event.preventDefault()}>Search Engine Optimization (SEO)</HoveredLink>
                    </div>
                </MenuItem>
                {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>  */}
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#quote">Get a quote</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Theme">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#" onClick={() => { changeTheme('dark'); }}>Dark</HoveredLink>
                        <HoveredLink href="#" onClick={() => { changeTheme('light'); }}>Light</HoveredLink>
                        <HoveredLink href="#" onClick={() => { changeTheme('system'); }}>System</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>

        </div>
    );
}
