import { RequestHandler } from 'express'
import  path from 'path'
import { APIError } from '../../../model/shared/messages';

export const apiDownloadImage: RequestHandler = (req, res, next) => {
    // const filename = req.params.filename
    // res.download(path.join(__root, 'public', 'img', filename), (err) => {
    //     if(err) {
    //         next (new APIError('Download failed.', 'Cannot download', 400))
    //     }
    // })
}