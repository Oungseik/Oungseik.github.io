<script lang="ts">
	import { fly } from "svelte/transition";
	let tabCondition = "education";
</script>

<section class="overflow-hidden px-4 py-14 pt-0 md:px-10 md:py-28 md:pt-0">
	<div class="mb-6 text-center">
		<h2 class="text-2xl font-medium md:text-4xl" id="experiences">Education &amp; Experiences</h2>
		<p class="text-slate-500 md:text-lg">My personal journey</p>
	</div>

	<div class="mx-auto mb-6 flex w-fit gap-4 text-slate-700">
		<button
			on:click={() => (tabCondition = "education")}
			class={`duration-400 flex items-center gap-1 transition-colors ${
				tabCondition === "education" && "text-sky-600"
			}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 48 48"
				class={tabCondition === "education" ? "text-sky-600" : "text-slate-500"}
				><g
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="4"
					><path d="m4 13l20-5l20 5l-20 5l-20-5Z" /><path
						d="M13 16v9.97S18 29 24 29s11-3.03 11-3.03V16M7 14v22m-3-2h6v6H4z"
					/></g
				></svg
			>
			Education
		</button>

		<button
			class={`duration-400 flex items-center gap-1 transition-colors ${
				tabCondition === "work" && "text-sky-600"
			}`}
			on:click={() => (tabCondition = "work")}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 16 16"
				class={tabCondition === "work" ? "text-sky-600" : "text-slate-500"}
				><path
					fill="currentColor"
					fill-rule="evenodd"
					d="M6 1a1.75 1.75 0 0 0-1.75 1.75V4H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.25V2.75A1.75 1.75 0 0 0 10 1H6Zm4.25 3V2.75A.25.25 0 0 0 10 2.5H6a.25.25 0 0 0-.25.25V4h4.5ZM3 5.5h10a.5.5 0 0 1 .5.5v1h-11V6a.5.5 0 0 1 .5-.5Zm-.5 3V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5H9V10H7V8.5H2.5Z"
					clip-rule="evenodd"
				/></svg
			>
			Work
		</button>
	</div>

	<div class="h-[440px] sm:h-64">
		{#if tabCondition === "work"}
			<div
				class="mx-auto grid max-w-3xl text-slate-700 md:mt-8 md:text-lg"
				in:fly={{ x: -100, duration: 500, delay: 300 }}
				out:fly={{ x: 100, duration: 300 }}
			>
				<div class="grid grid-cols-map gap-6">
					<div>
						<h3 class="font-xl text-slate-800">Volunteer Dveloper</h3>
						<p class="text-gray-600">GreenTech .Inc</p>
						<p class="mt-2 flex items-center gap-2 text-xs text-gray-600 md:text-base">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
								/></svg
							>
							2019 - 2022
						</p>
					</div>
					<div>
						<span class="inline-block h-3 w-3 rounded-full bg-sky-500 md:h-4 md:w-4" />
						<span
							class="block h-full w-[2px] -translate-y-[18px] translate-x-[5px] bg-sky-500 md:translate-x-[7px]"
						/>
					</div>
				</div>

				<div class="grid grid-cols-map gap-6">
					<div />
					<div>
						<span class="inline-block h-3 w-3 rounded-full bg-sky-500 md:h-4 md:w-4" />
						<span
							class="block h-full w-[2px] -translate-y-[18px] translate-x-[5px] bg-sky-500 md:translate-x-[7px]"
						/>
					</div>

					<div>
						<h3 class="font-xl text-slate-800">Front-end Dveloper</h3>
						<p class="text-gray-600">Qualy Myanmar</p>
						<p class="mt-2 flex items-center gap-2 text-xs text-gray-600 md:text-base">
							<svg
								class="shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
								/></svg
							>
							March 2022 - April 2023
						</p>
					</div>
				</div>

				<div class="grid grid-cols-map gap-6">
					<div>
						<h3 class="font-xl text-slate-800">Full-stack Dveloper</h3>
						<p class="text-gray-600">Kiosk Myanmar</p>
						<p class="mt-2 flex items-center gap-2 text-xs text-gray-600 md:text-base">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
								/></svg
							>
							April 2023 - Present
						</p>
					</div>
					<div>
						<span class="inline-block h-3 w-3 rounded-full bg-sky-500 md:h-4 md:w-4" />
						<span
							class="block h-full w-[2px] -translate-y-[18px] translate-x-[5px] bg-sky-500 md:translate-x-[7px]"
						/>
					</div>
				</div>
			</div>
		{:else}
			<div
				class="mx-auto grid max-w-2xl text-slate-700 md:mt-8 md:text-lg"
				in:fly={{ x: -100, duration: 500, delay: 300 }}
				out:fly={{ x: 100, duration: 300 }}
			>
				<div class="grid grid-cols-map gap-6">
					<div>
						<h3 class="font-xl text-slate-800">B.Sc (Mathematics)</h3>
						<p class="text-gray-600">Mawlamyine University</p>
						<p class="mt-2 flex items-center gap-2 text-xs text-gray-600 md:text-base">
							<svg
								class="shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
								/></svg
							>
							March 2022 - April 2023
						</p>
					</div>
					<div>
						<span class="inline-block h-3 w-3 rounded-full bg-sky-500 md:h-4 md:w-4" />
						<span
							class="block h-full w-[2px] -translate-y-[18px] translate-x-[5px] bg-sky-500 md:translate-x-[7px]"
						/>
					</div>
				</div>

				<div class="grid grid-cols-map gap-6">
					<div />
					<div>
						<span class="inline-block h-3 w-3 rounded-full bg-sky-500 md:h-4 md:w-4" />
						<span
							class="block h-full w-[2px] -translate-y-[18px] translate-x-[5px] bg-sky-500 md:translate-x-[7px]"
						/>
					</div>

					<div>
						<h3 class="font-xl text-slate-800">Basic Education High School (Thukhawaddy)</h3>
						<p class="text-gray-600">grade 1 to 11</p>
						<p class="mt-2 flex items-center gap-2 text-xs text-gray-600 md:text-base">
							<svg
								class="shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
								/></svg
							>
							2003 - 2014
						</p>
					</div>
				</div>

				<div class="grid grid-cols-map gap-6">
					<div>
						<h3 class="font-xl text-slate-800">Operating System and You: Becoming a Power User</h3>
						<p class="text-gray-600">Google (coursera)</p>
						<p class="mt-2 flex items-center gap-2 text-xs text-gray-600 md:text-base">
							<svg
								class="shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
								/></svg
							>
							Dec 2020 - Feb 2021
						</p>
					</div>
					<div>
						<span class="inline-block h-3 w-3 rounded-full bg-sky-500 md:h-4 md:w-4" />
						<span
							class="block h-full w-[2px] -translate-y-[18px] translate-x-[5px] bg-sky-500 md:translate-x-[7px]"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
