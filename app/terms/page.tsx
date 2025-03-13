export default function TermsOfService() {
	return (
		<div className="flex flex-col min-h-screen">
			<section className="relative py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Terms of Service
							</h1>
							<p className="max-w-[700px] text-muted-foreground md:text-xl">
								Last updated:{" "}
								{new Date().toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric",
								})}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6 max-w-3xl">
					<div className="prose dark:prose-invert max-w-none">
						<h2>1. Introduction</h2>
						<p>
							Welcome to Fortifi.Ai. These Terms of Service govern your use of
							our website, products, and services. By accessing or using
							Fortifi.Ai, you agree to be bound by these Terms.
						</p>

						<h2>2. Definitions</h2>
						<p>
							"Service" refers to the Fortifi.Ai website, stable wallet, and
							payment card services. "User," "You," and "Your" refer to the
							individual or entity using our Service. "Company," "We," "Us," and
							"Our" refer to Fortifi.Ai.
						</p>

						<h2>3. Account Registration</h2>
						<p>
							To use certain features of the Service, you may be required to
							register for an account. You agree to provide accurate, current,
							and complete information during the registration process and to
							update such information to keep it accurate, current, and
							complete.
						</p>

						<h2>4. Stable Wallet Service</h2>
						<p>
							Our stable wallet service aims to protect your capital from market
							fluctuations. However, we cannot guarantee complete protection
							against all market conditions. The effectiveness of our stability
							mechanisms may vary based on market volatility, liquidity, and
							other factors beyond our control.
						</p>

						<h2>5. Payment Card Service</h2>
						<p>
							Our payment card service allows you to spend cryptocurrency at
							merchants that accept Mastercard or Visa. The availability of this
							service may be subject to regional restrictions and regulatory
							requirements. Fees may apply for certain transactions, and
							exchange rates will be determined at the time of transaction.
						</p>

						<h2>6. Risks and Disclaimers</h2>
						<p>
							Cryptocurrency investments involve significant risk. Past
							performance is not indicative of future results. You should
							carefully consider your investment objectives, level of
							experience, and risk appetite before using our services. We do not
							provide investment advice, and nothing on our website should be
							construed as financial advice.
						</p>

						<h2>7. Intellectual Property</h2>
						<p>
							The Service and its original content, features, and functionality
							are and will remain the exclusive property of Fortifi.Ai and its
							licensors. The Service is protected by copyright, trademark, and
							other laws of both the United States and foreign countries.
						</p>

						<h2>8. Termination</h2>
						<p>
							We may terminate or suspend your account and bar access to the
							Service immediately, without prior notice or liability, under our
							sole discretion, for any reason whatsoever and without limitation,
							including but not limited to a breach of the Terms.
						</p>

						<h2>9. Limitation of Liability</h2>
						<p>
							In no event shall Fortifi.Ai, nor its directors, employees,
							partners, agents, suppliers, or affiliates, be liable for any
							indirect, incidental, special, consequential or punitive damages,
							including without limitation, loss of profits, data, use,
							goodwill, or other intangible losses, resulting from your access
							to or use of or inability to access or use the Service.
						</p>

						<h2>10. Changes to Terms</h2>
						<p>
							We reserve the right, at our sole discretion, to modify or replace
							these Terms at any time. If a revision is material, we will
							provide at least 30 days' notice prior to any new terms taking
							effect. What constitutes a material change will be determined at
							our sole discretion.
						</p>

						<h2>11. Contact Us</h2>
						<p>
							If you have any questions about these Terms, please contact us at
							support@fortifi.ai.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
