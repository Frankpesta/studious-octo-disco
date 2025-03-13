import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-background border-t">
			<div className="mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
				<div className="mt-8 md:order-1 md:mt-0">
					<div className="flex flex-row items-center justify-between mb-4">
						<Link
							href="/terms"
							className="text-muted-foreground hover:text-foreground">
							Terms of Service
						</Link>
						<Link
							href="/privacy"
							className="text-muted-foreground hover:text-foreground">
							Privacy Policy
						</Link>
					</div>
					<p className="text-center text-xs leading-5 text-muted-foreground">
						&copy; {new Date().getFullYear()} Fortifi.Ai. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
