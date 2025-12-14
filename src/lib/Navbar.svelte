<script lang="ts">
    import { Menu, X } from "@lucide/svelte";
    import { fade } from "svelte/transition";
    import Logo from "./Logo.svelte";

    let isScrolled = $state(false);
    let mobile = $state(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Team", href: "#team" }
    ] as const;

    const openMenu = () => (mobile = true);
    const closeMenu = () => (mobile = false);

    $effect(() => {
        document.body.style.overflow = mobile ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    });

    $effect(() => {
        const scrollHandler = () => {
            isScrolled = window.scrollY > 20;
        };

        window.addEventListener("scroll", scrollHandler, { passive: true });
        return () => window.removeEventListener("scroll", scrollHandler);
    });
</script>

<header class:scrolled={isScrolled}>
    <div class="container">
        <div class="logo">
            <Logo class="logo-icon" />
            <span class="title">foxgirls.org</span>
        </div>

        <nav class="desktop">
            {#each navLinks as link}
                <a href={link.href}>{link.name}</a>
            {/each}
        </nav>

        <button
                class="mobileButton"
                aria-label="Open menu"
                aria-expanded={mobile}
                on:click={openMenu}
        >
            <Menu size={26} />
        </button>
    </div>
</header>

<div
        class="mobileMenu"
        class:open={mobile}
        class:scrolled={isScrolled}
        aria-hidden={!mobile}
>
    {#if mobile}
        <button
                class="mobileCloseButton"
                aria-label="Close menu"
                on:click={closeMenu}
        >
            <X size={26} />
        </button>
        <div class="mobileMenuContent" transition:fade={{ duration: 200 }}>

            {#each navLinks as link}
                <a href={link.href} on:click={closeMenu}>
                    {link.name}
                </a>
            {/each}
        </div>
    {/if}
</div>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 50;
        --pad: 2rem;
        padding: var(--pad) 0;
        background: transparent;
        transition: background 0.45s ease, padding 0.45s ease;
    }

    header.scrolled {
        --pad: 1rem;
        background: rgba(15, 15, 17, 0.45);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        vertical-align: center;
    }
    .logo :global(.logo-icon) {
        height: 2rem;
        width: auto;
        color: #de6161;
        display: block;
    }

    .title {
        color: #de6161;
        font-size: 1.75rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 400;
        line-height: 1;
        margin-top: 0.2rem;
    }

    .desktop {
        display: none;
    }

    .desktop a {
        color: #ccc;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        text-decoration: none;
        transition: color 0.2s;
    }

    .desktop a:hover {
        color: #de6161;
    }

    .mobileButton {
        display: block;
        background: none;
        border: none;
        color: white;
        padding: 0.5rem;
        cursor: pointer;
    }

    .mobileMenu {
        position: fixed;
        inset: 0;
        z-index: 51;
        background: rgba(15, 15, 17, 0.45);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }

    .mobileMenu.open {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .mobileMenuContent {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    /* close button positioning — DEFAULT (not scrolled) */
    .mobileCloseButton {
        position: absolute;
        top: 2.5rem;
        right: 2rem;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: unset;
    }

    /* close button positioning — SCROLLED */
    .mobileMenu.scrolled .mobileCloseButton {
        top: 1.5rem;
        right: 2rem;
    }

    .mobileMenu a {
        color: #ccc;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.3em;
        text-decoration: none;
        transition: color 0.2s;
    }



    @media (min-width: 768px) {
        .desktop {
            display: flex;
            align-items: center;
            gap: 2.5rem;
        }

        .mobileButton {
            display: none;
        }
    }

</style>
