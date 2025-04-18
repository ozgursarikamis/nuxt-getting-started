<template>
    <header>
        <nav>
            <ul class="horizontal-list">
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

<style>
    .router-link-exact-active {
        color: #12b488;
    }

    .horizontal-list {
        list-style: none;
        display: inline-flex;

        li {
            margin-right: .5rem;
        }
    }
</style>