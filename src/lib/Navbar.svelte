<script lang="ts">
    import { Globe, Menu, X } from "@lucide/svelte";
    import { fade } from "svelte/transition";
    import Logo from "./Logo.svelte";
    import { LOCALES, locale, t } from "./i18n";

    let isScrolled = $state(false);
    let mobile = $state(false);
    let mobileLanguageOpen = $state(false);

    const navLinks = $derived([
        { name: $t.navbar.home, href: "#" },
        { name: $t.navbar.about, href: "#about" },
        { name: $t.navbar.projects, href: "#projects" },
        { name: $t.navbar.team, href: "#team" }
    ] as const);

    const languageLabelMap = $derived({
        en: $t.navbar.english,
        ru: $t.navbar.russian,
        uk: $t.navbar.ukrainian
    } as const);

    const openMenu = () => (mobile = true);
    const closeMenu = () => (mobile = false);
    const toggleMobileLanguageMenu = () => {
        mobileLanguageOpen = !mobileLanguageOpen;
    };

    $effect(() => {
        document.body.style.overflow = mobile ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    });

    $effect(() => {
        if (mobile) {
            mobileLanguageOpen = false;
        }
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
            <div class="languageSwitch" role="group" aria-label={$t.navbar.languageSwitcherLabel}>
                {#each LOCALES as option}
                    <button
                            class="langButton"
                            class:active={$locale === option}
                            type="button"
                            aria-pressed={$locale === option}
                            aria-label={languageLabelMap[option]}
                            onclick={() => locale.set(option)}
                    >
                        {option.toUpperCase()}
                    </button>
                {/each}
            </div>
        </nav>

        <div class="controls">
            <div class="mobileLanguageMenu">
                <button
                        class="mobileButton"
                        type="button"
                        aria-label={$t.navbar.languageSwitcherLabel}
                        aria-expanded={mobileLanguageOpen}
                        onclick={toggleMobileLanguageMenu}
                >
                    <Globe size={26} />
                </button>

                {#if mobileLanguageOpen}
                    <div
                            class="languageSwitch mobileLanguageSwitch"
                            role="group"
                            aria-label={$t.navbar.languageSwitcherLabel}
                            transition:fade={{ duration: 150 }}
                    >
                        {#each LOCALES as option}
                            <button
                                    class="langButton"
                                    class:active={$locale === option}
                                    type="button"
                                    aria-pressed={$locale === option}
                                    aria-label={languageLabelMap[option]}
                                    onclick={() => {
                                        locale.set(option);
                                        mobileLanguageOpen = false;
                                    }}
                            >
                                {option.toUpperCase()}
                            </button>
                        {/each}
                    </div>
                {/if}
            </div>

            <button
                    class="mobileButton"
                    aria-label={$t.navbar.openMenu}
                    aria-expanded={mobile}
                    onclick={openMenu}
            >
                <Menu size={26} />
            </button>
        </div>
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
                aria-label={$t.navbar.closeMenu}
                onclick={closeMenu}
        >
            <X size={26} />
        </button>
        <div class="mobileMenuContent" transition:fade={{ duration: 200 }}>

            {#each navLinks as link}
                <a href={link.href} onclick={closeMenu}>
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

    .controls {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        margin-left: auto;
    }



    .languageSwitch {
        display: inline-flex;
        margin-top: -0.08rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 9999px;
        background: rgba(15, 15, 17, 0.6);
        backdrop-filter: blur(8px);
        overflow: hidden;
        transition: border-color 0.2s ease, background-color 0.2s ease;
    }

    .languageSwitch:hover {
        border-color: rgba(222, 97, 97, 0.45);
        background: rgba(18, 18, 22, 0.85);
    }

    .langButton {
        border: none;
        background: transparent;
        color: #9ca3af;
        min-width: 2.7rem;
        height: 2rem;
        padding: 0 0.6rem;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        cursor: pointer;
        transition: color 0.2s ease, background-color 0.2s ease;
    }

    .langButton + .langButton {
        border-left: 1px solid rgba(255, 255, 255, 0.08);
    }

    .langButton:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.04);
    }

    .langButton.active {
        color: #fff;
        background: rgba(222, 97, 97, 0.28);
    }

    .langButton:focus-visible {
        outline: none;
        box-shadow: inset 0 0 0 1px rgba(222, 97, 97, 0.85);
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
        padding: 0 0.5rem;
        height: 26px;
        cursor: pointer;
    }

    .mobileLanguageMenu {
        position: relative;
        display: inline-flex;
    }


    .mobileLanguageSwitch {
        position: absolute;
        left: 50%;
        top: calc(100% + 0.5rem);
        transform: translateX(-50%);
        margin-top: 0;
        z-index: 60;
        background: rgba(15, 15, 17, 0.92);
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

        .controls {
            display: none;
        }

        .langButton {
            min-width: 2.95rem;
        }
    }

</style>
