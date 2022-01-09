<template>
  <div class="font-sans text-gray-900">
    <header class="flex items-center border-b border-gray-900/20">
      <div class="flex items-center justify-between flex-1 pl-20 pr-4">
        <a href="">
          <LogoIcon />
        </a>
        <nav
          class="flex items-center space-x-10 text-sm uppercase font-medium text-gray-900"
        >
          <a
            v-for="item in menu"
            :key="item"
            class="py-1 hover:border-b hover:border-gray-900"
            href="#"
            >{{ item }}</a
          >
        </nav>
        <div class="flex items-center">
          <button class="h-16 px-6">
            <MenuIcon />
          </button>
          <button class="h-16 px-6">
            <SearchIcon />
          </button>
        </div>
      </div>
      <button
        class="flex items-center justify-center h-16 px-6 border-l border-gray-900/20"
      >
        <CartIcon />
      </button>
    </header>
    <main class="pt-10 pb-12 pl-20">
      <button>
        <ArrowLeftIcon />
      </button>
      <div class="flex">
        <div class="flex flex-col w-1/2">
          <div class="max-w-md">
            <div class="flex items-center text-sm pt-9">
              <span class="text-gray-900/40">Char&nbsp;</span>
              <span>/ Meryl Lounge Chair</span>
            </div>
            <div class="pt-10">
              <h1 class="text-4xl font-bold tracking-wide">Meryl Lounge Chair</h1>
            </div>
            <div class="flex items-center justify-between pt-4">
              <span class="text-3xl">$149.99</span>
              <div class="flex items-center">
                <div class="flex space-x-px">
                  <StarIcon v-for="i in 5" :key="i" />
                </div>
                <div class="pl-2 leading-none">
                  4.6 / 5.0 <span class="text-gray-900/40">(556)</span>
                </div>
              </div>
            </div>
            <p class="pt-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur esse velit hic veritatis tempora quaerat rerum magni minus itaque molestias.</p>
            <div class="pt-8 flex space-x-4">
              <button class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"></button>
              <button class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"></button>
              <button class="w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20"></button>
              <button class="w-5 h-5 rounded-full bg-[#cba5a5] hover:ring-4 hover:ring-gray-900/20"></button>
            </div>
            <div class="flex space-x-6 pt-9">
              <div class="flex items-center border rounded-sm border-gray-900/30">
                <button @click="count--" class="p-4">
                  <MinusIcon />
                </button>
                <input v-model="count" type="text" class="w-16 h-full text-center outline-none" />
                <button @click="count++" class="p-4">
                  <PlusIcon />
                </button>
              </div>
              <button class="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600">
                Add to cart
              </button>
            </div>
            <div class="pt-8">
              Free 2-5 day shipping • Tool-free assembly • 30-day trial
            </div>
            <div class="flex items-center justify-between pt-12">
              <button class="flex items-center px-4 py-2 space-x-2 text-teal-500 hover:text-teal-600">
                <HeartIcon class="stroke-current" />
                <span>Add to Wishlist</span>
              </button>
              <div class="flex items-center space-x-6">
                <button><FacebookIcon class="w-5 h-5" /></button>
                <button><TwitterIcon class="w-5 h-5" /></button>
                <button><PinterestIcon class="w-5 h-5" /></button>
                <button><InstagramIcon class="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex flex-col items-end w-1/2">
          <div class="flex items-start pr-20 space-x-2">
            <span class="text-3xl font-bold leading-tight">01</span>
            <span class="text-xl">/ 05</span>
          </div>
          <div class="flex pr-10 space-x-16">
            <button class="p-3"><ChevronLeftIcon /></button>
            <button class="p-3"><ChevronRightIcon /></button>
          </div>
          <img src="/img/product-1.png" alt="">
          <div class="absolute w-[440px] h-[250px] bg-gradient-to-r from-[transparent] to-teal-600/20 top-24 right-0"></div>
          <div class="flex pr-20 space-x-4">
            <div v-for="i in 5" :key="i" class="w-24 h-24 pl-1 border-2 border-gray-900/10 cursor-pointer hover:border-teal-500">
              <img :src="`/img/product-${i + 1}.png`" alt="">
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import ArrowLeftIcon from './icons/arrow-left.svg'
import CartIcon from './icons/cart.svg'
import ChevronLeftIcon from './icons/chevron-left.svg'
import ChevronRightIcon from './icons/chevron-right.svg'
import FacebookIcon from './icons/facebook.svg'
import HeartIcon from './icons/heart.svg'
import InstagramIcon from './icons/instagram.svg'
import LogoIcon from './icons/logo.svg'
import MenuIcon from './icons/menu.svg'
import MinusIcon from './icons/minus.svg'
import PinterestIcon from './icons/pinterest.svg'
import PlusIcon from './icons/plus.svg'
import SearchIcon from './icons/search.svg'
import StarIcon from './icons/star.svg'
import TwitterIcon from './icons/twitter.svg'

const menu = ["Shop", "Collective", "Designer", "About us", "Contact"];

const count = ref(1);
</script>
