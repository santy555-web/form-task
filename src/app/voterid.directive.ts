import { Directive, ElementRef, forwardRef, HostListener, Type } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[appVoterid]'
})
export class VoteridDirective {


  @HostListener('input' , ['$event']) onkeyup(event: KeyboardEvent)
  {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 10)
    {
      trimmed=trimmed.substr(0,10);
    }

    let numbers=[];
    for(let i=0;i<trimmed.length;i+=2)
    {
      numbers.push(trimmed.substr(i,2));
    }

    input.value=numbers.join(' ');
  }
}
