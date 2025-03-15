import Link from "next/link";
import { ArrowRight, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Our Services
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl">
								Discover how Fortifi.Ai is revolutionizing the way you interact
								with cryptocurrency
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="grid gap-12 md:gap-16">
						{/* Stable Wallet */}
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
							<div className="space-y-4">
								<div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-600 dark:text-green-400">
									Stable Wallet
								</div>
								<h2 className="text-3xl font-bold tracking-tighter">
									Protect Your Capital from Market Volatility
								</h2>
								<p className="text-muted-foreground md:text-lg">
									Crypto is often unstable and unpredictable, with volatile
									price movements. However, our AI-powered stable wallet Fortifi
									protects your capital from market fluctuations.
								</p>
								<p className="text-muted-foreground md:text-lg">
									For example, if you buy Bitcoin for $100,000 and its price
									drops to $80,000, our stable wallet ensures your initial
									$100,000 remains secure.
								</p>
								<div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
									<Button
										asChild
										className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600">
										<Link href="/services/stable-wallet">
											Learn More <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>
							</div>
							<div className="relative flex items-center justify-center">
								<div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
									<div className="relative w-64 h-64 bg-gradient-to-br from-green-600 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center animate-float">
										<Shield className="h-24 w-24 text-white" />
									</div>
								</div>
							</div>
						</div>

						{/* ATM Card */}
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
							<div className="order-2 lg:order-1 relative flex items-center justify-center">
								<div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
									<div className="relative w-64 h-64 bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl shadow-xl flex items-center justify-center animate-float">
										<CreditCard className="h-24 w-24 text-white" />
									</div>
								</div>
							</div>
							<div className="order-1 lg:order-2 space-y-4">
								<div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-600 dark:text-blue-400">
									ATM Card
								</div>
								<h2 className="text-3xl font-bold tracking-tighter">
									Spend Your Crypto Anywhere
								</h2>
								<p className="text-muted-foreground md:text-lg">
									Struggling with tax issues? Fortifi.Ai is here to help! Our
									cutting-edge, AI-powered, multi-chain payment solution offers
									a seamless way to use your cryptocurrency in everyday
									transactions.
								</p>
								<p className="text-muted-foreground md:text-lg">
									With our Fortifi Mastercard and Visa card, you can
									effortlessly spend your digital assets at over 252 stores and
									with any merchant that accepts card payments. Additionally,
									our service enables you to withdraw cash from ATMs without any
									hidden fees, extra charges, or tax deductions.
								</p>
								<div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
									<Button
										asChild
										className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700">
										<Link href="/services/atm-card">
											Learn More <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-blue-500 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Ready to Experience Financial Freedom?
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
