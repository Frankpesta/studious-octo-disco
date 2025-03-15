"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Testimonial = {
	id: number;
	name: string;
	role: string;
	company: string;
	content: string;
	avatar: string;
};

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "CFO",
		company: "TechVentures Inc.",
		content:
			"Fortifi.Ai has completely transformed how we manage our crypto assets. The stable wallet feature saved us during the last market crash, protecting over 80% of our investment value.",
		avatar: "/placeholder.svg?height=100&width=100",
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Entrepreneur",
		company: "Blockchain Innovations",
		content:
			"I've been using the Fortifi Card for 6 months now, and it's been a game-changer. I can spend my crypto anywhere without worrying about tax implications or hidden fees.",
		avatar: "/placeholder.svg?height=100&width=100",
	},
	{
		id: 3,
		name: "Elena Rodriguez",
		role: "Investment Manager",
		company: "Capital Growth Partners",
		content:
			"As someone who manages crypto portfolios professionally, I can't recommend Fortifi.Ai enough. The stability mechanisms are truly innovative and have become an essential part of our risk management strategy.",
		avatar: "/placeholder.svg?height=100&width=100",
	},
	{
		id: 4,
		name: "David Thompson",
		role: "Retail Investor",
		company: "",
		content:
			"After losing money in previous market downturns, I was hesitant to get back into crypto. Fortifi.Ai's stable wallet gave me the confidence to invest again, knowing my capital is protected.",
		avatar: "/placeholder.svg?height=100&width=100",
	},
	{
		id: 5,
		name: "Priya Patel",
		role: "Digital Nomad",
		company: "",
		content:
			"The Fortifi Card has been essential for my lifestyle. Being able to access my crypto at ATMs worldwide without fees has made traveling so much easier. I'm never going back to traditional banking.",
		avatar: "/placeholder.svg?height=100&width=100",
	},
];

export function TestimonialSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const nextTestimonial = useCallback(() => {
		setActiveIndex((current) => (current + 1) % testimonials.length);
	}, []);

	const prevTestimonial = useCallback(() => {
		setActiveIndex(
			(current) => (current - 1 + testimonials.length) % testimonials.length
		);
	}, []);

	// Auto-scroll effect
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			nextTestimonial();
		}, 5000);

		return () => clearInterval(interval);
	}, [nextTestimonial, isPaused]);

	return (
		<section className="py-16 md:py-24 overflow-hidden">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
					<div className="inline-block rounded-lg bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm text-green-600 dark:text-green-400">
						Testimonials
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						What Our Users Say
					</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl">
						Discover how Fortifi.Ai is helping users protect and spend their
						crypto
					</p>
				</div>

				<div
					className="relative mx-auto max-w-5xl"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}>
					{/* Testimonial Cards */}
					<div className="relative h-[400px] md:h-[300px] overflow-hidden">
						{testimonials.map((testimonial, index) => (
							<Card
								key={testimonial.id}
								className={cn(
									"absolute inset-0 w-full bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0 p-6 md:p-10 transition-all duration-500 ease-in-out",
									{
										"translate-x-0 opacity-100 z-10": index === activeIndex,
										"translate-x-full opacity-0 z-0":
											index === (activeIndex + 1) % testimonials.length,
										"-translate-x-full opacity-0 z-0":
											index ===
											(activeIndex - 1 + testimonials.length) %
												testimonials.length,
										"translate-x-full opacity-0.5 z-0":
											index !== activeIndex &&
											index !== (activeIndex + 1) % testimonials.length &&
											index !==
												(activeIndex - 1 + testimonials.length) %
													testimonials.length,
									}
								)}>
								<div className="flex flex-col h-full justify-between">
									<div className="mb-6">
										<Quote className="h-10 w-10 text-green-600 dark:text-green-400 mb-4 opacity-50" />
										<p className="text-lg md:text-xl italic">
											{testimonial.content}
										</p>
									</div>
									<div className="flex items-center">
										<div className="mr-4 overflow-hidden rounded-full border-2 border-green-200 dark:border-green-800">
											<img
												src={testimonial.avatar || "/placeholder.svg"}
												alt={testimonial.name}
												width={60}
												height={60}
												className="h-[60px] w-[60px] object-cover"
											/>
										</div>
										<div className="text-left">
											<h3 className="font-semibold">{testimonial.name}</h3>
											<p className="text-sm text-green-600 dark:text-green-400">
												{testimonial.role}
												{testimonial.company && `, ${testimonial.company}`}
											</p>
										</div>
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* Navigation Controls */}
					<div className="flex justify-center mt-6 gap-2">
						<Button
							variant="outline"
							size="icon"
							className="rounded-full border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30"
							onClick={prevTestimonial}
							aria-label="Previous testimonial">
							<ChevronLeft className="h-5 w-5 text-green-600 dark:text-green-400" />
						</Button>

						<div className="flex items-center gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									className={cn(
										"w-2 h-2 rounded-full transition-all",
										index === activeIndex
											? "bg-green-600 dark:bg-green-400 w-4"
											: "bg-green-200 dark:bg-green-800"
									)}
									onClick={() => setActiveIndex(index)}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>

						<Button
							variant="outline"
							size="icon"
							className="rounded-full border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30"
							onClick={nextTestimonial}
							aria-label="Next testimonial">
							<ChevronRight className="h-5 w-5 text-green-600 dark:text-green-400" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
