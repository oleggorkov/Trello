<template>
  <div class="create-list">
    <button
        class="create-list__add"
        v-on:click="openCreateList"
        v-show="!isCreating">
      Добавить список
    </button>
    <div class="todo" v-show="isCreating">
      <div class="todo__wrapper">
        <div class="todo__buttons">
          <button class="todo__buttons-cancel" v-on:click="closeCreateList">
            <div class="todo__close">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div class="todo__input">
          <input
              v-on:keyup.enter="addList()"
              v-model="addTitleList"
              type='text'
              placeholder="Мой список"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateList",
  props: ['myTodos'],
  data() {
    return {
      id: 0,
      addTitleList: '',
      isCreating: false
    };
  },
  methods: {
    openCreateList() {
      this.isCreating = true;
    },
    closeCreateList() {
      this.isCreating = false;
      this.addTitleList = '';
    },
    addList() {
      const myList = {
        idList: this.id,
        titleList: this.addTitleList,
        myTodos: []
      };
      if (this.addTitleList.length > 0) {
        this.id +=1;
        this.$emit('create-list', myList);
        this.addTitleList = '';
      }
      this.isCreating = false;
      this.$store.dispatch('createList', myList);
    },
  },
}
</script>

<style lang="scss">

.create-list {
  width: auto;
  height: auto;
  margin-top: 10px;

  &__add {
    width: 244px;
    height: 40px;
    display: flex;
    justify-content: center;
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
}

.todo {
  width: 240px;
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
    justify-content: flex-end;

    &-cancel {
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 50%;
      background: white;
      box-shadow: 0 0 5px gray;
      color: white;
      cursor: pointer;
      padding: 0;
      transition: background .25s;

      &:hover, &:focus {
        background: rosybrown;

        & .todo__close span {
          background: white;
        }
      }
    }
  }
  &__close {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    span {
      width: 15px;
      height: 4px;
      background: rosybrown;
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
