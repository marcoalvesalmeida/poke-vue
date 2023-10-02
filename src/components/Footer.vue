<template>
    <footer class="bg-primary text-light">
        <p>Design in {{ new Date().getFullYear() }}</p>
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
</style>