<template>
  <div class="list">
    <div v-for="myList in myLists" :key="myList.idList" class="container">
      <button class="todo__buttons-cancel" v-on:click="deleteList(myList)">
        <div class="todo__close">
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="todo-list" v-show="!isEditing">
        <div class="todo-list__wrapper">
          <div class="todo-list__title">{{ myList.titleList }}</div>
        </div>
      </div>
      <div class="create-todo">
        <div class="create-todo__input">
          <input
              v-on:keyup.enter="addTodo(myList)"
              v-model="addTitleTodo"
              type='text'
              placeholder="Моя задача"
          >
        </div>
        <Todos :myList="myList"/>
      </div>
    </div>
  </div>
</template>

<script>

import Todos from "./TodoList";

export default {
  name: "TodoList",
  components: {
    Todos,
  },
  props: ['myLists'],
  data() {
    return {
      isEditing: false,
      myTodos: [],
      addTitleTodo: '',
      id: 0,
      activeTodo: true
    };
  },
  methods: {
    deleteList(item) {
      let findItem = this.myLists.indexOf(item);
      this.myLists.splice(findItem, 1);
      this.myTodos = [];
    },
    addTodo(myList) {
      const todo = {
        idTodo: this.id,
        titleTodo: this.addTitleTodo,
        activeTodo: this.activeTodo
      };
      myList.myTodos.push(todo);
      this.id +=1;
      this.addTitleTodo = '';
    },
  },
}
</script>

<style lang="scss">

.list {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
}
.container {
  width: 222px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid rosybrown;
  box-shadow: 0 0 10px bisque;
  border-radius: 5px;
  background: burlywood;
  color: white;
  padding: 5px 10px;
  margin-right: 20px;

  & .todo__buttons-cancel {
    position: absolute;
    right: 5px;
    top: 5px;
  }
}

.todo-list {
  width: 100%;
  height: auto;
  text-align: center;

  &__container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__wrapper {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    width: 100%;
    height: auto;
    font-size: 18px;
    border-bottom: 1px solid bisque;
    padding-bottom: 5px;
  }
}

.create-todo {
  width: 100%;
  height: auto;
  margin-top: 10px;

  &__input {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    border: none;

    input {
      width: 100%;
      height: auto;
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
}

</style>
