import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Fortifi.Ai | Stable Crypto Wallet & Payment Solutions",
		template: "%s | Fortifi.Ai",
	},
	description:
		"AI-powered stable wallet that protects your capital from market fluctuations and provides seamless crypto payment solutions.",
	keywords: [
		"crypto",
		"stable wallet",
		"cryptocurrency",
		"payment card",
		"blockchain",
		"fintech",
		"AI",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="relative flex min-h-screen flex-col">
						<Navbar />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
