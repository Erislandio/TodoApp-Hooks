import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ items }) => {
  return items.map(item => {
    return <TodoItem key={item.id} {...item} />;
  });
};
