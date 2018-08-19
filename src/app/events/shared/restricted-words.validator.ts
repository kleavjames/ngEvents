import { ValidatorFn, FormControl } from '@angular/forms';

// custom validator
export function restrictedWords(words): ValidatorFn {
  return (control: FormControl): {[key: string]: string} => {
    if (!words) {
      return null;
    } else {
      const invalidWords = words
        .map(word => control.value.includes(word) ? word : null)
        .filter(word => word != null);

      return invalidWords && invalidWords.length > 0
        ? {'restrictedWords': invalidWords.join(', ')} : null;
    }
  };
}
