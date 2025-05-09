export function cuenta(app) {
  app.get(
    '/cuenta',
    (req, res) => {
      for (let i = 0; i < 10; i++) {
        res.write(i.toString() + ' ');
      }

      res.end();
    }
  );
}