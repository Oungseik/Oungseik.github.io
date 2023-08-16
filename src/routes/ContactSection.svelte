<script lang="ts">
	import emailjs from "@emailjs/browser";

	let successMsg = "";
	let errorMsg = "";

	async function sendEmail(e: SubmitEvent) {
		const form = e.target as HTMLFormElement;
		try {
			await emailjs.sendForm("service_nk5dhgb", "template_k1qpj1j", form, "tWiI3l18NqlU_wuOz");
			form.reset();
			successMsg = "Thank you for contact me. I will reply you as soon as possible.";
		} catch (err) {
			errorMsg = "Something went wrong. Please try again.";
			console.error(err);
		}
	}

	function clickHandler() {
		successMsg = "";
		errorMsg = "";
	}
</script>

<section class="px-4 pb-8 pt-0 md:px-10 md:pb-16">
	<div class="mx-auto max-w-3xl">
		<div class="mb-4 text-center">
			<h2 class="text-2xl font-medium md:text-4xl" id="contact">Contact</h2>
			<p class="text-slate-500 md:text-lg">Join with me and do great things</p>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<form on:submit|preventDefault={sendEmail} on:click={clickHandler}>
			<fieldset class="mx-auto flex max-w-md flex-col gap-4 sm:max-w-none">
				<div
					class={`relative h-10 text-sm font-medium sm:h-5 ${
						successMsg ? "text-sky-700" : errorMsg ? "py-2 text-red-600 sm:py-0" : ""
					}`}
				>
					<p class="pl-3">
						<span
							class={`absolute left-0 top-0 h-full w-1 ${
								successMsg ? "bg-sky-600" : errorMsg ? "bg-red-600" : ""
							}`}
						/>
						{successMsg || errorMsg}
					</p>
				</div>
				<input
					class="w-full rounded bg-slate-200 px-4 py-2"
					type="text"
					name="subject"
					placeholder="Subject"
					required
				/>
				<input
					class="w-full rounded bg-slate-200 px-4 py-2"
					type="text"
					name="name"
					placeholder="Your name"
					required
				/>
				<input
					class="w-full rounded bg-slate-200 px-4 py-2"
					type="email"
					name="email"
					placeholder="Your email"
					required
				/>
				<textarea
					class="w-full rounded bg-slate-200 px-4 py-2"
					name="message"
					id="message"
					rows="5"
					placeholder="Your message"
					required
				/>
				<button
					class="w-full rounded bg-slate-600 px-10 py-2 text-center text-slate-100 active:bg-slate-700 active:text-slate-200"
					>Send</button
				>
			</fieldset>
		</form>
	</div>
</section>
