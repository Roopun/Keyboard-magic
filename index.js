const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td style="padding: 15px;">${e.key === ' ' ? 'Space' : e.key}</td>
      <td style="padding: 15px;">${e.keyCode}</td> 
      <td style="padding: 15px;">${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
