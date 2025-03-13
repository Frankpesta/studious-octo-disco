"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle-theme";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about-us" },
	{
		name: "Services",
		href: "/services",
		submenu: [
			{ name: "Stable Wallet", href: "/services/stable-wallet" },
			{ name: "ATM Card", href: "/services/atm-card" },
		],
	},
	{ name: "Contact Us", href: "/contact-us" },
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [servicesOpen, setServicesOpen] = useState(false);
	const pathname = usePathname();

	// Close mobile menu when route changes
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
				aria-label="Global">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Fortifi.Ai</span>
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500"></div>
							<span className="text-xl font-bold">Fortifi.Ai</span>
						</div>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
								<span className="sr-only">Open main menu</span>
								<Menu className="h-6 w-6" aria-hidden="true" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px] px-8">
							<SheetHeader className="mb-6">
								<SheetTitle>
									<Link href="/" className="flex items-center gap-2">
										<div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500"></div>
										<span className="text-xl font-bold">Fortifi.Ai</span>
									</Link>
								</SheetTitle>
							</SheetHeader>
							<div className="flow-root">
								<div className="-my-6 divide-y divide-border">
									<div className="space-y-2 py-6">
										{navigation.map((item) =>
											item.submenu ? (
												<div key={item.name}>
													<button
														onClick={() => setServicesOpen(!servicesOpen)}
														className="flex w-full items-center justify-between rounded-md py-2 pl-3 pr-3.5 text-base font-medium hover:bg-accent">
														{item.name}
														<ChevronDown
															className="h-5 w-5 flex-none"
															aria-hidden="true"
														/>
													</button>
													{servicesOpen && (
														<div className="ml-6 mt-2 space-y-2">
															{item.submenu.map((subitem) => (
																<SheetClose key={subitem.name} asChild>
																	<Link
																		href={subitem.href}
																		className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium hover:bg-accent">
																		{subitem.name}
																	</Link>
																</SheetClose>
															))}
														</div>
													)}
												</div>
											) : (
												<SheetClose key={item.name} asChild>
													<Link
														href={item.href}
														className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium hover:bg-accent">
														{item.name}
													</Link>
												</SheetClose>
											)
										)}
									</div>
									<div className="flex items-center justify-between py-6">
										<ModeToggle />
										<SheetClose asChild>
											<Button asChild>
												<Link href="/contact-us">Get Started</Link>
											</Button>
										</SheetClose>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
				<div className="hidden lg:flex lg:gap-x-8">
					{navigation.map((item) =>
						item.submenu ? (
							<div key={item.name} className="relative">
								<button
									onClick={() => setServicesOpen(!servicesOpen)}
									className={`flex items-center gap-1 text-sm font-medium ${
										pathname.startsWith(item.href)
											? "text-primary"
											: "text-muted-foreground hover:text-foreground"
									}`}>
									{item.name}
									<ChevronDown className="h-4 w-4" />
								</button>
								{servicesOpen && (
									<div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											{item.submenu.map((subitem) => (
												<Link
													key={subitem.name}
													href={subitem.href}
													className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
													{subitem.name}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
						) : (
							<Link
								key={item.name}
								href={item.href}
								className={`text-sm font-medium ${
									pathname === item.href
										? "text-primary"
										: "text-muted-foreground hover:text-foreground"
								}`}>
								{item.name}
							</Link>
						)
					)}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
					<ModeToggle />
					<Button asChild>
						<Link href="/contact-us">Get Started</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
}
