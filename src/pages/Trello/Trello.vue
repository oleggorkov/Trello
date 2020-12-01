<template>
  <div class="trello">
    <button class="smile">
      <img src="../../assets/smile-regular.svg" class="smile__icon" alt="smile">
    </button>
    <div class="trello__block">
      <div class="trello__content">
        <create-board v-on:create-board="addBoard" />
      </div>
      <my-boards-list class="trello__content" v-bind:myBoards="titleMyBoard" />
    </div>
  </div>

</template>

<script>

import CreateBoard from "./components/CreateBoard";
import MyBoardsList from "./components/MyBoardsList";

export default {
  name: 'Trello',
  components: {
    MyBoardsList,
    CreateBoard
  },
  data() {
    return {
      myBoards: []
    };
  },
  props: {

  },
  computed: {
    titleMyBoard() {
      return this.$store.getters.titleMyBoard;
    }
  },
  methods: {
    addBoard(board) {
      this.myBoards.push(board);
    },
  },
}
</script>

<style lang="scss">

  .trello {
    min-width: 700px;
    min-height: 300px;

    padding: 30px;

    box-shadow: 0 0 15px black;
    background: darkgray;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__block {
      width: 100%;
      height: auto;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    & .smile {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-bottom: 50px;

      border: none;
      padding: 0;

      background: transparent;
      cursor: pointer;

      &__icon {
        width: 40px;
        height: 40px;
      }
    }
  }

</style>
