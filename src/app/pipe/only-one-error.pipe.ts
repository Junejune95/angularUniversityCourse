import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'onlyOneError'
})
export class OnlyOneErrorPipe implements PipeTransform {

    transform(allErrors: any, errorsPriority: string) {
        console.log(allErrors);
        if (!allErrors) {
            return null;
        }

        const onlyOneError: any = {};

        for (let error of errorsPriority) {
            console.log(error);
            if (allErrors[error])
            {
                onlyOneError[error] = allErrors[error];
                break;
            }
               
        }
        return onlyOneError;
    }

}