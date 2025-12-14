<script lang="ts">
    import { Github, Send, Mail, ChevronDown } from "@lucide/svelte";
    import { fly } from "svelte/transition";

    const socialLinks = [
        {
            href: "https://t.me/foxgirlsorg",
            icon: Send,
            label: "Telegram",
            external: true
        },
        {
            href: "https://github.com/foxgirlsorg",
            icon: Github,
            label: "GitHub",
            external: true
        },
        {
            href: "mailto:contact@foxgirls.org",
            icon: Mail,
            label: "Email",
            external: false
        }
    ];
</script>

<section id="home">
    <div
            class="content-wrapper"
            in:fly={{ y: 20, duration: 800, delay: 200 }}
    >
        <h1>
            FOXGIRLS.ORG
        </h1>

        <div class="social-links">
            {#each socialLinks as link}
                <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        class="social-item"
                        aria-label={link.label}
                >
                    <div class="icon-box">
                        <svelte:component this={link.icon} size={24} />
                    </div>
                </a>
            {/each}
        </div>
    </div>

    <a href="#about" class="scroll-indicator" aria-label="Scroll down">
        <ChevronDown size={24} />
    </a>
</section>

<style>
    #home {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 1.5rem;
        text-align: center;
        overflow: hidden;
    }

    .content-wrapper {
        position: relative;
        z-index: 10;
        max-width: 56rem;
        width: 100%;
    }

    h1 {
        color: #de6161;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 1;
        margin-bottom: 2rem;
        font-size: 3rem;
    }

    /* Restored the highlight class so .ORG is red */
    .highlight {
        color: #de6161;
        font-weight: 400;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1rem;
    }

    .social-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
    }

    .icon-box {
        padding: 0.75rem;
        border-radius: 9999px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #9ca3af;
        backdrop-filter: blur(4px);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Unified Hover Effect for all items */
    .social-item:hover .icon-box {
        color: #de6161;
        border-color: rgba(222, 97, 97, 0.5);
    }

    .scroll-indicator {
        position: absolute;
        bottom: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
        color: #6b7280;
        transition: color 0.2s ease;
        animation: bounce 1s infinite;
    }

    .scroll-indicator:hover {
        color: white;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translate(-50%, -25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
            transform: translate(-50%, 0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
    }

    @media (min-width: 768px) {
        h1 { font-size: 4.5rem; }
    }

    @media (min-width: 1024px) {
        h1 { font-size: 6rem; }
    }
</style>