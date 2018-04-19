import axios from 'axios'; //导入axios模块
export const getTodoList = params => { //封装一个函数，名为getTodoList
  return axios.get(`/todo/list`, { // 请求路径 ‘/todo/list’
    params: params
  });
};
export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params).then(res => res.data);
};
