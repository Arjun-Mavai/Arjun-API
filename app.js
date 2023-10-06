const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // You can use any port you prefer

// Mock database (replace with a real database in production)
// Mock data adhering to the desired format
const persons = [
    {
      id: 1,
      name: 'Jiddu Krishnamurti',
      quotes: [
        'The ability to observe without evaluating is the highest form of intelligence.',
        'Truth is a pathless land.',
      ],
    },
    {
      id: 2,
      name: 'Osho',
      quotes: [
        'Don’t be unnecessarily burdened by history. Go on cutting the dead branches.',
        'Experience life in all possible ways — good-bad, bitter-sweet, dark-light, summer-winter. Experience all the dualities.',
      ],
    },
    {
      id: 3,
      name: 'Sadhguru',
      quotes: [
        'Do not look up to anything; do not look down on anything. Then you will see all there is to see.',
        'The sign of intelligence is that you are constantly wondering. Idiots are always dead sure about every damn thing they are doing in their life.',
      ],
    },
    {
      id: 4,
      name: 'Paramahansa Yogananda',
      quotes: [
        'The happiness of ones own heart alone cannot satisfy the soul; one must embrace the joys of others.',
        'The season of failure is the best time for sowing the seeds of success.',
      ],
    },
    {
      id: 5,
      name: 'Ramana Maharshi',
      quotes: [
        'Your own Self-Realization is the greatest service you can render the world.',
        'Silence is the true language of the soul; it speaks to us beyond words.',
      ],
    },
    {
      id: 6,
      name: 'Swami Vivekananda',
      quotes: [
        'Arise, awake, and stop not until the goal is reached.',
        'In a conflict between the heart and the brain, follow your heart.',
      ],
    },
    {
      id: 7,
      name: 'Rabindranath Tagore',
      quotes: [
        'Let your life lightly dance on the edges of Time like dew on the tip of a leaf.',
        'You cant cross the sea merely by standing and staring at the water.',
      ],
    },
    {
      id: 8,
      name: 'A. P. J. Abdul Kalam',
      quotes: [
        'Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.',
        'Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.',
      ],
    },
    {
      id: 9,
      name: 'Sri Sri Ravi Shankar',
      quotes: [
        'The moment you start giving, you start receiving.',
        'Meditation is not what you think; it’s beyond what you think.',
      ],
    },
    {
      id: 10,
      name: 'Sardar Vallabhbhai Patel',
      quotes: [
        'Manpower without unity is not a strength unless it is harmonized and united properly, then it becomes a spiritual power.',
        'Every citizen of India must remember that he is an Indian and he has every right in this country but with certain duties.',
      ],
    },
    // Add more data objects with names and quotes
  ];
  
  
app.use(cors());
 

// Define a route to get all books
app.get('/arjun', (req, res) => {
 
  res.json(persons);


});

// Define a route to get a specific book by ID
app.get('/arjun/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = persons.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});


// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });


app.listen(port, () => {
  console.log(`Book API listening at http://localhost:${port}`);
});
