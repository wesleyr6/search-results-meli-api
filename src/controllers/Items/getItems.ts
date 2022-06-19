import { Request, Response } from "express";
import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

function getCategory(arr: any[]) {
  const cat = arr.find((item) => item.id === "category");
  return cat ? cat.values[0].name : "";
}

export async function getItems(req: Request, res: Response) {
  const { MELI_API } = process.env;
  const { q } = req.query;

  if (!q) res.status(400).send({ error: "Missing query param" });

  try {
    const { data }: any = await axios.get(
      `${MELI_API}/sites/MLA/search?q=${q}&limit=4`
    );

    let items: any = [];

    if (data?.results && data?.results.length) {
      items = data.results.map((item: any) => {
        const {
          id: productId,
          title,
          price,
          currency_id,
          condition,
          thumbnail,
          shipping,
          address,
        } = item;

        return {
          id: productId,
          title,
          location: address.state_name ?? "",
          price: {
            currency: currency_id,
            amount: price,
            decimals: 2,
          },
          picture:
            thumbnail ??
            "https://stock.adobe.com/search/images?k=no%20image%20available",
          condition: condition ?? "",
          free_shipping: !!shipping?.free_shipping,
        };
      });
    }

    return res.status(200).send({
      author: {
        name: "Wesley",
        lastname: "Amaro",
      },
      category: getCategory(
        data.filters.length ? data.filters : data.available_filters
      ),
      items,
    });
  } catch (err) {
    return errorHandler(err, res);
  }
}
