<template>
  <div>
    <div v-for="board in myBoards" :key="board.idBoard" class="container-create">
      <router-link :key="board.titleBoard" :to="{name:'my_board', params: { title: board.titleBoard }}" class="create-board" v-show="!isEditing" >
        <div class="create-board__wrapper">
          <h2 class="create-board__title">{{board.titleBoard}}</h2>
        </div>
      </router-link>
      <div class="create-board__close" v-on:click="deleteBoard(board)">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MyBoardsList",
  props: ['myBoards'],
  data() {
    return {
      isEditing: false,
      id: '',
      titleBoard: ''
    };
  },
  methods: {
    deleteBoard(item) {
      let findItem = this.myBoards.indexOf(item);
      this.myBoards.splice(findItem, 1);
    },
  }
}
</script>

<style lang="scss">

.container-create {
  margin-bottom: 5px;

  position: relative;
}

.create-board {
  width: 296px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: cadetblue;
  border: 2px solid darkcyan;
  box-shadow: 0 0 10px aliceblue;
  border-radius: 5px;

  cursor: pointer;

  color: white;
  text-decoration: none;

  transition: color .25s, background .25s, border .25s;

  &:hover, &:focus {
    color: darkcyan;
    background: white;
    border: 2px solid darkcyan;

    & .my-board__title {
      color: darkcyan;
    }
  }

  &__wrapper {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 0 10px;
  }

  &__title {
    font-size: 18px;
  }

  &__close {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: background .25s;

    &:hover {
      & span {
        background: lightcyan;
      }
    }

    span {
      width: 15px;
      height: 4px;
      background: darkcyan;
      position: absolute;
      transition: background .25s;

      &:first-of-type {
        transform: rotate(45deg);
      }
      &:last-of-type {
        transform: rotate(-45deg);
      }
    }
  }
}

</style>
