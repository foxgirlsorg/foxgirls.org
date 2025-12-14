<script>
    const currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="copyright">
        foxgirls.org © {currentYear}
    </div>
</footer>

<style>
    footer {
        padding: 10rem 0 2rem;
        text-align: center;
        position: relative;
        z-index: 10;
        background: linear-gradient(to top, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 0) 100%);
    }

    .copyright {
        font-size: 10px;
        color: #9ca3af;
        font-weight: 300;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }
</style>