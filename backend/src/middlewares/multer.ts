import multer from 'multer'
import path from 'path'
import randomstring from 'randomstring'
import fs from 'fs'

const generatedStorage = () => {
    return multer.diskStorage({
        destination(req, file, cb){
            cb(null, path.join(__dirname, '../uploads'))
        },
        async filename(req, file, cb){
            const { originalname } = file
    
            const originalnameSplit = originalname.split('.')
            const fileExt = originalnameSplit[originalnameSplit.length - 1]
    
            const filename = randomstring.generate(8) + '.' + fileExt
            await fs.stat(path.join(__dirname, '../uploads/' + filename), (err, image) => {
                if(image){
                    generatedStorage()
                } else {
                    console.log(err)
                }
            })
    
            cb(null, filename)
        }
    })
 }

 const storage = generatedStorage()

export default multer({
    storage,
    fileFilter(req, file, next){
        const image = file.mimetype.startsWith('image/')
        
        if(image){
            next(null, true)
        } else {
            next(null, false)
        }
    }
})