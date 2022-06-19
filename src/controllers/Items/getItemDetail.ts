import { Request, Response } from "express";
import axios from "axios";
import { errorHandler } from "../../utils/errorHandler";

export async function getItemDetail(req: Request, res: Response) {
  const { MELI_API } = process.env;
  const { id } = req.params;

  if (!id) res.status(400).send({ error: "You need to send the id" });

  const [descriptionData]: any = await Promise.allSettled([
    axios.get(`${MELI_API}/items/${id}/description`),
  ]);

  const description =
    descriptionData?.value && descriptionData?.value?.data
      ? descriptionData.value.data.plain_text.replace(/__\w+/g, " ")
      : "";

  try {
    const { data: productData } = await axios.get(`${MELI_API}/items/${id}`);

    const {
      id: productId,
      title,
      category_id,
      price,
      currency_id,
      sold_quantity,
      shipping,
      pictures,
      condition,
    } = productData;

    const { data: categoryData }: any = await axios.get(
      `${MELI_API}/categories/${category_id}`
    );

    return res.status(200).send({
      author: {
        name: "Wesley",
        lastname: "Amaro",
      },
      item: {
        id: productId,
        title,
        category: {
          id: categoryData.id ?? null,
          name: categoryData.name ?? "",
        },
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
        description: description,
      },
    });
  } catch (err) {
    return errorHandler(err, res);
  }
}
