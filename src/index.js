import "@babel/polyfill" // 이 라인을 지우지 말아주세요!
import axios from 'axios'

// 전략 - 상태가 변할 때마다 페이지를 완전히 새로 그리기
const rootEl = document.querySelector('.root')

const templates = {
  login: document.querySelector('#login').content,
  index: document.querySelector('#index').content,
  todoItem: document.querySelector('#todo-item').content,
}

// 매번 요청을 보낼때마다 사용할 설정값을 이곳에서 지정
const api = axios.create({
  baseURL: process.env.API_URL
});

console.log(process.env)

api.interceptors.request.use(function (config) {
  // localStorage에 token이 있으면 요청에 헤더 설정, 없으면 아무것도 하지 않음
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = config.headers || {}
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
});

function drawFrag(frag) {
  rootEl.textContent = ''
  rootEl.appendChild(frag)
}

async function drawLoginPage() {
  const frag = document.importNode(templates.login, true)
  const loginFormEl = frag.querySelector('.login-form')
  loginFormEl.addEventListener('submit', async e => {
    e.preventDefault()
    const username = e.target.elements.username.value
    const password = e.target.elements.password.value
    const res = await api.post('/users/login', {
      username, password
    })
    localStorage.setItem('token', res.data.token)
    drawIndexPage()
  })
  drawFrag(frag)
}

async function drawIndexPage() {
  const frag = document.importNode(templates.index, true)
  const todoFormEl = frag.querySelector('.todo-form')
  const todoListEl = frag.querySelector('.todo-list')
  const logoutButtonEl = frag.querySelector('.logout-button')
  
  const res = await api.get('/todos')
  res.data.forEach(todoItem => {
    const frag = document.importNode(templates.todoItem, true)
    const bodyEl = frag.querySelector('.body')
    const deleteButtonEl = frag.querySelector('.delete-button')
    
    bodyEl.textContent = todoItem.body
    
    deleteButtonEl.addEventListener('click', async e => {
      await api.delete('/todos/' + todoItem.id)
      drawIndexPage()
    })
    
    todoListEl.appendChild(frag)
  })
  
  todoFormEl.addEventListener('submit', async e => {
    e.preventDefault()
    const body = e.target.elements.body.value
    const res = await api.post('/todos', {
      body,
      complete: false
    })
    if (res.status === 201) {
      drawIndexPage()
    }
  })
  
  logoutButtonEl.addEventListener('click', e => {
    localStorage.removeItem('token')
    drawLoginPage()
  })
  
  drawFrag(frag)
}

if (localStorage.getItem('token')) {
  drawIndexPage()  
} else {
  drawLoginPage()
}
