import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalize',
    pure: true
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (!value) return value;

        return value.replace(/\w\S*/g, function (txt: string) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}