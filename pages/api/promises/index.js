import { getDocuments, insertDocument } from '../../../helpers/db';
import Joi from 'joi';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const promises = await getDocuments('promises');
    return res.status(200).json(promises);
  }

  if (req.method === 'POST') {

    // Validate the data
    const schema = Joi.object().keys({
      promise: Joi.string().trim().required(),
      context: Joi.string().trim().required(),
      person: Joi.string().trim().required(),
      date: Joi.date(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: 'Certains champs ne sont pas valides.' });
    }

    // Construct the data
    const data = {
      ...req.body,
      status: 'pending',
    }

    // 
    const promise = await insertDocument('promises', data);
    return res.status(200).json({ message: 'La promesse a bien été ajoutée.', details: promise });
  }

  // Return unauthorised method
  return res.status(405).send('Method not allowed');
}