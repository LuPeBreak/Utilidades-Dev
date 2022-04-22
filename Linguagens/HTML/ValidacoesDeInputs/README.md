## Ferramentas HTML para Validação

→ Podemos adicionar o atributo required a tag html de input para que o html crie uma validação que garanta que o input seja preenchido

```jsx
<input name="nome" id="nome" class="input" type="text" placeholder="Nome" required>
```

→ Podemos utilizar o atributo type para validar tipos de dados pelo html

```jsx
<input name="email" id="email" class="input" type="email" placeholder="Email" required>
```

- ele não verifica se o endereço de e-mail existe de fato apenas a estrutura básica
- temos outros tipos como password ( que apenas oculta oque esta sendo escrito com \*), date ( que implementa um seletor data e valida uma data valida ) ...

→ podemos utilizar o atributo minlength para validar um tamanho mínimo de caracteres

```jsx
<input name="senha" id="senha" class="input" type="password" placeholder="Senha" minlength="6" required >
```

- podemos também usar o maxlength para limitar o numero máximo de caracteres

→ podemos utilizar o atributo pattern para passar um expressãor231 regular ( regex ) que valida um padrao a ser respeitado

```jsx
<input name="senha" id="senha" class="input" type="password" placeholder="Senha" pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,12}$" required >
```

- para modificarmos essa mensagem e possamos explicar o padrao esperado podemos utilizar o atributo title

  ```jsx
  <input name="senha" id="senha" class="input" type="password" placeholder="Senha" pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,12}$" title="A senha deve conter pelo menos uma letra, pelo menos um número e ter entre 6 a 12 caracteres." required >
  ```

- podemos usar o site [https://regexlib.com/](https://regexlib.com/) para pegar exemplos de regex que podemos usar
- podemos passar a tamanho minimo e maximo nesse pattern entao nao seria mais necessário o minlength ou maxlength
- podemos treinar regex em [https://regexr.com/](https://regexr.com/)
