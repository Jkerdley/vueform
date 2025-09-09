<script setup>
import { reactive, ref } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const cities = reactive([
  { key: 'msc', value: 'Москва' },
  { key: 'spb', value: 'Санкт-Петербург' },
  { key: 'ovb', value: 'Новосибирск' },
  { key: 'svx', value: 'Екатеринбург' },
  { key: 'other', value: 'Другой' },
])
const successMessage = ref(false)

const togglePasswordVisibility = () => {
  const passwordField = document.getElementById('password')
  passwordField.type = passwordField.type === 'password' ? 'text' : 'password'
}
const togglePasswordConfirmVisibility = () => {
  const confirmPasswordField = document.getElementById('confirm-password')
  confirmPasswordField.type = confirmPasswordField.type === 'password' ? 'text' : 'password'
}

const onFormSubmit = (values) => {
  successMessage.value = true
  console.log('поля формы:', values)
}
</script>

<template>
  <section class="container">
    <h1 class="title">Регистрация</h1>
    <Form v-if="!successMessage" class="registration-form" @submit="onFormSubmit">
      <div class="form-group">
        <label class="form-label" for="firstname">Имя *</label>
        <Field class="form-control" name="firstname" type="text" id="firstname" />
        <ErrorMessage class="form-error" name="firstname" />
      </div>
      <div class="form-group">
        <label class="form-label" for="lastname">Фамилия *</label>
        <Field class="form-control" name="lastname" type="text" id="lastname" />
        <ErrorMessage class="form-error" name="lastname" />
      </div>
      <div class="form-group">
        <label class="form-label" for="country">Страна/Регион *</label>
        <Field class="form-control" name="country" type="text" id="country" />
        <ErrorMessage class="form-error" name="country" />
      </div>
      <div class="form-group">
        <label class="form-label" for="city">Город *</label>
        <div class="custom-select">
          <Field as="select" class="form-control" id="city" name="city">
            <option value="" disabled selected>Выберите город</option>
            <option v-for="city in cities" :key="city.key" :value="city.key">
              {{ city.value }}
            </option>
          </Field>
          <ErrorMessage class="form-error" name="city" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="phone">Телефон *</label>
        <Field class="form-control" type="tel" name="phone" id="phone" />
        <ErrorMessage class="form-error" name="phone" />
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email *</label>
        <Field class="form-control" type="email" name="email" id="email" />
        <ErrorMessage class="form-error" name="email" />
      </div>
      <div class="form-group form-group--password">
        <label class="form-label" for="password">Пароль *</label>
        <Field class="form-control" type="password" name="password" id="password" />
        <ErrorMessage class="form-error" name="password" />

        <button class="btn-icon btn-icon--password" type="button" @click="togglePasswordVisibility">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M12 4.5C6.5 4.5 2 9 2 12s4.5 7.5 10 7.5S22 14.5 22 12s-4.5-7.5-10-7.5zm0 13c-3.1 0-5.5-2.4-5.5-5.5S8.9 7.5 12 7.5s5.5 2.4 5.5 5.5S15.1 17.5 12 17.5z"
            />
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2c1.1 0 2-.9 2-2s-.9-2-2-2z" />
          </svg>
        </button>
      </div>
      <div class="form-group form-group--password">
        <label class="form-label" for="confirm-password">Подтвердите пароль *</label>
        <Field class="form-control" type="password" name="confirm-password" id="confirm-password" />
        <ErrorMessage class="form-error" name="confirm-password" />

        <button
          class="btn-icon btn-icon--password"
          type="button"
          @click="togglePasswordConfirmVisibility"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M12 4.5C6.5 4.5 2 9 2 12s4.5 7.5 10 7.5S22 14.5 22 12s-4.5-7.5-10-7.5zm0 13c-3.1 0-5.5-2.4-5.5-5.5S8.9 7.5 12 7.5s5.5 2.4 5.5 5.5S15.1 17.5 12 17.5z"
            />
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2c1.1 0 2-.9 2-2s-.9-2-2-2z" />
          </svg>
        </button>
      </div>
      <div class="form-group form-group--full-width">
        <label class="form-label" for="comments">Дополнительная информация</label>
        <Field as="textarea" class="form-control" id="comments" name="comments"></Field>
        <ErrorMessage class="form-error" name="comments" />
      </div>
      <div class="form-group form-group--full-width">
        <label class="form-label form-label--checkbox" for="terms">
          <Field type="checkbox" id="terms" name="terms" />

          Я согласен c условиями пользования и политикой конфиденциальности
        </label>
      </div>
      <button class="btn" type="submit">Зарегистрироваться</button>
      <button class="btn" type="reset">Очистить форму</button>
    </Form>
    <div v-else class="message message--success">Регистрация прошла успешно!</div>
  </section>
</template>

<style src="./style.css"></style>
