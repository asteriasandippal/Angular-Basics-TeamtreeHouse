import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    title: string = "My First Photo";
    photo: string = "http://via.placeholder.com/800x500?text=Angular";
    description: string = "A Description of My First Photo";
    comments: any[] = [
        {
            name: "Sandip", 
            comment: "A comment"
        },
        {
            name: "Rayel", 
            comment: "A comment"
        },
        {
            name: "Gopal", 
            comment: "A comment"
        }
    ]
}
