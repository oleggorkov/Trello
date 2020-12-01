<template>
  <div class="my-board">
    <router-link to="/" class="smile">
      <img src="../../assets/smile-regular.svg" class="smile__icon" alt="smile">
    </router-link>
    <div class="my-board__block">
      <div class="my-board__content">
        <div class="my-board__created">{{boardTitle}}</div>
        <CreateList v-on:create-list="addList" />
      </div>
    </div>
    <TodoList v-bind:myLists="titleMyList" />
  </div>
</template>

<script>

import CreateList from "./components/CreateList";
import TodoList from "./components/ListsObject";

export default {
  name: "MyBoard",
  props: [],
  components: {
    TodoList,
    CreateList
  },
  data() {
    return {
      myLists: [],
      boardTitle: this.$route.params.title
    };
  },
  computed: {
    titleMyList() {
      return this.$store.getters.titleMyList;
    }
  },
  methods: {
    addList(myList) {
      this.myLists.push(myList);
    },
  },
}
</script>

<style lang="scss">

.my-board {
  min-width: 700px;
  min-height: 300px;

  padding: 30px;

  box-shadow: 0 0 15px black;
  background: darkgray;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

  &__created {
    width: 240px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: cadetblue;
    border: 2px solid darkcyan;
    box-shadow: 0 0 10px aliceblue;
    border-radius: 5px;
    color: white;

    font-size: 18px;
    font-weight: 700;
  }

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
    align-items: flex-start;
    justify-content: flex-start;
  }
}

</style>
