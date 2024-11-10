const featuredImage = document.querySelector('figure img');
const caption = document.querySelector('figcaption');
const thumbnails = document.querySelectorAll('#thumbnail-list img');

const images = [
	{ src: 'flowers-yellow-large.jpg', title: 'Sunflowers in Dernekamp' },
	{ src: 'flowers-red-large.jpg', title: 'Poppies in Cornfield' },
	{ src: 'flowers-white-large.jpg', title: 'Daffodils in Sentmaring Park' },
	{ src: 'flowers-pink-large.jpg', title: 'Sentmaring Park, Münster' },
	{ src: 'flowers-blue-large.jpg', title: 'Market in Münster' }
];

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener('click', () => {
		
		featuredImage.src = images[index].src;
		featuredImage.alt = images[index].title;
		caption.textContent = images[index].title;

		
		thumbnails.forEach(img => img.classList.remove('active'));
		thumbnail.classList.add('active');
	});
});
