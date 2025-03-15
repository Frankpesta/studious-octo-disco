"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			toast.success("Message sent successfully!");
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});
			setIsSubmitting(false);
		}, 1500);
	};

	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Contact Us
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl">
								Get in touch with our team for any questions, support, or to get
								started with Fortifi.Ai
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
						<Card>
							<CardHeader>
								<CardTitle>Send Us a Message</CardTitle>
								<CardDescription>
									Fill out the form below and we'll get back to you as soon as
									possible.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid gap-2">
										<Label htmlFor="name">Full Name</Label>
										<Input
											id="name"
											name="name"
											placeholder="John Doe"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="email">Email</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="john@example.com"
											value={formData.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="phone">Phone Number</Label>
										<Input
											id="phone"
											name="phone"
											placeholder="+1 (555) 000-0000"
											value={formData.phone}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											name="message"
											placeholder="How can we help you?"
											value={formData.message}
											onChange={handleChange}
											required
											className="min-h-[120px]"
										/>
									</div>
									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600"
										disabled={isSubmitting}>
										{isSubmitting ? (
											<span className="flex items-center gap-2">
												<svg
													className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24">
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
												</svg>
												Sending...
											</span>
										) : (
											<span className="flex items-center gap-2">
												<Send className="h-4 w-4" />
												Send Message
											</span>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
						<div className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Contact Information</CardTitle>
									<CardDescription>
										Reach out to us through any of these channels
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-start space-x-4">
										<Mail className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" />
										<div>
											<h3 className="font-medium">Email</h3>
											<p className="text-muted-foreground">
												support@fortifi.ai
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<Phone className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" />
										<div>
											<h3 className="font-medium">Phone</h3>
											<p className="text-muted-foreground">+1 (555) 123-4567</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<MapPin className="h-6 w-6 text-green-600 dark:text-green-400 mt-0.5" />
										<div>
											<h3 className="font-medium">Office</h3>
											<p className="text-muted-foreground">
												123 Blockchain Avenue
												<br />
												San Francisco, CA 94103
												<br />
												United States
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Business Hours</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2">
										<div className="flex justify-between">
											<span>Monday - Friday</span>
											<span>9:00 AM - 6:00 PM EST</span>
										</div>
										<div className="flex justify-between">
											<span>Saturday</span>
											<span>10:00 AM - 4:00 PM EST</span>
										</div>
										<div className="flex justify-between">
											<span>Sunday</span>
											<span>Closed</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
