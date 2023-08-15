<script lang="ts">
	import AboutMeSection from "./AboutMeSection.svelte";
	import ContactSection from "./ContactSection.svelte";
	import ExperiencesSection from "./ExperiencesSection.svelte";
	import HeroSection from "./HeroSection.svelte";
	import ProjectsSection from "./ProjectsSection.svelte";
	import SkillsSection from "./SkillsSection.svelte";
	import ToTheTop from "./ToTheTop.svelte";

	import { onMount } from "svelte";
	import { pageInfo } from "$lib/store/pageInfoStore";

	onMount(() => {
		let isMobile = window.innerWidth < 640;
		let scrollPadding = isMobile ? 80 : 120;

		const scrollHandler = () => {
			$pageInfo.isPageTop = window.scrollY < 500;

			const sections = document.querySelectorAll("h2[id]") as NodeListOf<HTMLElement>;
			sections.forEach((section) => {
				const sectionHeight = section.offsetHeight;
				const sectionTop = section.offsetTop - scrollPadding;
				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					$pageInfo.activeSection = section.id;
				}
			});
		};

		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
			$pageInfo.activeSection = "";
		};
	});
</script>

<svelte:head>
	<meta
		name="description"
		content="Aung Thu Win's (Oung Seik Nyan's) personal website. Projects works, skills, how to contact and so on."
	/>
	<meta
		name="keywords"
		content="Aung Thu Win, Oung Seik Nyan, Aung Thu Win's Website, Oung Seik Nyan's Website, Aung Thu Win's skills"
	/>
	<meta property="og:title" content="Oung Seik Nyan's personal website" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://oungseik-github-io.vercel.app/" />
	<meta property="og:image" content="https://oungseik-github-io.vercel.app/images/og.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta
		property="og:image:alt"
		content="Hello! I'm Aung Thu Win (Oung Seik Nyan) I'm a Full-stack Developer, passionate in new programming languages, Linux and Mathematics."
	/>
	<meta
		property="og:description"
		content="Aung Thu Win, Oung Seik Nyan, Aung Thu Win's Website, Oung Seik Nyan's Website, Aung Thu Win's skills"
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://oungseik-github-io.vercel.app/" />
	<meta name="twitter:creator" content="Aung Thu Win (Oung Seik Nyan)" />
	<meta name="twitter:image" content="https://oungseik-github-io.vercel.app/images/og.jpg" />
	<meta
		name="twitter:image:alt"
		content="Hello! I'm Aung Thu Win (Oung Seik Nyan) I'm a Full-stack Developer, passionate in new programming languages, Linux and Mathematics."
	/>
</svelte:head>

<HeroSection />
<AboutMeSection />
<ExperiencesSection />
<ProjectsSection />
<SkillsSection />
<ContactSection />
<ToTheTop />
