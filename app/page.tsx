import Link from "next/link";
import {
	ArrowRight,
	Shield,
	CreditCard,
	Wallet,
	DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative py-10 md:py-16 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-12">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="flex flex-col justify-center space-y-10">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none">
									Protect Your Crypto with AI-Powered Stability
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									Fortifi.Ai shields your investments from market volatility
									while providing seamless payment solutions.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button
									asChild
									size="lg"
									className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
									<Link href="/services/stable-wallet">
										Get Started <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button variant="outline" size="lg" asChild>
									<Link href="/about-us">Learn More</Link>
								</Button>
							</div>
						</div>
						<div className="relative flex items-center justify-center">
							<div className="relative w-full max-w-[500px] aspect-square">
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />
								<div className="relative z-10 w-full h-full flex items-center justify-center">
									<div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center animate-float">
										<Wallet className="h-24 w-24 text-white" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Key Features
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Discover how Fortifi.Ai is revolutionizing the crypto experience
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-12">
						<Card className="border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
							<CardHeader>
								<Shield className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2" />
								<CardTitle>Stable Wallet</CardTitle>
								<CardDescription>
									Protect your capital from market fluctuations with our
									AI-powered stability system.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Even if Bitcoin drops from $100,000 to $80,000, your initial
									investment remains secure.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" asChild className="gap-1">
									<Link href="/services/stable-wallet">
										Learn more <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardFooter>
						</Card>
						<Card className="border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
							<CardHeader>
								<CreditCard className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2" />
								<CardTitle>Fortifi Card</CardTitle>
								<CardDescription>
									Spend your crypto anywhere with our Mastercard and Visa cards.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Use your digital assets at over 252 stores and with any
									merchant that accepts card payments.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" asChild className="gap-1">
									<Link href="/services/atm-card">
										Learn more <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardFooter>
						</Card>
						<Card className="border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
							<CardHeader>
								<DollarSign className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2" />
								<CardTitle>Fee-Free ATM</CardTitle>
								<CardDescription>
									Withdraw cash from ATMs without hidden fees or tax deductions.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Access your funds anywhere in the world with no extra charges
									or complicated tax issues.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="ghost" asChild className="gap-1">
									<Link href="/services/atm-card">
										Learn more <ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-500 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Ready to Secure Your Crypto?
							</h2>
							<p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join thousands of users who trust Fortifi.Ai for their crypto
								stability and payment needs.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button size="lg" variant="secondary" asChild>
								<Link href="/contact-us">Get Started Today</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
