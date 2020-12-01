<template>

  <div class="task-list" group="people" @start="drag=true" @end="drag=false">
    <div v-for="todo in myList.myTodos" :key="todo.idTodo" class="task-list__item">
      <div
          class="task-list__button"
          :class="{active: todo.activeTodo}"
          v-show="!isEditing"
      >
        <div class="task-list__wrapper">
          <div class="task-list__title">{{ todo.titleTodo }}</div>
          <div @click="notActive(todo)" class="task-list__check"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: "TodoList",
  props: ['myList'],
  data() {
    return {
      isEditing: false,
      id: '',
      titleTodo: ''
    };
  },
  methods: {
    notActive(todo) {
      todo.activeTodo = !todo.activeTodo;
    }
  }
}
</script>

<style lang="scss">

.task-list {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__button {
    width: 222px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: line-through;
    background: lightgray;
    border: 2px solid gray;
    box-shadow: 0 0 10px aliceblue;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    transition: box-shadow .25s;

    &:hover, &:focus {
      box-shadow: 0 0 10px cadetblue;
    }
  }

  &__wrapper {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &__check {
    content: '';
    position: absolute;
    display: block;
    width: 10px;
    height: 5px;
    border-left: 2px solid bisque;
    border-bottom: 2px solid bisque;
    transform: rotate(-45deg);
    right: 3px;
    transition: border .25s;

    &:hover, &:focus {
      border-left: 2px solid black;
      border-bottom: 2px solid black;
    }
  }

  &__title {
    width: 100%;
    height: auto;
    font-size: 14px;
    text-align: center;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.active {
  text-decoration: none;
  background: cadetblue;
  border: 2px solid darkcyan;
}

</style>
