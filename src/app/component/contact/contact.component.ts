import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  email: string = '';
  subject: string = '';
  message: string = '';
  showSuccessNotification = false;
  submitted = false;  // To track form submission state
  isFlying = false;   // To track the animation state (flying)

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.isFlying = true;  // Trigger the animation when form is submitted

    const formData = {
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    // Send the form data to Discord webhook
    const webhookUrl = 'https://discord.com/api/webhooks/1347942137844600986/PhLxXycPt1Pr-Uho9E_j4nqaD9xJINksNetXnrwNf_uA-gl8ylBWTNTADvTP2fYTDrN0';
    
    this.http.post(webhookUrl, {
      content: `New message received:

      <@415136736717438976>

      **Email**: ${formData.email}
      **Subject**: ${formData.subject}
      **Message**: ${formData.message}`
    }).subscribe(
      (response) => {
        // Show success notification
        this.showSuccessNotification = true;

        // Clear the form after successful submission
        this.email = '';
        this.subject = '';
        this.message = '';

        // Optionally, hide the success message after a few seconds
        setTimeout(() => {
          this.showSuccessNotification = false;
        }, 5000);
      },
      (error) => {
        console.error('Error sending webhook', error);
        alert('There was an error sending the form. Please try again.');
      }
    );
    
    // Wait for 1s (time of animation) and then show tick
    setTimeout(() => {
      this.submitted = true;
    }, 1000); // After 1 second, change to tick
  }
}
