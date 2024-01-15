import { app } from "./app";
import { errorHandler } from "./middleware/error-handler";

function start() {
  app.listen(8080, () => {
    console.log("Filesystem service listening on port 8080");
  });
}

app.use(errorHandler);

start();
