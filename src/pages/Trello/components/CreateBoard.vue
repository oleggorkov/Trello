<template>
  <div class="new-board">
    <button class="new-board__create" v-on:click="openCreateBoard">
      <div class="new-board__plus">
        <span></span>
        <span></span>
      </div>
      Новая доска
    </button>
    <div class="board" v-show="isCreating">
      <div class="board__wrapper">
        <h2 class="board__title">Название доски</h2>
        <div class="board__input">
          <input
              v-model="addTitleBoard"
              v-on:keyup.enter="addBoard(addTitleBoard)"
              type='text'
              placeholder="Моя доска"
          >
        </div>
        <div class="board__buttons">
          <button class="board__buttons-cancel" v-on:click="closeCreateBoard">Отмена</button>
          <button
              type="submit"
              class="board__buttons-save"
              v-on:click="addBoard(addTitleBoard)"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CreateBoard",
  data() {
    return {
      isCreating: false,
      id: 0,
      addTitleBoard: ''
    };
  },
  methods: {
    openCreateBoard() {
      this.isCreating = true;
    },
    closeCreateBoard() {
      this.isCreating = false;
      this.addTitleBoard = '';
    },
    addBoard() {
      const board = {
        idBoard: this.id,
        titleBoard: this.addTitleBoard,
        myLists: []
      }
      if (this.addTitleBoard.length > 0) {
        this.id += 1;
        this.$emit('create-board', board);
        this.addTitleBoard = '';
      }
      this.isCreating = false;
      this.$store.dispatch('createBoard', board);
    },
  },
}
</script>

<style lang="scss">

  .new-board {
    width: 296px;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    &__create {
      width: 300px;
      height: 40px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      border: 2px solid rosybrown;
      box-shadow: 0 0 10px bisque;
      border-radius: 5px;

      font-size: 16px;
      font-weight: 700;

      background: burlywood;
      cursor: pointer;

      padding: 0 10px;

      color: white;

      transition: color .25s, background .25s, border .25s;

      &:hover {
        color: burlywood;
        background: white;
        border: 2px solid burlywood;

        & .new-board__plus span {
          background: burlywood;
        }
      }
    }

    &__plus {
      width: 30px;
      height: 30px;

      margin-right: 15px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      span {
        width: 30px;
        height: 10px;

        background: white;

        position: absolute;

        transition: background .25s;

        &:first-of-type {
          transform: rotate(90deg);
        }
      }
    }
  }

  .board {
    width: 296px;
    height: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 2px solid rosybrown;
    box-shadow: 0 0 10px bisque;
    border-radius: 5px;

    margin-top: 5px;

    background: burlywood;
    cursor: pointer;

    color: white;

    &__wrapper {
      width: 100%;
      height: auto;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      padding: 10px;
    }

    &__title {
      font-size: 16px;

      margin-bottom: 5px;
    }

    &__input {
      width: 100%;
      height: 40px;

      outline: none;
      border: none;

      input {
        display: flex;

        padding: 5px;

        border: none;
        outline: none;
        border-radius: 5px;

        &:hover, &:focus {
          box-shadow: 0 0 5px rosybrown;
        }
      }
    }

    &__buttons {
      width: 100%;
      height: auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      &-cancel {
        width: 100px;
        height: 30px;

        border: none;
        border-radius: 5px;

        background: darkgray;
        box-shadow: 0 0 5px gray;

        color: white;
        cursor: pointer;

        transition: color .25s;

        &:hover, &:focus {
          color: gray;
        }
      }
      &-save {
        width: 150px;
        height: 30px;

        border: none;
        border-radius: 5px;

        color: white;
        cursor: pointer;

        background: darkolivegreen;
        box-shadow: 0 0 5px forestgreen;

        transition: color .25s;

        &:hover, &:focus {
          color: forestgreen;
        }
      }
    }
  }

</style>
