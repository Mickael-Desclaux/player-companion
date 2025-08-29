export default function Home() {
	return (
		<div className="p-4">
			<h1 className="text-center text-xl">🐉 Bonjour, voyageur !</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center p-4 gap-2">
				<div>
					<h2>📜 Character sheet</h2>
					<div>reader for imported PDF</div>
				</div>
				<div className="p-2 flex flex-col gap-2">
					<h2>🗒️ Notes</h2>
					<ul>
						<li>- Première note</li>
						<li>- Deuxième note</li>
						<li>- Troisième note</li>
						<li>- Quatrième note</li>
						<li>- Cinquième note</li>
					</ul>
				</div>
				<div>
					<h2>🎉 Mini-games</h2>
					<ul>
						<li>
							List of mini-games accessible only at the game master's will
						</li>
					</ul>
				</div>
				<div>
					<h2>🎯 Wheel of chaos</h2>
					<div>
						Websocket here, player should be able to add their proposition for
						the next action (one per player), and the wheel decides no matter
						how dumb (or amazing) the decision can be.
					</div>
				</div>
			</div>
		</div>
	);
}
