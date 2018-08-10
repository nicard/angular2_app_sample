import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'titleFilter'
})
export class TitleFilter implements PipeTransform{
    transform(photos, filter: string){
        return photos.filter(ph => {
            if(!ph.titulo)
                return false;
            return ph.titulo.toLowerCase().includes(filter.toLowerCase())
        });
    }
}