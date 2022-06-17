import { Response } from "express";

export function errorHandler(err: any, res: Response): Response {
  const getStatusCode = err?.response?.data?.status ?? 500;
  const getMessage = err?.response?.data?.message ?? "Something went wrong";

  return res.status(getStatusCode).send({ error: getMessage });
}
