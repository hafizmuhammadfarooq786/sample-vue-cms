<template>
  <v-app>
    <div>
      <v-toolbar :dark="true" color="blue">
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Website</router-link>
        </v-toolbar-title>
      </v-toolbar>
    </div>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
