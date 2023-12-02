# Используем базовый образ с нужной версией Node.js
FROM node:18.13.0 AS node18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем все остальные файлы в контейнер
COPY . .

# Собираем приложение
RUN npm run build

# Создаем production-ready образ
FROM node:20.9.0 AS node20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем собранные файлы из предыдущего образа
COPY --from=node18 /app/build ./build

# Ваша команда запуска приложения, например:
CMD ["npm", "build"]
