import lume from "lume/mod.ts";
//import me from "me/mod.ts";

const site = lume({
    //location: new URL("https://example.com"),
    server: {
        //page404: "./not-found.html",
        open: true,
  },
});

//site.use(me());

export default site;
