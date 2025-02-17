console.log('----------------Ejercicio 4--------------------')

function isBookRead(books, titleToSearch) {
  const book = books.find(b => b.title === titleToSearch);
  return book ? book.isRead : false;
}

// Ejemplo:
const books = [
  { title: 'La asistenta', isRead: false },
  { title: 'Hierba', isRead: true },
  { title: 'Persépolis', isRead: true },
];

console.log('Ejercicio 4:', isBookRead(books, "Los juegos del hambre"));