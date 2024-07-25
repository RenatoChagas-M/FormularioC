<script setup></script>

<template>
    <body>
        <form class="formulario" action="">
            <slot></slot>
        </form>
    </body>
</template>

<style scoped>
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 90vh;
    }

    .formulario{
        width: 50%;
        height: 90%;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.185) 0px 12px 28px 0px, rgba(0, 0, 0, 0.048) 0px 2px 4px 0px, rgba(255, 255, 255, 0.021) 0px 0px 0px 1px inset;
    }
</style>
>>>>>>> main
