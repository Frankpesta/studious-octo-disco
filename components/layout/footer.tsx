import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-background border-t">
			<div className="mx-auto max-w-7xl px-6 py-8  lg:px-8">
				<div className="flex flex-row justify-between mb-4">
					<Link
						href="/terms"
						className="text-muted-foreground hover:text-foreground">
						Terms of Service
					</Link>
					<Link
						href="/privacy"
						className="text-muted-foreground hover:text-foreground text-center">
						Privacy Policy
					</Link>
				</div>
				<p className="text-center text-xs leading-5 text-muted-foreground">
					&copy; {new Date().getFullYear()} Astrologers Fund Inc.. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
