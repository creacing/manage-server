---
title: input聚焦选中
description: 
date: 2021-01-01
tags:
  - html
---
```html
<html>

<head></head>

<body>
    <form action="">
        <input type="text" size="25" maxlength="50" name="inputOne" id="" value="initial value">
    </form>
    <script>
        //默认值为选中
        const textbox = document.forms[0].elements['inputOne']

        // textbox.select()
        //聚焦选中
        textbox.addEventListener('focus', (event) => {
            console.log('event.target', event.target);
            event.target.select()
        })
    </script>
</body>

</html>
```