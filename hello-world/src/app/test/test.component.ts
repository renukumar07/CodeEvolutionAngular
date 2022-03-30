import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template:   `
              <div>
                Inline template with backticks
              </div>
              `,
  styles: [`
    div{
      color: red;
    }
  `],
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
