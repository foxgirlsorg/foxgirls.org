<script lang="ts">
    import { Code, Shield, Heart } from "@lucide/svelte";

    const features = [
        {
            icon: Code,
            title: "Open Source",
            desc: "(Almost) all our project are opensource and can be used by anyone."
        },
        {
            icon: Shield,
            title: "Independent",
            desc: "We are a self-funded team free from corporate influence, building tools we love."
        },
        {
            icon: Heart,
            title: "Believers",
            desc: "We believe in foxgirls supremacy."
        }
    ];
</script>

<section id="about">
    <div class="container">

        <div class="glass-card">

            <div class="glow-effect"></div>

            <div class="content-wrapper">
                <h2>
                    about <span class="highlight">us</span>
                </h2>

                <div class="divider"></div>

                <p class="description">
                    <span class="white-text">foxgirls.org</span> is a small dev "team". <br>
                    Just friends united by shitcoding and anime foxgirls.
                </p>

                <div class="features-grid">
                    {#each features as item}
                        <div class="feature-item">
                            <div class="icon-circle">
                                <svelte:component this={item.icon} size={20} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

    </div>
</section>

<style>
    :global(h2), :global(h3), :global(p) {
        margin: 0;
        padding: 0;
    }

    #about {
        padding: 4rem 1rem;
        position: relative;
    }

    .container {
        max-width: 56rem;
        margin: 0 auto;
    }

    .glass-card {
        background: rgba(15, 15, 17, 0.6);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 0.75rem;
        padding: 1.5rem;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .glow-effect {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 50%;
        background: rgba(222, 97, 97, 0.05);
        filter: blur(80px);
        border-radius: 9999px;
        pointer-events: none;
        z-index: 0;
    }

    .content-wrapper {
        position: relative;
        z-index: 10;
    }

    h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 300;
        color: white;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    .highlight {
        color: #de6161;
        font-weight: 400;
    }

    .white-text {
        color: white;
        font-weight: 500;
    }

    .divider {
        width: 3rem;
        height: 2px;
        background-color: #de6161;
        margin: 0 auto 1.5rem auto;
        border-radius: 9999px;
        opacity: 0.7;
    }

    .description {
        color: #d1d5db;
        font-size: 1rem;
        line-height: 1.625;
        font-weight: 300;
        margin-bottom: 2rem;
        max-width: 42rem;
        margin-left: auto;
        margin-right: auto;
    }

    .features-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .feature-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .icon-circle {
        width: 2.75rem;
        height: 2.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        color: #de6161;
        margin-bottom: 0.75rem;
        transition: background-color 0.3s ease, color 0.3s ease;
        flex-shrink: 0;
    }

    .feature-item:hover .icon-circle {
        background-color: #de6161;
        color: white;
    }

    .feature-item h3 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.25rem;
    }

    .feature-item p {
        font-size: 0.75rem;
        line-height: 1rem;
        color: #6b7280;
        font-weight: 300;
    }

    @media (min-width: 768px) {
        .glass-card {
            padding: 2.5rem;
        }

        h2 {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        .description {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        .features-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }
    }
</style>