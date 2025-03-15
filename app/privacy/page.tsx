export default function PrivacyPolicy() {
	return (
		<div className="flex flex-col min-h-screen">
			<section className="relative py-20 md:py-32 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 -z-10" />
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Privacy Policy
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
							At Fortifi.Ai, we respect your privacy and are committed to
							protecting your personal data. This Privacy Policy explains how we
							collect, use, disclose, and safeguard your information when you
							use our website, stable wallet, and payment card services.
						</p>

						<h2>2. Information We Collect</h2>
						<p>
							We may collect several types of information from and about users
							of our Services, including:
						</p>
						<ul>
							<li>
								Personal identifiers such as name, email address, phone number,
								and postal address
							</li>
							<li>
								Financial information such as cryptocurrency wallet addresses
								and transaction history
							</li>
							<li>
								Identity verification information as required by applicable
								regulations
							</li>
							<li>
								Device and usage information collected automatically when you
								use our Services
							</li>
						</ul>

						<h2>3. How We Use Your Information</h2>
						<p>
							We may use the information we collect about you for various
							purposes, including:
						</p>
						<ul>
							<li>Providing, maintaining, and improving our Services</li>
							<li>Processing transactions and sending related information</li>
							<li>Verifying your identity and preventing fraud</li>
							<li>
								Communicating with you about our Services, updates, and
								promotions
							</li>
							<li>Complying with legal obligations and enforcing our terms</li>
						</ul>

						<h2>4. Information Sharing and Disclosure</h2>
						<p>We may share your information with:</p>
						<ul>
							<li>Service providers who perform services on our behalf</li>
							<li>
								Financial partners necessary to provide our payment card
								services
							</li>
							<li>Legal and regulatory authorities when required by law</li>
							<li>
								Business partners with your consent or as disclosed at the time
								of collection
							</li>
						</ul>

						<h2>5. Data Security</h2>
						<p>
							We implement appropriate technical and organizational measures to
							protect your personal information against unauthorized access,
							alteration, disclosure, or destruction. However, no method of
							transmission over the Internet or electronic storage is 100%
							secure, and we cannot guarantee absolute security.
						</p>

						<h2>6. Your Rights and Choices</h2>
						<p>
							Depending on your location, you may have certain rights regarding
							your personal information, including:
						</p>
						<ul>
							<li>Access to your personal information</li>
							<li>Correction of inaccurate or incomplete information</li>
							<li>Deletion of your personal information</li>
							<li>Restriction or objection to processing</li>
							<li>Data portability</li>
						</ul>

						<h2>7. International Data Transfers</h2>
						<p>
							Your information may be transferred to, and processed in,
							countries other than the country in which you reside. These
							countries may have data protection laws that are different from
							the laws of your country. We take appropriate safeguards to
							require that your personal information will remain protected in
							accordance with this Privacy Policy.
						</p>

						<h2>8. Children's Privacy</h2>
						<p>
							Our Services are not intended for children under the age of 18. We
							do not knowingly collect personal information from children under
							18. If you are a parent or guardian and believe your child has
							provided us with personal information, please contact us.
						</p>

						<h2>9. Changes to This Privacy Policy</h2>
						<p>
							We may update this Privacy Policy from time to time. We will
							notify you of any changes by posting the new Privacy Policy on
							this page and updating the "Last updated" date at the top of this
							policy.
						</p>

						<h2>10. Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please
							contact us at privacy@fortifi.ai.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
