import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from '../models/pet';

export const search = (req: Request, res: Response) => {
    const query: string = req.query.q as string;
    if(!query) {
        res.redirect('/');
        return
    }
    const list = Pet.getFromName(query);
    console.log(list)

    res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        query
    });
};