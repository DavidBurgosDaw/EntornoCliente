**Apuntes de jQuery**

---

## **SELECTORES**

### **De etiqueta**

```js
$("p");
```

**Significado:** Selecciona todos los elementos `<p>`.

### **De id**

```js
$("#miElemento");
```

**Significado:** Selecciona el elemento con `id="miElemento"`.

### **De clase**

```js
$(".miClase");
```

**Significado:** Selecciona todos los elementos con la clase `miClase`.

### **De grupo**

```js
$("p, .miClase, #miElemento");
```

**Significado:** Selecciona todos los elementos `<p>`, los que tienen la clase `miClase` y el elemento con `id="miElemento"`.

### **Para formularios**

```js
$("input");
```

**Significado:** Selecciona todos los elementos `<input>`.

---

## **FILTROS**

### **`:first`**

```js
$("p:first");
```

**Significado:** Selecciona el primer elemento `<p>`.

### **`:last`**

```js
$("p:last");
```

**Significado:** Selecciona el último elemento `<p>`.

### **`:eq(indice)`**

```js
$("li:eq(2)");
```

**Significado:** Selecciona el tercer elemento `<li>` (los índices comienzan en 0).

### **`:gt(indice)`**

```js
$("li:gt(2)");
```

**Significado:** Selecciona todos los `<li>` con índice mayor a 2.

### **`:lt(indice)`**

```js
$("li:lt(2)");
```

**Significado:** Selecciona todos los `<li>` con índice menor a 2.

### **`:even`**

```js
$("tr:even");
```

**Significado:** Selecciona todas las filas pares en una tabla.

### **`:odd`**

```js
$("tr:odd");
```

**Significado:** Selecciona todas las filas impares en una tabla.

### **`:not(selector)`**

```js
$("p:not(.destacado)");
```

**Significado:** Selecciona todos los `<p>` que no tengan la clase `destacado`.

### **`:contains(texto)`**

```js
$('p:contains("Hola")');
```

**Significado:** Selecciona todos los `<p>` que contienen la palabra "Hola".

### **`:empty`**

```js
$("div:empty");
```

**Significado:** Selecciona todos los `<div>` vacíos.

### **`:has(selector)`**

```js
$("div:has(p)");
```

**Significado:** Selecciona todos los `<div>` que contienen al menos un `<p>`.

### **`:parent`**

```js
$("div:parent");
```

**Significado:** Selecciona todos los `<div>` que tienen elementos hijos.

### **`:hidden`**

```js
$("div:hidden");
```

**Significado:** Selecciona todos los `<div>` ocultos.

### **`:visible`**

```js
$("div:visible");
```

**Significado:** Selecciona todos los `<div>` visibles.

### **`:first-child`**

```js
$("p:first-child");
```

**Significado:** Selecciona todos los `<p>` que son el primer hijo de su padre.

### **`:last-child`**

```js
$("p:last-child");
```

**Significado:** Selecciona todos los `<p>` que son el último hijo de su padre.

### **`:only-child`**

```js
$("p:only-child");
```

**Significado:** Selecciona todos los `<p>` que son el único hijo de su padre.

### **`:enabled`**

```js
$("input:enabled");
```

**Significado:** Selecciona todos los `<input>` habilitados.

### **`:disabled`**

```js
$("input:disabled");
```

**Significado:** Selecciona todos los `<input>` deshabilitados.

### **`:selected`**

```js
$("option:selected");
```

**Significado:** Selecciona todas las opciones seleccionadas en un `<select>`.

### **`:checked`**

```js
$("input:checked");
```

**Significado:** Selecciona todos los `<input>` marcados (radio o checkbox).

### **`:animated`**

```js
$("div:animated");
```

**Significado:** Selecciona todos los `<div>` que están en una animación en curso.

---

## **MÉTODOS**

```js
$("div").is(":visible");
$("p").css("color", "red");
$("div").html("<strong>Nuevo contenido</strong>");
$("input").val("Nuevo valor");
$("button").on("click", function () {
  alert("¡Clic!");
});
$("button").one("click", function () {
  alert("¡Solo una vez!");
});
$("button").off("click");
$("div").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
$("p").hide();
$("p").show();
$("p").toggle();
$("div").fadeOut();
$("div").fadeIn();
$("div").fadeToggle();
$("div").fadeTo(1000, 0.5);
$("div").slideUp();
$("div").slideDown();
$("div").slideToggle();
$("div").stop();
$("div").delay(1000).fadeIn();
$("div").animate({ left: "100px" });
$("p").first();
$("p").last();
$("li").eq(2);
$("p").filter(".destacado");
$("p").not(".destacado");
$("li").slice(1, 3);
$("div").children();
$("div").find("p");
$("p").parent();
$("p").parents();
$("p").closest("div");
$("p").siblings();
$("p").next();
$("p").nextAll();
$("p").prev();
$("p").prevAll();
$("p").attr("id");
$("input").prop("checked", true);
$("p").removeAttr("id");
$("input").removeProp("checked");
$("p").addClass("nuevo");
$("p").hasClass("nuevo");
$("p").removeClass("nuevo");
$("p").toggleClass("nuevo");
$("ul").append("<li>Nuevo</li>");
$("<li>Nuevo</li>").appendTo("ul");
$("ul").prepend("<li>Primero</li>");
$("<li>Primero</li>").prependTo("ul");
$("p").after("<div>Después</div>");
$("p").before("<div>Antes</div>");
$("p").clone();
$("p").wrap("<div></div>");
$("p").unwrap();
$("p").wrapAll("<section></section>");
$("p").replaceAll(".clase");
$(".clase").replaceWith("<p>Nuevo</p>");
$("p").text();
$("p").remove();
$("p").detach();
$("p").empty();
```
