import { ObjectId } from 'mongodb'
import { patchDocument, getDocument } from '../../../helpers/db';

export default async function handler(req, res) {
  const { promiseId } = req.query;

  if (req.method === 'GET') {
    let promise = await getDocument('promises', { _id: ObjectId(promiseId) });
    promise = JSON.parse(JSON.stringify(promise));
    return res.status(200).json(promise);
  }

  if (req.method === 'PATCH') {
    const data = req.body;
    const promise = await patchDocument('promises', { _id: ObjectId(promiseId) }, data);
    return res.status(200).json(promise);
  }
}