# Auth API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white) 
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge\&logo=sequelize\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge\&logo=jsonwebtokens)

Простое backend API для регистрации, авторизации и управления профилем пользователя.

Проект демонстрирует базовую архитектуру backend приложения с использованием:

* Express
* Sequelize ORM
* MySQL
* JWT авторизации
* Service Layer архитектуры
---
# Возможности API

API предоставляет следующий функционал:

* регистрация пользователя
* авторизация пользователя
* JWT аутентификация
* получение профиля пользователя
* обновление профиля пользователя

Поля профиля:

* `name`
* `birthDate`
* `bio`

---

# Установка проекта

## 1. Клонировать репозиторий

```bash
git clone https://github.com/Olivka13134/auth-api.git
cd auth-api
```

---

## 2. Установить зависимости

```bash
npm install
```

---

## 3. Создать файл `.env`

В корне проекта создайте `.env`:

```
DB_NAME=auth_db
DB_USER=root
DB_PASS=

JWT_SECRET=mysecretkey
```

---

## 4. Создать базу данных

В MySQL:

```sql
CREATE DATABASE auth_db;
```

---

## 5. Запустить сервер

```bash
npm run dev
```

Сервер будет доступен:

```
http://localhost:3000
```

---

# API Endpoints

| Метод | Endpoint  | Описание                      | Авторизация |
| ----- | --------- | ----------------------------- | ----------- |
| POST  | /register | Регистрация пользователя      | ❌           |
| POST  | /login    | Авторизация пользователя      | ❌           |
| GET   | /profile  | Получить профиль пользователя | ✅           |
| PATCH | /profile  | Обновить профиль              | ✅           |

---

# Примеры запросов

## Регистрация

POST `/register`

```json
{
  "email": "test@mail.com",
  "password": "123456"
}
```

---

## Авторизация

POST `/login`

```json
{
  "email": "test@mail.com",
  "password": "123456"
}
```

Ответ:

```json
{
  "token": "JWT_TOKEN"
}
```

---

## Получение профиля

GET `/profile`

Headers:

```
Authorization: Bearer TOKEN
```

---

## Обновление профиля

PATCH `/profile`

Headers:

```
Authorization: Bearer TOKEN
```

Body:

```json
{
  "name": "Иван",
  "birthDate": "2000-01-01",
  "bio": "Backend разработчик"
}
```

---

# Структура базы данных

Таблица `users`

| Поле      | Тип      | Описание            |
| --------- | -------- | ------------------- |
| id        | INT      | ID пользователя     |
| email     | VARCHAR  | Email пользователя  |
| password  | VARCHAR  | Хешированный пароль |
| name      | VARCHAR  | Имя                 |
| birthDate | DATE     | Дата рождения       |
| bio       | TEXT     | Описание            |
| createdAt | DATETIME | Дата создания       |
| updatedAt | DATETIME | Дата обновления     |

---

# Архитектура проекта

```
src
 ├ config
 │   └ database.ts
 │
 ├ controllers
 │   └ auth.controller.ts
 │
 ├ middleware
 │   └ auth.middleware.ts
 │
 ├ models
 │   └ user.model.ts
 │
 ├ routes
 │   └ auth.routes.ts
 │
 ├ services
 │   └ auth.service.ts
 │
 ├ app.ts
 └ server.ts
```
