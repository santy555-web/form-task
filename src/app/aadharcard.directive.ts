import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAadharcard]'
})
export class AadharcardDirective {

  @HostListener('input' , ['$event']) onkeyup(event: KeyboardEvent)
  {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 12)
    {
      trimmed=trimmed.substr(0,12);
    }

    let numbers=[];
    for(let i=0;i<trimmed.length;i+=4)
    {
      numbers.push(trimmed.substr(i,4));
    }

    input.value=numbers.join(' ');
  }
}


