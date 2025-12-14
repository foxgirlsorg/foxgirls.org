<script lang="ts">
    import { Send, Mail, Globe } from '@lucide/svelte';

    interface TeamMember {
        id: string;
        name: string;
        avatarUrl: string;
        telegram?: string;
        email?: string;
        website?: string;
    }

    const teamMembers: TeamMember[] = [
        {
            id: 'itsolegdm',
            name: 'ItsOlegDm',
            avatarUrl: '/pfp_itsolegdm.png',
            telegram: 'https://t.me/itsolegdm',
            email: 'itsolegdm@foxgirls.org',
            website: 'https://itsolegdm.com'
        },
        {
            id: 'fustie',
            name: 'Fustie',
            avatarUrl: '/pfp_fustie.jpg',
            telegram: 'https://t.me/fluidrl',
            email: 'fustie@foxgirls.org',
            website: 'https://fustie.dev'
        }
    ];
</script>

<section id="team" class="team-section">
    <div class="container">

        <div class="header">
            <div>
                <h2>
                    our <span class="highlight">Team</span>
                </h2>
            </div>
        </div>

        <div class="grid">
            {#each teamMembers as member (member.id)}
                <div class="card">

                    <div class="avatar-wrapper">
                        <img
                                src={member.avatarUrl}
                                alt={member.name}
                        />
                    </div>

                    <div class="info">

                        <h3>{member.name}</h3>

                        <div class="socials">
                            {#if member.telegram}
                                <a
                                        href={member.telegram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Telegram"
                                >
                                    <Send size={18} />
                                </a>
                            {/if}

                            {#if member.email}
                                <a
                                        href={`mailto:${member.email}`}
                                        title="Email"
                                >
                                    <Mail size={18} />
                                </a>
                            {/if}

                            {#if member.website}
                                <a
                                        href={member.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Website"
                                >
                                    <Globe size={18} />
                                </a>
                            {/if}
                        </div>

                    </div>

                </div>
            {/each}
        </div>

    </div>
</section>

<style>
    .team-section {
        padding: 6rem 1rem;
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

    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }

    .card {
        position: relative;
        display: flex;
        align-items: center;
        background-color: rgba(20, 20, 20, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(12px);
        border-radius: 0.75rem;
        overflow: hidden;
        padding: 0.5rem 1.5rem;
        width: 100%;
        max-width: 28rem;
        min-height: 140px;
        transition: all 0.3s ease;
    }

    @media (min-width: 768px) {
        .card {
            width: calc(50% - 12px);
        }
    }

    @media (min-width: 1024px) {
        .card {
            width: calc(33.333% - 16px);
        }
    }

    .card:hover {
        border-color: rgba(222, 97, 97, 0.3);
    }

    .avatar-wrapper {
        position: relative;
        width: 5rem;
        height: 5rem;
        flex-shrink: 0;
        border-radius: 50%;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transition: border-color 0.3s;
    }

    .card:hover .avatar-wrapper {
        border-color: rgba(222, 97, 97, 0.5);
    }

    .avatar-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .info {
        margin-left: 1.25rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .info h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        letter-spacing: 0.025em;
        line-height: 1.25;
        margin: 0;
        transition: color 0.3s;
    }

    .card:hover .info h3 {
        color: #de6161;
    }

    .socials {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.75rem;
        padding-top: 0.75rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .socials a {
        color: #6b7280;
        padding: 0.25rem;
        margin-left: -0.25rem;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .socials a:not(:first-child) {
        margin-left: 0;
    }

    .socials a:hover {
        color: #de6161;
    }
    @media (min-width: 768px) {
        h2 {
            font-size: 3rem;
            line-height: 1;
        }
    }
</style>