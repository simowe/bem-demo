# BEM

## Block Element Modifier

```txt
  block  element  modifier
    |       |        |
    v       |        |
.product    |        |
            v        |
.product__image      |
                     v
.product__image--rounded
```

http://getbem.com/naming/

## HTML

```html
<div class="product">
  <img class="product__image product__image--rounded" />
  <p class="product__description"></p>
</div>
```

## Potential benefits

- Following some rules can make it easier to name classes
- Recognizing the concepts "block", "element" and "modifier" can make the code easier to understand.
- Grouping classes together by "block" makes it easier to see the context.

## Potential pitfalls

- BEM can get verbose
  - `.user-settings-menu__sub-menu-item--white-border`

## Specificity

Conflicting css declarations are resolved by specificity

```txt
// type selector
button
body button
body div button

// class selector
.button
div .button
body div .button
body div .button.red
body .button-container .button.red

// id selector
#button
#button.red
#button.button.red
body #button.button.red
body div #button.button.red
body button-container #button.button.red

// important!
Ignores css cascading rules and overrides everything
Use specificity to override css instead of important!

```

https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity