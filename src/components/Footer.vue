<template>
    <footer class="bg-primary text-light">
        <p>Developed by <a href="https://github.com/marcoalvesalmeida" target="_blank"> Marco Almeida </a> in {{ new Date().getFullYear() }}</p>
    </footer>
</template>

<style>
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
    }

    footer a {
        text-decoration: none;
        color: #FFFFFF;
        text-shadow: #FFFFFF 0.1em 0.1em 0.2em
    }
</style>