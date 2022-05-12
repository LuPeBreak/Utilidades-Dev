# Flexbox

Ao utilizarmos o flexbox definindo um container ( um elemento pai) como flex `display: flex;` podemos utilizar propriedades nesse elemento ( flex container ) e em seus elementos filhos ( flex items )

## Flex Container

-> [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction): **row**;

* flex-direction: row-reverse;
* flex-direction: column;

* flex-direction: column-reverse


->[flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap): **nowrap**;

* flex-wrap: wrap;
* flex-wrap: wrap-reverse;


->[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content): **flex-start**;

* justify-content: center;
* justify-content: flex-end;

* justify-content: space-between;
* justify-content: space-around;


->[flex-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow): **row nowrap;** **(flex-direction flex-wrap)**


->[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content): **flex-start**;

* justify-content: center;
* justify-content: flex-end;

* justify-content: space-between;
* justify-content: space-around;


->[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items): **stretch**;

* align-items: flex-start;
* align-items: center;

* align-items: flex-end;
* align-items: baseline;


-> [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content): **stretch**;

* align-content: flex-start;
* align-content: center;

* align-content: flex-end;
* align-content: space-between;

* align-content: space-around;


-> [place-content](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content): **center start;**
**(align-content justify-content)**

## Flex Item

->[order](https://developer.mozilla.org/en-US/docs/Web/CSS/order): **0**; (...-1,0,1...)

->[flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow): **0**;(...-1,0,1...)

->[flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow): **0**;(...-1,0,1...)

->[flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis): **auto**; ( pode se utilizar valores em px em ... ate palavras chaves ou valores globais, veja mais na documentaçao do link )

->[flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex): **0 1 auto;** **(flex-grow flex-shrink flex-basis)**

->[align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self): **auto**;

* align-self: flex-start;
* align-self: center;

* align-self: flex-end;
* align-self: baseline;

* align-self: stretch;