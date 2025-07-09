"use client";
import Link from "next/link";
import {
	ArrowRight,
	Shield,
	CreditCard,
	Wallet,
	DollarSign,
	StarsIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TestimonialSection } from "@/components/testimonial-section";
import TradingViewTickerTape from "@/components/trading-view";

export default function Home() {
	const handleLogin = () => {
		window.location.href = "https://app.fortifiafunds.com/user/login";
	};
	const handleRegister = () => {
		window.location.href = "https://app.fortifiafunds.com/user/register";
	};

	return (
		<div className="flex flex-col min-h-screen">
			<TradingViewTickerTape />
			{/* Hero Section */}
			<section className="relative py-16 md:py-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-12">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="flex flex-col justify-center space-y-10">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none">
									Protect Your Crypto with AI-Powered Stability
								</h1>
								<p className="max-w-full text-muted-foreground md:text-xl">
									Astrologers Fund Inc. is an advanced financial technology
									platform designed to safeguard your investments from market
									volatility while offering seamless, secure, and efficient
									payment solutions. Leveraging cutting-edge artificial
									intelligence and data analytics, Astrologers Fund Inc.
									continuously monitors market trends, identifies risks, and
									optimizes your portfolio to ensure stable growth and minimal
									losses.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button
									size="lg"
									className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600"
									onClick={handleLogin}>
									Get Started <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
								<Button variant="outline" size="lg" asChild>
									<Link href="/about-us">Learn More</Link>
								</Button>
							</div>
						</div>
						<div className="relative flex items-center justify-center">
							<div className="relative w-full max-w-[500px] aspect-square">
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-600/20 dark:bg-green-400/10 rounded-full blur-3xl animate-pulse-slow" />
								<div className="relative z-10 w-full h-full flex items-center justify-center">
									<div className="w-64 h-64 bg-gradient-to-br from-green-600 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center animate-float">
										<Image
											src="/assets/hero.jpg"
											alt="Hero-image"
											fill
											objectFit="cover"
											className="object-cover rounded-2xl w-full h-full rotate-0 md:rotate-[18deg] drop-shadow-2xl"
										/>
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
							<p className="max-w-full text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Discover how Astrologers Fund Inc. is revolutionizing the crypto
								experience
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-12">
						<Card className="border-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
							<CardHeader>
								<Shield className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
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
						<Card className="border-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
							<CardHeader>
								<CreditCard className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
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
						<Card className="border-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
							<CardHeader>
								<StarsIcon className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>Staking</CardTitle>
								<CardDescription>
									Get the highest, stable and most profitable staking rewards in
									all of the cryptocurrency ecosystem, the competition is ours
									to dominate.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									We offer several options for you to choose from when staking
									your coins, each designed to meet your satisfaction and your
									staking goals, you can choose from our renege of options
									including flexible and fixed staking, for a duration that best
									suits your needs.
								</p>
							</CardContent>
							<CardContent>
								<p>
									Flexible staking: with the flexible staking mechanism you have
									the option to pull out your staked coins at any moment, time
									and day you want, but flexible impacts the value of your
									rewards, it leaves your crypto coin open to the market
									volatility and influence, which determines the outcome of your
									rewards and your available balance.
								</p>
							</CardContent>
							<CardContent>
								<p>
									Fixed Staking: The fixed staking mechanism, allows you to
									stake your coin for a fixed number of days, giving your a
									longer period to take advantage of our staking and trading
									technology to accumulate profits for yourself for a longer
									period of time and also guarantee your coin value is secured
									against the market volatility during the staked period, with
									our seamless stability Algorithm and Technology, we guarantee
									maximum protection from the market volatility when
									choosing fixed staking.
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

			<TestimonialSection />

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-blue-500 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Ready to Secure Your Crypto?
							</h2>
							<p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join thousands of users who trust Astrologers Fund Inc. for
								their crypto stability and payment needs.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button size="lg" variant="secondary" onClick={handleRegister}>
								Get Started Today
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
