import { Request, Response } from "express";
import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

export async function getItemDetail(req: Request, res: Response) {
  const { MELI_API } = process.env;
  const { id } = req.params;

  if (!id) res.status(400).send({ error: "You need to send the id" });

  const fetchProduct = axios.get(`${MELI_API}/items/${id}`);
  const fetchProductDescription = axios.get(
    `${MELI_API}/items/${id}/description`
  );

  try {
    const [productData, descriptionData] = await Promise.all([
      fetchProduct,
      fetchProductDescription,
    ]);

    const { plain_text } = descriptionData.data;
    const {
      id: productId,
      title,
      price,
      currency_id,
      sold_quantity,
      shipping,
      pictures,
      condition,
    } = productData.data;

    return res.status(200).send({
      author: {
        name: "",
        lastname: "",
      },
      item: {
        id: productId,
        title,
        price: {
          currency: currency_id,
          amount: price,
          decimals: 2,
        },
        picture:
          pictures && pictures.length
            ? pictures[0].secure_url
            : "https://stock.adobe.com/search/images?k=no%20image%20available",
        condition: condition ?? "",
        free_shipping: !!shipping?.free_shipping,
        sold_quantity: sold_quantity ?? 0,
        description: plain_text ?? "",
      },
    });
  } catch (err) {
    return errorHandler(err, res);
  }
}
