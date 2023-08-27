import { Response, NextFunction } from 'express';
import { PayloadRequest } from '../../express/types.js';
import { Document } from '../../types/index.js';
import findByID from '../operations/findByID.js';

export type FindByIDResult = {
  message: string;
  doc: Document;
};

export default async function findByIDHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<FindByIDResult> | void> {
  try {
    const doc = await findByID({
      req,
      collection: req.collection,
      id: req.params.id,
      depth: Number(req.query.depth),
      draft: req.query.draft === 'true',
    });
    return res.json(doc);
  } catch (error) {
    return next(error);
  }
}
