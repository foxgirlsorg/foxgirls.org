<script lang="ts">
    import { ArrowUpRight, Github, Send} from "@lucide/svelte";
    import Logo from "./Logo.svelte";

    const platforms = [
        {
            id: 'foxgirls',
            title: 'Foxgirls.org',
            description: 'Main Portal',
            link: 'https://foxgirls.org',
            icon: null
        },
        {
            id: 'telegram',
            title: 'Telegram',
            description: 'Channel',
            link: 'https://t.me/foxgirlsorg',
            icon: Send
        },
        {
            id: 'github',
            title: 'GitHub',
            description: 'Open Source',
            link: 'https://github.com/foxgirlsorg',
            icon: Github
        }
    ];
</script>

<section id="platforms">
    <div class="container">

        <div class="separator">
            <div class="line"></div>
            <h2>Platforms & Socials</h2>
            <div class="line"></div>
        </div>

        <div class="grid">
            {#each platforms as project}
                <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card"
                >
                    <div class="bg-gradient"></div>

                    <div class="content">
                        <div class="icon-wrapper">
                            {#if project.icon}
                                <svelte:component this={project.icon} size={24} />
                            {:else}
                                <Logo class="logo-card-icon" />
                            {/if}
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>

                    <div class="arrow-icon">
                        <ArrowUpRight size={16} />
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    :global(h2), :global(h3), :global(p) {
        margin: 0;
        padding: 0;
    }

    #platforms {
        padding: 4rem 1.5rem;
        position: relative;
    }

    .container {
        max-width: 72rem;
        margin: 0 auto;
    }

    .separator {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2.5rem;
    }

    .line {
        height: 1px;
        flex-grow: 1;
        background-color: rgba(255, 255, 255, 0.1);
    }

    h2 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 700;
        color: #6b7280;
        letter-spacing: 0.4em;
        text-transform: uppercase;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .card {
        position: relative;
        height: 8rem;
        overflow: hidden;
        border-radius: 0.5rem;
        background-color: rgba(15, 15, 17, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(12px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.5s ease;
    }

    .card:hover {
        border-color: rgba(222, 97, 97, 0.4);
    }

    .bg-gradient {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top right, transparent, rgba(255, 255, 255, 0));
        transition: all 0.5s ease;
    }

    .card:hover .bg-gradient {
        background: linear-gradient(to top right, transparent, rgba(222, 97, 97, 0.05));
    }

    .content {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1rem;
    }

    .icon-wrapper {
        margin-bottom: 0.75rem;
        color: #9ca3af;
        transition: color 0.15s ease;
    }

    .card:hover .icon-wrapper {
        color: white;
    }

    h3 {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 500;
        color: white;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        transition: color 0.3s ease;
    }

    .card:hover h3 {
        color: #de6161;
    }

    p {
        font-size: 0.75rem;
        line-height: 1rem;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-top: 0.25rem;
    }

    .arrow-icon {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        color: rgba(255, 255, 255, 0.1);
        transition: all 0.5s ease;
    }

    .card:hover .arrow-icon {
        color: rgba(222, 97, 97, 0.8);
        transform: translate(0.125rem, -0.125rem);
    }

    :global(.logo-card-icon) {
        height: 24px;
        width: auto;

    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>