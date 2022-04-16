import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageFormat' })
export class ImageFormatPipe implements PipeTransform {
    transform(image: string, path: string = '', toReplace?: boolean) {
        if (path == 'default') {
            path = 'assets';
        }
        if (image.length == 0 && toReplace) {
            image = 'semCapa.jpg';
        }
        return `/${path}/${image}`;
    }
}