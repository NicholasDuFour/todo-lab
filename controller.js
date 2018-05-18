"use strict";

function TodoController(){
  const vm = this;
  vm.list = [

    {
      task: "Clean bathroom.",
      completed: true
    },

    {
      task: "Mail car payment.",
      completed: false
    },

    {
      task: "Go to the gym.",
      completed: true
    },

    {
      task: "Get groceries.",
      completed: false
    },
  ]
}

angular
  .module("todoApp")
  .controller("TodoController", TodoController)
