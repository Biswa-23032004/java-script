const insert = document.getElementById('insert');

//Now let's put an event listener on a whole window

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class = 'color'>
      <table>
      <tr>
       <th> KEY </th>
       <th> KEYCODE </th>
       <th> CODE </th>
      </tr>
     <tr>
      <td>${e.key === " " ? 'Space' : e.key }</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
      </tr>
</table>
      </div>

    `;
});