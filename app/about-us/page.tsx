import { Shield, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUs() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								About Fortifi.Ai
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl">
								We're on a mission to make cryptocurrency safer, more stable,
								and accessible for everyone.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
							<p className="text-muted-foreground">
								Fortifi.Ai was founded by a team of blockchain experts,
								financial analysts, and AI specialists who recognized a critical
								problem in the cryptocurrency market: volatility.
							</p>
							<p className="text-muted-foreground">
								We witnessed countless investors lose significant portions of
								their investments due to sudden market fluctuations. This
								inspired us to develop an innovative solution that would protect
								users' capital while still allowing them to participate in the
								crypto economy.
							</p>
							<p className="text-muted-foreground">
								After years of research and development, we created our
								AI-powered stable wallet technology, which has since helped
								thousands of users safeguard their investments against market
								volatility.
							</p>
						</div>
						<div className="relative flex items-center justify-center">
							<div className="grid grid-cols-2 gap-4">
								<div className="h-40 rounded-lg bg-gradient-to-br from-green-600 to-blue-500 flex items-center justify-center">
									<Shield className="h-16 w-16 text-white" />
								</div>
								<div className="h-40 rounded-lg bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center">
									<Award className="h-16 w-16 text-white" />
								</div>
								<div className="h-40 rounded-lg bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center">
									<Users className="h-16 w-16 text-white" />
								</div>
								<div className="h-40 rounded-lg bg-gradient-to-br from-green-600 to-blue-500 flex items-center justify-center">
									<TrendingUp className="h-16 w-16 text-white" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
						<p className="max-w-[700px] text-muted-foreground">
							The principles that guide everything we do at Fortifi.Ai
						</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Card>
							<CardHeader>
								<Shield className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>Security First</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									We prioritize the security of our users' assets above all
									else, implementing multiple layers of protection to safeguard
									your investments.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<Award className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>Innovation</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									We continuously push the boundaries of what's possible in
									fintech, leveraging cutting-edge AI and blockchain
									technologies to create better solutions.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<Users className="h-12 w-12 text-green-600 dark:text-green-400 mb-2" />
								<CardTitle>Accessibility</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									We believe cryptocurrency should be accessible to everyone,
									regardless of technical expertise or financial background.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
						<p className="max-w-[700px] text-muted-foreground">
							Meet the experts behind Fortifi.Ai
						</p>
					</div>
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								name: "Alex Johnson",
								role: "CEO & Founder",
								image: "/placeholder.svg?height=300&width=300",
								bio: "Blockchain expert with 10+ years in fintech",
							},
							{
								name: "Sarah Chen",
								role: "CTO",
								image: "/placeholder.svg?height=300&width=300",
								bio: "AI specialist and former Google engineer",
							},
							{
								name: "Michael Rodriguez",
								role: "Head of Security",
								image: "/placeholder.svg?height=300&width=300",
								bio: "Cybersecurity veteran with focus on blockchain",
							},
							{
								name: "Priya Sharma",
								role: "Chief Financial Officer",
								image: "/placeholder.svg?height=300&width=300",
								bio: "Former investment banker specializing in crypto markets",
							},
						].map((member) => (
							<div
								key={member.name}
								className="flex flex-col items-center space-y-4">
								<div className="overflow-hidden rounded-full">
									<img
										src={member.image || "/placeholder.svg"}
										alt={member.name}
										width={150}
										height={150}
										className="aspect-square object-cover"
									/>
								</div>
								<div className="space-y-2 text-center">
									<h3 className="text-xl font-bold">{member.name}</h3>
									<p className="text-sm text-green-600 dark:text-green-400 font-medium">
										{member.role}
									</p>
									<p className="text-sm text-muted-foreground">{member.bio}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
