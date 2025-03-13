import { ModeToggle } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<ModeToggle />
			<h1>Testing the mic</h1>
			<Button>Hello World</Button>
		</div>
	);
}
