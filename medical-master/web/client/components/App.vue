<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    font-size: 1.3rem;
  }
  
  .scrollbox {
    margin-top: 15px;
    padding-right: 15px;
    height: 180px;
    width: 600px;
    overflow-y: scroll;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3);
  }

</style>
