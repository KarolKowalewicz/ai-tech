const przyciski = document.querySelectorAll('.btn');

przyciski.forEach((przycisk) => {
  przycisk.addEventListener('click', () => {
    const blockClassList = przycisk.parentNode.classList;
    if (blockClassList.contains('aktywna')) {
      blockClassList.remove('aktywna');
      przycisk.textContent = 'Pokaz wiecej';
  
    } else {
      blockClassList.add('aktywna');
      przycisk.textContent = 'Pokaz mniej';
    }
  });
})

// Przyklad z for
// for (let i = 0; i < przyciski.length; i++) {
//   let przycisk = przyciski[i];
//   przycisk.addEventListener('click', () => {
//     const blockClassList = przycisk.parentNode.classList;
//     if (blockClassList.contains('aktywna')) {
//       blockClassList.remove('aktywna');
//       przycisk.textContent = 'Pokaz wiecej';
  
//     } else {
//       blockClassList.add('aktywna');
//       przycisk.textContent = 'Pokaz mniej';
//     }
//   });
// }

// API
// Application Programming Interface

// Browser API's:

// DOM
// Document Object Model


