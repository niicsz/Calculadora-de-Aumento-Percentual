import { Component, signal, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  initialValue: number | null = null;
  percentageIncrease: number | null = null;
  resultMessage = signal<string | null>(null);
  isDarkMode = signal<boolean>(true);

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    this.updateBodyClass();
  }

  calculateFinalValue() {
    if (this.initialValue !== null && this.percentageIncrease !== null) {
      const finalValue = this.initialValue * (1 + (this.percentageIncrease / 100));
      this.resultMessage.set(`O valor final é: ${finalValue.toFixed(2)}`);
    } else {
      this.resultMessage.set('Por favor, preencha todos os campos.');
    }
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkMode()) {
      this.renderer.addClass(this.document.body, 'dark-mode');
      this.renderer.removeClass(this.document.body, 'light-mode');
    } else {
      this.renderer.addClass(this.document.body, 'light-mode');
      this.renderer.removeClass(this.document.body, 'dark-mode');
    }
  }
}
