<script lang="ts">
	const projects = [
		{
			name: "Legacy Cloud",
			image: "/images/legacy-cloud.jpg",
			url: "https://legacy.ne.jp/legacy-cloud/",
			description:
				"Website for japanese company, developed with my team while working in Qualy Myanmar. Power by the WordPress.",
		},
		{
			name: "pari",
			image: "/images/pari.jpg",
			url: "https://www.pari.go.jp/",
			description: "Website for japanese research institude, power by the Movable Type CMS system.",
		},
		{
			name: "numazaki",
			image: "/images/numazaki.jpg",
			url: "https://shinyukai-r.or.jp/numazaki/",
			description:
				"Website for japanese hospital, developed with my team while working in Qualy Myanmar. Power by the WordPress.",
		},
		{
			name: "chat-app",
			image: "/images/chat-app.png",
			url: "https://github.com/Oungseik/chat-app",
			description:
				"Simple chat app, with AplineJs with in the front-end and back-end with MongoDB, Express and Socket.io",
		},
	];
</script>

<section class="overflow-hidden px-4 py-14 pt-0 md:px-10 md:py-20">
	<div class="mx-auto max-w-3xl">
		<div class="mb-6 text-center">
			<h2 class="text-2xl font-medium md:text-4xl" id="projects">Projects &amp; Portfolio</h2>
			<p class="text-slate-500 md:text-lg">Things I've done</p>
		</div>

		<ul class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each projects as project (project.name)}
				<li class="group overflow-hidden rounded-lg bg-slate-100 shadow-md">
					<a href={project.url}>
						<div class="h-36 w-64 overflow-hidden">
							<img
								class="transition duration-300 object-fit group-hover:scale-110"
								src={project.image}
								alt={project.name}
								width="250"
								height="140"
								loading="lazy"
							/>
						</div>
						<div class="font-sm px-4 py-4">
							{project.description}
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
