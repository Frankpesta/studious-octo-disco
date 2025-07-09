import { useEffect, useRef } from "react";

interface TradingViewSymbol {
	proName: string;
	title: string;
}

interface TradingViewTickerTapeConfig {
	symbols: TradingViewSymbol[];
	colorTheme: "light" | "dark";
	isTransparent: boolean;
	displayMode: "adaptive" | "regular";
	locale: string;
}

const TradingViewTickerTape: React.FC = () => {
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!container.current) return;

		// Prevent multiple script injections
		if (container.current.childNodes.length > 0) return;

		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
		script.async = true;
		script.type = "text/javascript";

		const config: TradingViewTickerTapeConfig = {
			symbols: [
				{ proName: "COINBASE:BTCUSD", title: "Bitcoin" },
				{ proName: "COINBASE:ETHUSD", title: "Ethereum" },
				{ proName: "BINANCE:BNBUSDT", title: "Binance Coin" },
				{ proName: "COINBASE:XRPUSD", title: "XRP" },
				{ proName: "BINANCE:DOGEUSDT", title: "Dogecoin" },
				{ proName: "COINBASE:ADAUSD", title: "Cardano" },
				{ proName: "BINANCE:SOLUSDT", title: "Solana" },
				{ proName: "BINANCE:MATICUSDT", title: "Polygon" },
				{ proName: "BINANCE:DOTUSDT", title: "Polkadot" },
				{ proName: "BINANCE:AVAXUSDT", title: "Avalanche" },
				{ proName: "BINANCE:LTCUSDT", title: "Litecoin" },
				{ proName: "BINANCE:SHIBUSDT", title: "Shiba Inu" },
				{ proName: "BINANCE:ATOMUSDT", title: "Cosmos" },
				{ proName: "BINANCE:LINKUSDT", title: "Chainlink" },
				{ proName: "BINANCE:TRXUSDT", title: "Tron" },
				{ proName: "BINANCE:ALGOUSDT", title: "Algorand" },
				{ proName: "BINANCE:VETUSDT", title: "VeChain" },
				{ proName: "BINANCE:FTMUSDT", title: "Fantom" },
				{ proName: "BINANCE:AXSUSDT", title: "Axie Infinity" },
				{ proName: "BINANCE:NEARUSDT", title: "NEAR Protocol" },
				{ proName: "BINANCE:FLOWUSDT", title: "Flow" },
				{ proName: "BINANCE:EOSUSDT", title: "EOS" },
				{ proName: "BINANCE:XTZUSDT", title: "Tezos" },
			],
			colorTheme: "dark",
			isTransparent: false,
			displayMode: "regular",
			locale: "en",
		};

		script.innerHTML = JSON.stringify(config);

		container.current.appendChild(script);
	}, []);

	return <div ref={container} />;
};

export default TradingViewTickerTape;
