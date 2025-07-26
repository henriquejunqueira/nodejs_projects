const express = require('express');
const exphbs = require('express-handlebars');

const port = 3000;
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const films = [
  {
    id: '1',
    title: 'Inception (2010)',
    description: `A mind-bending sci-fi thriller directed by Christopher Nolan. The story follows a skilled thief, Dom Cobb, who specializes in stealing secrets from people's dreams. He is offered a chance to have his past erased if he can achieve the impossible—planting an idea in someone's mind. As layers of reality blur, the mission becomes increasingly dangerous.`,
  },
  {
    id: '2',
    title: 'The Grand Budapest Hotel (2014)',
    description: `A colorful and whimsical comedy-drama by Wes Anderson. Set in a fictional European country, the film tells the story of a legendary hotel concierge and his protégé as they get entangled in a murder mystery, art theft, and a battle over a family fortune. Full of quirky characters and stylish visuals.`,
  },
  {
    id: '3',
    title: 'The Pursuit of Happyness (2006)',
    description: `A heartwarming biographical drama starring Will Smith. Based on the true story of Chris Gardner, a struggling salesman who becomes homeless with his young son. Despite the hardships, he pursues a dream of becoming a successful stockbroker, showing resilience and hope in the face of adversity.`,
  },
];

app.get('/film/:id', (req, res) => {
  const film = films[parseInt(req.params.id - 1)];

  res.render('film', { film });
});

app.get('/', (req, res) => {
  res.render('home', {
    films,
  });
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta: ${port}`);
});
