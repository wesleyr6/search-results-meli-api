import { Request, Response } from "express";
import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

export async function getItems(req: Request, res: Response) {
  const { MELI_API } = process.env;
  const { q } = req.query;

  if (!q) res.status(400).send({ error: "Missing query param" });

  try {
    const { data }: any = await axios.get(
      `${MELI_API}/sites/MLA/search?q=${q}`
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
        } = item;

        return {
          id: productId,
          title,
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
      items,
    });
  } catch (err) {
    return errorHandler(err, res);
  }
}
