const { createServer } = require("node:http");
const fs = require("fs");
const url = require("url");
const { read } = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

let readData = fs.readFileSync("../../dev-data/data.json", {
  encoding: "utf8",
});
let parsedData = JSON.parse(readData);
let readOverview = fs.readFileSync("../../templates/overview.html", {
  encoding: "utf8",
});
let readSingle = fs.readFileSync("../../templates/single-card.html", {
  encoding: "utf8",
});
let readSearch = fs.readFileSync("../../templates/search.html", {
  encoding: "utf8",
});
let readSingleProduct = fs.readFileSync("../../templates/single-product.html", {
  encoding: "utf8",
});
let readProduct = fs.readFileSync("../../templates/product.html", {
  encoding: "utf8",
});

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html ;charset=utf8");

  switch (true) {
    case req.url === "/":
    case req.url === "/overview":
      let mappedSingle = parsedData.map((element, index) => {
        return readSingle
          .replaceAll("{{image}}", element.image)
          .replaceAll("{{image1}}", element.image)
          .replaceAll("{{productName}}", element.productName)
          .replaceAll("{{quantity}}", element.quantity)
          .replaceAll("{{id}}", element.id)
          .replaceAll("{{price}}", element.price);
      });

      readOverview = readOverview.replaceAll(
        "{{content}}",
        mappedSingle.join("")
      );
      res.end(readOverview);
      break;

    case req.url.startsWith("/product/"):
      let id = req.url.split("/")[2];
      let found = parsedData.find((element) => element.id == id);

      if (!found) {
        res.statusCode = 404;
        res.end(`404 NOT FOUND`);
      } else {
        console.log(found);
        let singleProduct = readSingleProduct
          .replaceAll("{{image}}", found.image)
          .replaceAll("{{image1}}", found.image)
          .replaceAll("{{productName}}", found.productName)
          .replaceAll("{{quantity}}", found.quantity)
          .replaceAll("{{organic}}", found.organic ? "organic" : "inorganic")
          .replaceAll("{{from}}", found.from)
          .replaceAll("{{nutrients}}", found.nutrients)
          .replaceAll("{{price}}", found.price)
          .replaceAll("{{description}}", found.description)
          .replaceAll("{{id}}", found.price);

        let replacedProduct = readProduct.replaceAll(
          "{{content}}",
          singleProduct
        );
        res.end(replacedProduct);
      }
      break;

    case req.url === "/api":
      res.setHeader("Content-Type", "application/json ;charset=utf8");
      res.end(readData);
      break;
    case req.url.startsWith("/search"):
      const parsedUrl = url.parse(req.url, true);
      const queryParams = parsedUrl.query;
      let findWat = queryParams.p;
      console.log(findWat);
      if (findWat) {
        let foundWat = parsedData.filter((element) =>
          String(element.productName.toLocaleLowerCase()).includes(
            findWat.toLocaleLowerCase()
          )
        );
        if (foundWat.length == 0) {
          res.end(readSearch.replace("{{message}}", "Wat r zu looking for?"));
        } else {
          let replacedFound = foundWat.map((element) => {
            return readSingleProduct
              .replaceAll("{{image}}", element.image)
              .replaceAll("{{image1}}", element.image)
              .replaceAll("{{productName}}", element.productName)
              .replaceAll("{{quantity}}", element.quantity)
              .replaceAll(
                "{{organic}}",
                element.organic ? "organic" : "inorganic"
              )
              .replaceAll("{{from}}", element.from)
              .replaceAll("{{nutrients}}", element.nutrients)
              .replaceAll("{{price}}", element.price)
              .replaceAll("{{description}}", element.description)
              .replaceAll("{{id}}", element.price);
          });
          res.end(
            readProduct.replaceAll("{{content}}", replacedFound.join(""))
          );
        }
      } else {
        res.end(readSearch.replace("{{message}}", "Wat r zu looking for?"));
      }
      break;
    default:
      req.statusCode = 404;
      res.end(`404 NOT FOUND`);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
