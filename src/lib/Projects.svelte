<script lang="ts">
    import { Layout, Users, Heart, FileText, ExternalLink } from "@lucide/svelte";

    interface ProjectItem {
        id: string;
        title: string;
        type: string;
        description: string;
        imageUrl: string;
        mainLink: string;
        icon: any;
    }

    const projectsList: ProjectItem[] = [
        {
            id: 'foxtrack',
            title: 'Foxtrack',
            type: 'website',
            icon: Layout,
            description: "Our fork of Yamtrack. An open-source media tracker for your anime and manga progress.",
            imageUrl: '/foxtrack.jpg',
            mainLink: 'https://track.foxgirls.org/',
        },
        {
            id: 'redtail',
            title: 'Redtail',
            type: 'Team',
            icon: Users,
            description: "Our manga translation team. High-quality translation, cleaning and typesetting.",
            imageUrl: '/redtail.jpg',
            mainLink: 'https://redtail.foxgirls.org/',
        },
        {
            id: 'foxgirls-club',
            title: 'Foxgirls.club',
            type: 'API',
            icon: Heart,
            description: "An API full of foxgirls.",
            imageUrl: '/foxgirlsclub.jpg',
            mainLink: 'https://foxgirls.club/',
        }
    ];
</script>

<section id="projects">
    <div class="container">

        <div class="header">
            <div>
                <h2>
                    our <span class="highlight">projects</span>
                </h2>
            </div>
            <div class="subtitle">
                Explore our universe
            </div>
        </div>

        <div class="projects-list">
            {#each projectsList as item}
                <a
                        href={item.mainLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-card"
                >
                    <div class="bg-image-wrapper">
                        <img src={item.imageUrl} alt={item.title} />
                        <div class="overlay"></div>
                    </div>

                    <div class="content">
                        <div class="info-side">
                            <div class="meta-tag">
                                <svelte:component this={item.icon} size={16} />
                                <span>{item.type}</span>
                            </div>

                            <h3>{item.title}</h3>

                            <p class="description">{item.description}</p>
                        </div>

                        <div class="action-side">
                            <div class="action-btn">
                                <ExternalLink size={18} />
                            </div>
                        </div>
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

    #projects {
        padding: 6rem 1.5rem;
        position: relative;
    }

    .container {
        max-width: 72rem;
        margin: 0 auto;
    }

    .header {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 1rem;
    }

    h2 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 300;
        color: white;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    .highlight {
        color: #de6161;
        font-weight: 400;
    }

    .subtitle {
        display: none;
        color: #6b7280;
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }

    .projects-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .project-card {
        position: relative;
        height: 10rem;
        width: 100%;
        overflow: hidden;
        border-radius: 0.5rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: border-color 0.5s ease;
    }

    .project-card:hover {
        border-color: rgba(222, 97, 97, 0.5);
    }

    .bg-image-wrapper {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .bg-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        transition: transform 0.7s ease-out;
    }

    .project-card:hover img {
        transform: scale(1.05);
    }

    .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to right, #0f0f11 0%, rgba(15, 15, 17, 1) 40%, transparent 100%);
        transition: opacity 0.5s ease;
        opacity: 0.9;
    }

    .project-card:hover .overlay {
        opacity: 0.8;
    }

    .content {
        position: relative;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 1.5rem;
    }

    .info-side {
        max-width: 42rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: transform 0.5s ease;
    }

    .project-card:hover .info-side {
        transform: translateX(1rem);
    }

    .meta-tag {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
        color: #de6161;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    h3 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 300;
        color: white;
        margin-bottom: 0.5rem;
        transition: color 0.3s ease;
    }

    .project-card:hover h3 {
        color: #de6161;
    }

    p {
        color: #9ca3af;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 1.625;
        max-width: 32rem;
    }

    .action-side {
        display: none;
        opacity: 0;
        transform: translateX(2.5rem);
        transition: all 0.5s ease;
        transition-delay: 0.075s;
    }

    .project-card:hover .action-side {
        opacity: 1;
        transform: translateX(0);
    }

    .action-btn {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 9999px;
        border: 1px solid rgba(222, 97, 97, 0.3);
        background: rgba(222, 97, 97, 0.1);
        color: #de6161;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .project-card:hover .action-btn {
        background: #de6161;
        color: white;
    }

    .description {
        max-width: 70%;
    }

    @media (min-width: 768px) {
        h2 {
            font-size: 3rem;
            line-height: 1;
        }

        .subtitle { display: block; }

        .project-card { height: 13rem; }

        .content {
            padding: 0 2.5rem;
            flex-direction: row;
        }

        .action-side { display: block; }

        h3 {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        .description {
            max-width: unset;
        }
    }
</style>