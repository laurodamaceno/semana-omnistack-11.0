const express =  require('express');

const app = express();

app.get('/', (request, response) => {
	return response.json({
		'aula': '1',
		'data': 'March, 23 - 2020',
		'conteúdo': 'Introdução ao Node.js, ReactJS e React Native',
	});
});

app.listen(3333);