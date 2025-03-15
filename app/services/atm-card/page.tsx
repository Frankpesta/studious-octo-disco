import Link from "next/link";
import {
	ArrowRight,
	CreditCard,
	Globe,
	DollarSign,
	ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AtmCard() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 -z-10" />
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Fortifi Card
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl">
									Spend your cryptocurrency anywhere with our Mastercard and
									Visa cards.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button
									asChild
									size="lg"
									className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700">
									<Link href="/contact-us">
										Get Your Card <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
						<div className="relative flex items-center justify-center">
							<div className="relative w-full max-w-[500px] aspect-square">
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" />
								<div className="relative z-10 w-full h-full flex items-center justify-center">
									<div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl shadow-xl flex items-center justify-center animate-float">
										<CreditCard className="h-24 w-24 text-white" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter">
							Card Features
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Our multi-chain payment solution offers seamless crypto spending
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardHeader>
								<ShoppingCart className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
								<CardTitle>Worldwide Acceptance</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Use your card at over 252 stores and with any merchant that
									accepts Mastercard or Visa payments.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<DollarSign className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
								<CardTitle>Fee-Free ATM Withdrawals</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Withdraw cash from ATMs worldwide without any hidden fees or
									extra charges.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
								<CardTitle>Multi-Chain Support</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Our cards support multiple blockchain networks, giving you
									flexibility in how you spend your crypto.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CreditCard className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
								<CardTitle>No Tax Deductions</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Experience hassle-free transactions without worrying about
									complicated tax issues or deductions.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter">
							How It Works
						</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Getting and using your Fortifi Card is simple
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						<Card>
							<CardHeader>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
									1
								</div>
								<CardTitle>Apply for Your Card</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Complete a simple application process through our secure
									platform. Verification typically takes less than 24 hours.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
									2
								</div>
								<CardTitle>Fund Your Card</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Transfer cryptocurrency from your wallet to your Fortifi Card
									account. Our system automatically converts it for spending.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
									3
								</div>
								<CardTitle>Spend Anywhere</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Use your physical or virtual Fortifi Card for online
									purchases, in-store shopping, or ATM withdrawals worldwide.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 to-green-600 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Ready to Spend Your Crypto?
							</h2>
							<p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Get your Fortifi Card today and experience financial freedom.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button size="lg" variant="secondary" asChild>
								<Link href="/contact-us">Apply Now</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
