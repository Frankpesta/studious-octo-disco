import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, LineChart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StableWallet() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Stable Wallet
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									Protect your crypto investments from market volatility with
									our AI-powered stability system.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button
									asChild
									size="lg"
									className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600">
									<Link href="/contact-us">
										Get Started <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
						<div className="relative flex items-center justify-center">
							<div className="relative w-full max-w-[500px] aspect-square">
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-600/20 dark:bg-green-400/10 rounded-full blur-3xl animate-pulse-slow" />
								<div className="relative z-10 w-full h-full flex items-center justify-center">
									<div className="w-64 h-64 bg-gradient-to-br from-green-600 to-blue-500 rounded-2xl shadow-xl flex items-center justify-center animate-float">
										<Shield className="h-24 w-24 text-white" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter">
							How It Works
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Our AI-powered stability system protects your investments from
							market volatility
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						<Card>
							<CardHeader>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
									1
								</div>
								<CardTitle>Deposit Crypto</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Transfer your cryptocurrency to your Fortifi.Ai wallet. We
									support Bitcoin, Ethereum, and other major cryptocurrencies.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
									2
								</div>
								<CardTitle>AI Protection Activates</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Our AI system continuously monitors market conditions and
									automatically implements protection strategies to safeguard
									your capital.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
									3
								</div>
								<CardTitle>Capital Remains Stable</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Even during market downturns, your initial investment value
									remains protected, giving you peace of mind and financial
									stability.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter">Benefits</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Why choose Fortifi.Ai's Stable Wallet
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardHeader>
								<Shield className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>Capital Protection</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Your initial investment is protected against market downturns,
									ensuring financial stability.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<TrendingUp className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>Upside Potential</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									While protecting against downside risk, you still benefit from
									market uptrends and growth.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<LineChart className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>AI-Powered Analysis</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Advanced algorithms continuously analyze market conditions to
									optimize protection strategies.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<Lock className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>Enhanced Security</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Multi-layer security protocols protect your assets from
									unauthorized access and cyber threats.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-blue-500 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Ready to Secure Your Crypto?
							</h2>
							<p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join thousands of users who trust Fortifi.Ai for their crypto
								stability needs.
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
