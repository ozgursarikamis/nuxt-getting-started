<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>

    <!-- output the page content -->
     <div>
        <slot />
     </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>