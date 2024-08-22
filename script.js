const revisions = [
  {
    revisionId: '3',
    createdAt: '2024-08-21T10:11:21.578Z',
    content: `
     <h1>The Adventure Begins: A Journey into the Unknown</h1>

     <p>It was a bright and cheerful morning in the small town of Everwood. The birds were chirping, and the sun was shining warmly. Little did anyone know, today was going to be the start of something amazing. A curious and brave girl named <strong>Luna</strong> had just found an old, dusty book hidden in the attic of her grandmother's house. The book contained a mysterious code that hinted at a hidden treasure deep within the <em>Enchanted Forest</em>, a place everyone said was too dangerous to explore.</p>

    <p>Luna, with her faithful cat <strong>Mittens</strong> by her side, decided that this would be the day they would embark on the greatest adventure of their lives. Before leaving, Luna packed her backpack with some snacks, a bottle of water, and her <strong>coding notebook</strong>—just in case she needed to solve any puzzles along the way.</p>

    <p>As Luna and Mittens approached the edge of the <em>Enchanted Forest</em>, they noticed how quiet it had become. The usual sounds of the forest were gone, replaced by the soft rustling of leaves and the gentle breeze. Luna took a deep breath, tightened her grip on the book, and stepped into the cool shade of the tall trees.</p>

    `,
  },
  {
    revisionId: '2',
    createdAt: '2024-08-20T08:30:21.578Z',
    content: `
      <h1>The Adventure</h1>
      <p>It was a bright and cheerful morning in the small town of Everwood. The birds were chirping, and the sun was shining warmly. Little did anyone know, today was going to be the start of something amazing. A curious and brave girl named <strong>Luna</strong> had just found an old, dusty book hidden in the attic of her grandmother's house. The book contained a mysterious code that hinted at a hidden treasure deep within the <em>Enchanted Forest</em>, a place everyone said was too dangerous to explore.</p>
      <p>Luna, with her faithful cat <strong>Mittens</strong> by her side, decided that this would be the day they would embark on the greatest adventure of their lives. Before leaving, Luna packed her backpack with some snacks, a bottle of water, and her <strong>coding notebook</strong>—just in case she needed to solve any puzzles along the way.</p>
    `,
  },
  {
    revisionId: '1',
    createdAt: '2024-08-19T22:26:21.578Z',
    content: `
      <h1>Title</h1>
      <p>It was a bright and cheerful morning in the small town of Everwood. The birds were chirping, and the sun was shining warmly. Little did anyone know, today was going to be the start of something amazing. A curious and brave girl named Luna had just found an old, dusty book hidden in the attic of her grandmother's house. The book contained a mysterious code that hinted at a hidden treasure deep within the <em>Enchanted Forest</em>, a place everyone said was too dangerous to explore.</p>
      <p>Luna, with her faithful cat Mittens by her side, decided that this would be the day they would embark on the greatest adventure of their lives. Before leaving, Luna packed her backpack with some snacks, a bottle of water, and her coding notebook—just in case she needed to solve any puzzles along the way.</p>
    `,
  },
];

const getRandomDelay = () => {
  const minDelay = 500;
  const maxDelay = 2000;
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
};



const revisionhistory_fetch = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        revisions
          .sort((a, b) =>
            new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1
          )
          .reverse()
      );
    }, getRandomDelay());
  });

document.addEventListener('DOMContentLoaded', function () {
    tinymce.init({
        selector: 'textarea',
        plugins: 'code revisionhistory',
        toolbar: 'undo redo revisionhistory | code',
        revisionhistory_fetch
      });
});
